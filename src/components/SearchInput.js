import react from "react"
import { Search, X } from "lucide-react"



export default function SearchInput() {
    return (
    

    <div className="relative pb-4">
      <div className="relative w-full transition-all duration-300 
                      bg-white/15 focus-within:bg-white/25 group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-white/70 group-focus-within:text-white" />
        </div>
        
        <input
          
          type="text"
          className="w-full py-3 pl-10 pr-10 text-sm text-white bg-transparent border-none
                    rounded-lg focus:outline-none focus:ring-0 placeholder:text-white/70"
          placeholder={"Buscar..."}
        />
      </div>
    </div>
)};