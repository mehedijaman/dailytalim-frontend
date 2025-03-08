'use client';
import useSidebarsContext from '@/hooks/useSidebarsContext';
import FontResize from './FontResize';

const SettingBar = () => {
  const { isSettingBarOpen } = useSidebarsContext();

  return (
    <div
      className={`fixed top-16 h-screen w-72 border-l bg-white p-6 dark:border-dailyTalim-border-dark dark:bg-dailyTalim-darkBg ${isSettingBarOpen ? 'right-0' : 'right-0 translate-x-full'} transition-transform duration-300`}
    >
      <h2 className="mb-4 text-lg font-semibold">Settings</h2>

      <FontResize />
    </div>
  );
};

export default SettingBar;
