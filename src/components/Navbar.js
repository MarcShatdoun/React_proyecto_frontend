import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  
    const handleLogout = () => {
      logout();
      navigate('/'); // 👈 redirige al home
    };


  

  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between py-4 px-6">
      <Link className="text-2xl font-bold" to="/">Ecommerce</Link>
      <div className="flex items-center space-x-6">
        <Link className="text-gray-300 hover:text-white" to="/">Inicio</Link>
        {!user && <Link className="text-gray-300 hover:text-white" to="/login">Login</Link>}
        {user?.role === 'admin' && (
          <Link className="text-gray-300 hover:text-white" to="/admin/categories">Categorías</Link>
        )}
        {user && (
          <>
            <span className="text-gray-300 mx-2">{user.name}</span>
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md" onClick={handleLogout}>Cerrar sesión</button>
          </>
        )}
      </div>
    </nav>
  );
}
