import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";

const Search = () => {
    return (
        <div className="flex items-center  border border-gray-500 rounded-lg px-4 py-1  ">
            <FaSearch size={20} className="text-gray-600" />
            <Input 
                placeholder="অনুসন্ধান করুন..." 
                className="outline-none border-none bg-transparent placeholder-gray-500  text-gray-700 w-full"
            />
        </div>
    );
};

export default Search;
