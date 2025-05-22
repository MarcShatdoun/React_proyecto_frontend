import React, { useState, useEffect } from "react";
import axios from "axios"

export default function Filter() {
const [categories, setCategories] = useState([]);

const fetchCategories = async () => {
    const res = await axios.get('http://localhost:4000/api/categories');
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);



    return (
        <section className="w-full max-w-md mx-auto bg-white row-span-5">
            <div>
                <h3 className="text-2xl font-bold">Filtrar por categoria</h3>
                {categories.map((categoria) => (
                    <div className="flex items-center justify-center">
                        <label>
                            <input className="w-4 h-3" type="checkbox" id={categoria.id} value={categoria.name} /> {categoria.name}
                        </label>
                    </div>
                 
                ))}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Filtrar</button>

            </div>
        </section>
    );
}