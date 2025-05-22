import React from 'react';
import SearchInput from '../components/SearchInput';
import { Search } from 'lucide-react';

export default function SearchContainer(){
    

  return (
    <div className="w-full  mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header with title */}x
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search size={24} className="text-white" />
            <h1 className="text-2xl font-bold text-white">Buscador</h1>
          </div>
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
