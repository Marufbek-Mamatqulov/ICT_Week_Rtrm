import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return document.documentElement.classList.contains('dark');
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return { dark, toggle: () => setDark(d => !d) };
};
