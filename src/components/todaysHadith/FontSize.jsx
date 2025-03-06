import { Range } from 'react-range';

const FontSize = ({ fontSize, setFontSize }) => {
  return (
    <div className="flex flex-col gap-4 p-4 text-white">
      {/* Arabic Font Size */}
      <div className="flex flex-col gap-2">
        <span className="text-lg text-black">আরবি ফন্ট সাইজ</span>
        <Range
          step={1}
          min={10}
          max={30}
          values={[fontSize.arabic]}
          onChange={(values) => setFontSize((prev) => ({ ...prev, arabic: values[0] }))}
          renderTrack={({ props, children }) => (
            <div {...props} className="h-2 bg-gray-700 rounded-lg">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="w-4 h-4 bg-green-500 rounded-full cursor-pointer" />
          )}
        />
        <span className="text-green-500">{fontSize.arabic}</span>
      </div>

      {/* Bangla Translation Font Size */}
      <div className="flex flex-col gap-2">
        <span className="text-lg text-black">অনুবাদ ফন্ট সাইজ</span>
        <Range
          step={1}
          min={10}
          max={30}
          values={[fontSize.bangla]}
          onChange={(values) => setFontSize((prev) => ({ ...prev, bangla: values[0] }))}
          renderTrack={({ props, children }) => (
            <div {...props} className="h-2 bg-gray-700 rounded-lg">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="w-4 h-4 bg-green-500 rounded-full cursor-pointer" />
          )}
        />
        <span className="text-green-500">{fontSize.bangla}</span>
      </div>
    </div>
  );
};

export default FontSize;
