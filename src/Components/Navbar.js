import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Navbar = function () {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.documentElement.classList = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themeHandler = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
    } else {
      setTheme('dark-theme');
    }
  };
  return (
    <section>
      <nav className='pt-12 max-w-5xl mx-auto flex items-center justify-between text-text-color'>
        <Link
          to='/'
          className='text-2xl  tracking-wider uppercase font-extrabold'
        >
          shokes
        </Link>

        <div className='text-3xl text-text-link' onClick={themeHandler}>
          <button>
            {theme === 'dark-theme' ? <BsToggleOff /> : <BsToggleOn />}
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
