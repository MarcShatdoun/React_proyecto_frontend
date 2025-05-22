import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SearchContainer  from '../components/Search';
import SectionResult from '../components/SectionResult';


export default function Home() {
  const  { user } = useAuth();
  console.log(user);

  return (
   
    <div className="text-center">
      <h1 className="text-5xl font-bold">Bienvenido a Mi Ecommerce</h1>
      <p className="text-2xl">Compra productos increíbles y gestiona el sitio si eres administrador.</p>
     
      <div className="mt-10 flex justify-center space-x-4">
        {user === null &&
        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Iniciar sesión
        </Link>
        }
        <Link to="/admin" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Ir al panel admin
        </Link>
        <Link to="/admin/categories" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Gestionar categorías
        </Link>
      </div>
    
      <SearchContainer />
      <SectionResult />
      
       
    </div>

    
  );
}
