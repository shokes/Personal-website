import { Link } from 'react-router-dom';

const StickyBottomNav = function () {
  return (
    <section className='container '>
      <div className='botton-nav-container'>
        <ul className='main-nav-links'>
          <Link to='/work' className='nav-link'>
            work
          </Link>
          <Link to='/about' className='nav-link'>
            about
          </Link>
          <Link to='/contact' className='nav-link'>
            contact
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default StickyBottomNav;
