import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const nav = [
  {
    id: 1,
    title: 'work',
    url: '/work',
  },

  {
    id: 2,
    title: 'about',
    url: '/about',
  },
];

const StickyBottomNav = function () {
  return (
    <section className='px-48'>
      <div className='bottom-0 bg-background ease-in duration-300 left-0 right-0 fixed text-text-color pb-3 pt-3'>
        <ul className='flex  justify-evenly text-xl capitalize'>
          {/* <NavLink className='hover:text-text-link'>
          <Link to='/work' className='font-semibold'>
            work
          </Link>
          <Link to='/about' className='font-semibold'>
            about
          </Link>
          </NavLink> */}

          {nav.map((item) => (
            <NavLink
              to={item.url}
              key={item.id}
              className='hover:text-text-link'
            >
              <div className='font-semibold'>{item.title}</div>
            </NavLink>
          ))}
          <a
            className='font-semibold'
            href='mailto:oyatioshoke@yahoo.com'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            contact
          </a>
        </ul>
      </div>
    </section>
  );
};

export default StickyBottomNav;
