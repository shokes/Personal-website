import { Link } from 'react-router-dom';

const StickyBottomNav = function () {
  return (
    <section className='px-48'>
      <div className='bottom-0 left-0 right-0 fixed text-text-color pb-3 pt-3'>
        <ul className='flex  justify-evenly text-xl capitalize'>
          <Link to='/work' className='font-semibold'>
            work
          </Link>
          <Link to='/about' className='font-semibold'>
            about
          </Link>
          <Link to='/contact' className='font-semibold'>
            contact
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default StickyBottomNav;
