import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import Shokes from '../Images/shokes.jpeg';
import { Zoom, Slide } from 'react-awesome-reveal';

const About = function () {
  return (
    <section>
      <Navbar />
      <div className='px-60 flex mt-20 space-x-20 '>
        <Zoom>
          <img className='w-50 h-50 rounded-lg' src={Shokes} alt='Shokes' />
        </Zoom>
        <div className='about-content'>
          <h3 className='text-lg font-bold'>Hello world. ✨</h3>
          <Slide direction='up'>
            <p className='mb-2 mt-3 text-gray-800 text-base '>
              Hi, I’m Oshoke Oyati, a meticulous Frontend Developer currently
              based in Nigeria and I enjoy what I do. I am passionate about
              solving complex problems with responsive website design.
            </p>

            <p className='mb-2 text-base text-gray-800 '>
              Proficient in vanilla javascript, hence can easily adapt to any of
              its frameworks depending on the requirements of the job.
            </p>

            <p className='mb-2 text-base text-gray-800'>
              I'm thrilled by logic; and I solve problems for fun. When I'm not
              working I'm either watching football games, catching up on my
              latest shows, listening to music or surfing the internet.
            </p>

            <a
              className='bg-pink-800 text-gray-200 px-2 py-1 rounded-lg hover:bg-white hover:text-black ease-in duration-300 '
              href='https://drive.google.com/file/d/1F4_h6XCy_xL_MKQsG95_GCd5zBVk1T0O'
              target='_blank'
              rel='noreferrer'
            >
              Resume →
            </a>
          </Slide>
        </div>
      </div>
      <StickyBottomNav />
    </section>
  );
};

export default About;
