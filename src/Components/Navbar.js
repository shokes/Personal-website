import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';

// const getStorageTheme = () => {
//   let theme = 'light-theme';
//   if (localStorage.getItem('theme')) {
//     theme = localStorage.getItem('theme');
//   }
//   return theme;
// };

const Navbar = function () {
  return (
    <section>
      <nav className='pt-12 px-60 flex items-center justify-between'>
        <Link to='/' className='text-2xl tracking-wide uppercase font-medium'>
          shokes
        </Link>

        <div className='text-3xl'>
          <button>
            <BsToggleOn />
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
