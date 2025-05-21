import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      login(res.data.token);
      navigate('/');
      console.log(res);
    } catch (err) {
      alert(err.response?.data?.msg || 'Error al hacer login');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" className="w-full p-2 mb-4 border border-gray-400 rounded" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Contraseña" className="w-full p-2 mb-4 border border-gray-400 rounded" value={password} onChange={e => setPassword(e.target.value)} required />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Entrar</button>
    </form>
  );

}