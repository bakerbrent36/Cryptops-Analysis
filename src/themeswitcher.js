import useLocalStorage from 'use-local-storage';

const ThemeSwitcher = function() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

        const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        };
    };
    
export default ThemeSwitcher;