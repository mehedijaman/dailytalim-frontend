import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/ui/input';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex items-center rounded-lg border border-gray-500 px-4 py-1">
      <FaSearch size={20} className="text-gray-600" />
      <Input
        placeholder="অনুসন্ধান করুন..."
        className="w-full border-none bg-transparent text-gray-700 placeholder-gray-500 outline-none"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
