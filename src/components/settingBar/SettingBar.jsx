'use client';
import useSidebarsContext from '@/hooks/useSidebarsContext';
import FontResize from './FontResize';
import ThemeControl from './ThemeControl';

const SettingBar = () => {
  const { isSettingBarOpen } = useSidebarsContext();

  return (
    <div
      className={`fixed top-16 h-screen w-72 border-l border-border-color bg-background p-6 ${isSettingBarOpen ? 'right-0' : 'right-0 translate-x-full'} transition-transform duration-300`}
    >
      <h2 className="text-lg font-semibold">সেটিংস</h2>
      <ThemeControl />

      <FontResize />
    </div>
  );
};

export default SettingBar;
