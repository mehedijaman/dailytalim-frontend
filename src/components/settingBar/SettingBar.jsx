'use client';
import useSidebarsContext from '@/hooks/useSidebarsContext';

const SettingBar = () => {
  const { isSettingBarOpen } = useSidebarsContext();

  return (
    <div
      className={`fixed top-16 h-screen w-72 border-l bg-white dark:border-dailyTalim-border-dark dark:bg-dailyTalim-darkBg ${isSettingBarOpen ? 'right-0' : 'right-0 translate-x-full'} transition-transform duration-300`}
    >
      SettingBar
    </div>
  );
};

export default SettingBar;
