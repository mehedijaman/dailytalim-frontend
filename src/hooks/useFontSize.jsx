import { useState } from "react";

const useFontSize = () => {
  const [fontSize, setFontSize] = useState({ arabic: 24, bangla: 19 });

  return { fontSize, setFontSize };
};

export default useFontSize;
