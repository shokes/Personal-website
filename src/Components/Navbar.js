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

  const changeTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.classList = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <section className='container'>
      <nav className='nav-flex'>
        <Link to='/' className='logo'>
          shokes
        </Link>
        <div>
          <button className='toggle' onClick={changeTheme}>
            {theme === 'light-theme' ? <BsToggleOn /> : <BsToggleOff />}
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
