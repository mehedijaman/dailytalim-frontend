import { FiMinus, FiPlus } from 'react-icons/fi';

const FontSize = ({ fontSize, increaseFontSize, decreaseFontSize }) => {
  return (
    <div className="flex items-center gap-4 text-black fixed bottom-10">
      <button
        className="cursor-pointer rounded-full p-2 shadow-sm hover:bg-green-200"
        onClick={decreaseFontSize}
      >
        <FiMinus size={24} />
      </button>
      <span>{fontSize}</span>
      <button
        className="cursor-pointer rounded-full p-2 shadow-sm hover:bg-green-200"
        onClick={increaseFontSize}
      >
        <FiPlus size={24} />
      </button>
    </div>
  );
};

export default FontSize;