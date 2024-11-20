import { useEffect } from 'react';

function useBootstrapTheme(themeName) {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `/themes/${themeName}.css`;     // load theme from themes folder
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Cleanup previous theme
    };
  }, [themeName]);
}

export default useBootstrapTheme;
