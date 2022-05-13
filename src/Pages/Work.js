import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import country from '../Images/country rest.png';

const Work = function () {
  return (
    <section className='container'>
      <Navbar />
      <div>
        <div>
          <img src={country} alt='project-image' className='w-30 h-30' />
          <div></div>
        </div>
      </div>
      <StickyBottomNav />
    </section>
  );
};

export default Work;
