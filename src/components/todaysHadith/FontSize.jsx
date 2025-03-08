import useFontResize from '@/hooks/useFontResize';
import { Range } from 'react-range';

const FontSize = () => {
  const {
    arabicFontSize,
    setArabicFontSize,
    banglaFontSize,
    setBanglaFontSize,
  } = useFontResize();

  const resetArabicFontSize = () => setArabicFontSize(24); // Default value
  const resetBanglaFontSize = () => setBanglaFontSize(18); // Default value

  return (
    <div className="flex flex-col gap-4 rounded-lg">
      {/* Arabic Font Size */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">আরবি ফন্ট সাইজ</span>
          <span className="text-green-500">{arabicFontSize}</span>
        </div>
        <div className="flex items-center gap-2">
          <Range
            step={1}
            min={22}
            max={42}
            values={[arabicFontSize]}
            onChange={values => setArabicFontSize(values[0])}
            renderTrack={({ props, children }) => {
              const percentage = ((arabicFontSize - 22) / (42 - 22)) * 100;
              const { key, ...restProps } = props;
              return (
                <div
                  key={key}
                  {...restProps}
                  className="h-1 flex-grow rounded-lg hover:cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #16db65 ${percentage}%, gray ${percentage}%)`,
                  }}
                >
                  {children}
                </div>
              );
            }}
            renderThumb={({ props }) => {
              const { key, ...restProps } = props;
              return (
                <div
                  key={key}
                  {...restProps}
                  className="h-4 w-4 cursor-pointer rounded-full bg-green-400"
                />
              );
            }}
          />
          <div className="mx-2 h-4 border-l border-gray-300"></div>{' '}
          {/* Border between range and reset button */}
          <button
            onClick={resetArabicFontSize}
            className="rounded bg-red-500 px-2 py-1 text-xs text-white"
          >
            Reset
          </button>
        </div>
      </div>
      {/* Bangla Translation Font Size */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">অনুবাদ ফন্ট সাইজ</span>
          <span className="text-green-500">{banglaFontSize}</span>
        </div>
        <div className="flex items-center gap-2">
          <Range
            step={1}
            min={18}
            max={32}
            values={[banglaFontSize]}
            onChange={values => setBanglaFontSize(values[0])}
            renderTrack={({ props, children }) => {
              const percentage = ((banglaFontSize - 18) / (32 - 18)) * 100;
              const { key, ...restProps } = props;
              return (
                <div
                  key={key}
                  {...restProps}
                  className="h-1 flex-grow rounded-lg hover:cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #16db65 ${percentage}%, gray ${percentage}%)`,
                  }}
                >
                  {children}
                </div>
              );
            }}
            renderThumb={({ props }) => {
              const { key, ...restProps } = props;
              return (
                <div
                  key={key}
                  {...restProps}
                  className="h-4 w-4 cursor-pointer rounded-full bg-green-400"
                />
              );
            }}
          />
          <div className="mx-2 h-4 border-l border-gray-300"></div>{' '}
          {/* Border between range and reset button */}
          <button
            onClick={resetBanglaFontSize}
            className="rounded bg-red-500 px-2 py-1 text-xs text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FontSize;
