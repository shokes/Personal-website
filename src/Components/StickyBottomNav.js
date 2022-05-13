import { Link } from 'react-router-dom';

const StickyBottomNav = function () {
  return (
    <section className='container'>
      <div className='mx-60 bottom-3 left-0 right-0 fixed'>
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
