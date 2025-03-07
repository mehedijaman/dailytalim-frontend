import useFontResize from '@/hooks/useFontResize';
import { Range } from 'react-range';

const FontSize = () => {
  const {
    arabicFontSize,
    setArabicFontSize,
    banglaFontSize,
    setBanglaFontSize,
  } = useFontResize();

  return (
    <div className="flex flex-col gap-4 p-4 text-white">
      {/* Arabic Font Size */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-base text-black">আরবি ফন্ট সাইজ</span>
          <span className="text-green-500">{arabicFontSize}</span>
        </div>
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
                className="h-1 rounded-lg"
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
      </div>

      {/* Bangla Translation Font Size */}
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-base text-black">অনুবাদ ফন্ট সাইজ</span>
          <span className="text-green-500">{banglaFontSize}</span>
        </div>
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
                className="h-1 rounded-lg"
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
      </div>
    </div>
  );
};

export default FontSize;
