import React from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode }  from 'jwt-decode';

export default function Admin() {
  const token = localStorage.getItem('token');
  let user = null;

  try {
    user = token ? jwtDecode(token) : null;
  } catch (err) {
    user = null;
  }

  if (!user || user.role !== 'admin') {
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">Acceso restringido. Solo administradores.</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-6">
      <h2 className="text-2xl font-bold mb-4">Panel de Administración</h2>
      <p className="text-lg mb-4">Bienvenido, administrador. Aquí puedes gestionar el ecommerce.</p>
      <ul className="list-none mb-4">
        <li className="mb-2">
          <Link to="/admin/categories" className="text-blue-500 hover:text-blue-700">Gestionar categorías</Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/products" className="text-blue-500 hover:text-blue-700">Gestionar productos</Link>
        </li>
        <li className="mb-2">
          <Link to="/admin/orders" className="text-blue-500 hover:text-blue-700">Gestionar pedidos</Link>
        </li>
      </ul>
    </div>
  );
}