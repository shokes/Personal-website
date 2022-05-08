import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import Shokes from '../Images/shokes.jpeg';
import { Zoom } from 'react-awesome-reveal';

const About = function () {
  return (
    <section className='container'>
      <Navbar />
      <div className='about-flex'>
        <Zoom>
          <img className='about-image' src={Shokes} alt='Shokes' />
        </Zoom>
        <div className='about-content'>
          <h3>Hello world.</h3>
          <p>
            Hi, I’m Oshoke Oyati, a meticulous Frontend Developer currently
            based in Nigeria and I enjoy what I do. I am passionate about
            solving complex problems with responsive website design.
          </p>

          <p>
            Proficient in vanilla javascript, hence can easily adapt to any of
            its frameworks depending on the requirements of the job.
          </p>

          <p>
            I'm thrilled by logic; and I solve problems for fun. When I'm not
            working I'm either watching football games, catching up on my latest
            shows, listening to music or surfing the internet.
          </p>

          <a
            class='btn'
            href='https://drive.google.com/file/d/1F4_h6XCy_xL_MKQsG95_GCd5zBVk1T0O'
            target='_blank'
          >
            Resume →
          </a>
        </div>
      </div>
      <StickyBottomNav />
    </section>
  );
};

export default About;
