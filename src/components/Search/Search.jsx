import { FaSearch } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { Input } from '@/components/ui/input';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex items-center rounded-lg border border-muted px-3 py-1">
      <p hidden={searchQuery}>
        <FaSearch
          size={20}
          className="text-text-color"
          aria-hidden={searchQuery}
        />
      </p>
      <Input
        placeholder="অনুসন্ধান করুন..."
        className="w-full border-none bg-transparent placeholder-muted outline-none"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={() => setSearchQuery('')} hidden={!searchQuery}>
        <IoMdCloseCircle size={20} aria-hidden={!searchQuery} />
      </button>
    </div>
  );
};

export default Search;
