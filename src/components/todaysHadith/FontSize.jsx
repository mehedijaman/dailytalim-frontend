import { Range } from 'react-range';

const FontSize = ({ fontSize, setFontSize }) => {
  return (
    <div className="flex flex-col gap-4 p-4 text-white">
      {/* Arabic Font Size */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-base text-black">আরবি ফন্ট সাইজ</span>
          <span className="text-green-500">{fontSize.arabic}</span>
        </div>
        <Range
          step={1}
          min={10}
          max={30}
          values={[fontSize.arabic]}
          onChange={values =>
            setFontSize(prev => ({ ...prev, arabic: values[0] }))
          }
          renderTrack={({ props, children }) => {
            const percentage = ((fontSize.arabic - 10) / (30 - 10)) * 100;
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
          <span className="text-green-500">{fontSize.bangla}</span>
        </div>
        <Range
          step={1}
          min={10}
          max={30}
          values={[fontSize.bangla]}
          onChange={values =>
            setFontSize(prev => ({ ...prev, bangla: values[0] }))
          }
          renderTrack={({ props, children }) => {
            const percentage = ((fontSize.bangla - 10) / (30 - 10)) * 100;
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
