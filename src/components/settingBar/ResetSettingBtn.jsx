import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import useFontResize from '@/hooks/useFontResize';

const ResetSettingBtn = () => {
  const { setTheme } = useTheme();
  const { setArabicFontSize, setBanglaFontSize, setPrayerTimeFontSize } =
    useFontResize();

  const handleResetSetting = () => {
    setTheme('system');
    setArabicFontSize(24);
    setBanglaFontSize(18);
    setPrayerTimeFontSize(16);
  };
  return (
    <div className="w-full">
      <Button
        onClick={handleResetSetting}
        className="w-full bg-red-500 hover:bg-red-600 dark:text-white"
      >
        Reset Setting
      </Button>
    </div>
  );
};

export default ResetSettingBtn;
