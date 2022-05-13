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
  // const [theme, setTheme] = useState(getStorageTheme());

  // const changeTheme = () => {
  //   if (theme === 'light-theme') {
  //     setTheme('dark-theme');
  //   } else {
  //     setTheme('light-theme');
  //   }
  // };

  // useEffect(() => {
  //   document.documentElement.classList = theme;
  //   localStorage.setItem('theme', theme);
  // }, [theme]);
  return (
    // <section className='container mx-auto px-40'>
    //   <nav className='flex items-center justify-between  mt-10'>
    //     <Link to='/' className='text-2xl uppercase font-medium'>
    //       shokes
    //     </Link>
    //     <div className='text-2xl'>
    //       <button onClick={changeTheme}>
    //         {theme === 'light-theme' ? <BsToggleOn /> : <BsToggleOff />}
    //       </button>
    //     </div>
    //   </nav>
    // </section>

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
