import { useEffect, useState } from 'react';
import axios from 'axios';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { jwtDecode } from 'jwt-decode';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [newName, setNewName] = useState('');
  const token = localStorage.getItem('token');  

  let user = token ? jwtDecode(token) : null;
  
    try {
      user = token ? jwtDecode(token) : null;
    } catch (err) {
      user = null;
    }

  const fetchCategories = async () => {
    const res = await axios.get('http://localhost:4000/api/categories');
    setCategories(res.data);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/categories/create', { name: newName }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setNewName('');
    fetchCategories();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/api/categories/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchCategories();
  };

  const handleUpdate = async (id, newName) => {
    await axios.put(`http://localhost:4000/api/categories/update/${id}`, { name: newName }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchCategories();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (!user || user.role !== 'admin') {
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">Acceso restringido. Solo administradores.</div>;
  }

  return (
  <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Categorías</h2>
    <form onSubmit={handleCreate} className="flex flex-col space-y-4">
      <input
        className="block w-full p-4 pl-10 text-lg text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-gray-200 focus:border-gray-500"
        value={newName}
        onChange={e => setNewName(e.target.value)}
        placeholder="Nueva categoría"
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
        type="submit"
      >
        Crear
      </button>
    </form>
    <ul className="list-none mt-4">
      {categories.map(cat => (
        <li key={cat.id} className="flex justify-between items-center py-4 border-b border-gray-200">
          <span className="text-lg">{cat.name}</span>
          <div className="flex space-x-2">
            <button
              className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded-lg shadow-md"
              onClick={() => {
                const nuevo = prompt("Nuevo nombre:", cat.name);
                if (nuevo) handleUpdate(cat.id, nuevo);
              }}
            >   
              <BiPencil />
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg shadow-md"
              onClick={() => handleDelete(cat.id)}
            >
              <BiTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
}
