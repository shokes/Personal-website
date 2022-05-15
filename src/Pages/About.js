import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import Shokes from '../Images/shokes.jpeg';
import { Zoom, Slide } from 'react-awesome-reveal';
import GoToTop from '../GoToTop';
const About = function () {
  return (
    <section className='max-w-5xl mx-auto  '>
      <Navbar />
      <div className='  flex mt-20 space-x-20 '>
        <Zoom triggerOnce>
          <img className='w-50 h-50 rounded-lg' src={Shokes} alt='Shokes' />
        </Zoom>
        <div className='about-content'>
          <h3 className='text-lg text-text-color font-bold'>Hello world. ✨</h3>
          <Slide direction='up' triggerOnce>
            <p className='mb-6 mt-3 text-text-color text-xl tracking-wide '>
              Hi, I’m Oshoke Oyati, a meticulous Frontend Developer currently
              based in Nigeria and I enjoy what I do. I am passionate about
              solving complex problems with responsive website design.
            </p>

            <p className='mb-6 text-text-color text-xl tracking-wide'>
              Proficient in vanilla javascript, hence can easily adapt to any of
              its frameworks depending on the requirements of the job. Because
              I'm a huge React fan, this website was built with React.
            </p>

            <p className='mb-6 text-text-color text-xl tracking-wide'>
              I'm thrilled by logic; and I solve problems for fun. When I'm not
              working I'm either watching football games, catching up on my
              latest shows, listening to music or surfing the internet.
            </p>

            <a
              className='bg-text-link text-background font-semibold px-2 py-1 rounded-lg hover:bg-white hover:text-black ease-in duration-300 '
              href='https://drive.google.com/file/d/1F4_h6XCy_xL_MKQsG95_GCd5zBVk1T0O'
              target='_blank'
              rel='noreferrer'
            >
              Resume →
            </a>
          </Slide>
        </div>
      </div>

      <div className='mt-36 '>
        <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest '>
          skills
        </h3>
        <Slide direction='right' duration={1000} triggerOnce>
          <div className='w-full border boder-b border-border'></div>
        </Slide>

        <Slide direction='up'>
          <div className='flex '>
            <div className='w-1/2'>
              <div className='semi-bold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2'>
                languages/frameworks
              </div>
              <ul>
                <li className='text-text-color '>HTML 5</li>
                <li className='text-text-color '>CSS 3</li>
                <li className='text-text-color '>TailwindCss</li>
                <li className='text-text-color '>JavaScript</li>
                <li className='text-text-color '>ReactJs</li>
              </ul>
            </div>

            <div className='w-1/2'>
              <div className='semi-bold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2'>
                tools
              </div>
              <ul>
                <li className='text-text-color '>Git/GitHub</li>
                <li className='text-text-color '> Vs Code</li>
                <li className='text-text-color '>Command Line</li>
                <li className='text-text-color '>Responsive Design</li>
                <li className='text-text-color '>Firebase</li>
              </ul>
            </div>
          </div>
        </Slide>
      </div>

      <div>
        <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest mt-8'>
          education
        </h3>
        <Slide direction='left' duration={1000} triggerOnce>
          <div className='w-full border boder-b border-border '></div>
        </Slide>
        <div>
          <Slide direction='up'>
            <div>
              <div className='semi-bold capitalize tracking-widest text-text-color text-2xl mt-4'>
                Ambrose Alli University
              </div>
              <div className='semi-bold capitalize tracking-widest  text-text-color text-base'>
                B.Eng Mechanical Engineering
              </div>
              <span className='text-text-color'>2014-2019</span>
            </div>
          </Slide>
        </div>
      </div>

      <div className='pb-24'>
        <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest mt-8 '>
          experience
        </h3>
        <Slide direction='right' duration={1000} triggerOnce>
          <div className='w-full border boder-b border-border'></div>
        </Slide>
        <Slide direction='up'>
          <div className='flex '>
            <div className='w-1/2'>
              <div className='semi-bold capitalize tracking-widest text-text-color text-2xl mt-4'>
                IT Consultant
              </div>
              <span className='text-text-color'>2020-present</span>
            </div>

            <div className='w-1/2'>
              <div className='semi-bold capitalize tracking-widest text-text-color text-2xl mt-4'>
                {' '}
                Frontend Developer
              </div>
              <p className='text-text-color'>
                I help bring various clients' visions into reality through
                seamless processes and on time delivery.
              </p>
            </div>
          </div>
        </Slide>
        <Slide direction='up'>
          <div className='flex'>
            <div className='w-1/2'>
              <div className='semi-bold capitalize tracking-widest text-text-color text-2xl mt-4'>
                {' '}
                Nestle
              </div>
              <span className='text-text-color'> June 2018-Dec 2018</span>
            </div>

            <div className='w-1/2'>
              <div className='semi-bold capitalize tracking-widest text-text-color text-2xl mt-4'>
                {' '}
                Mechanical Engineer
              </div>
              <p className='text-text-color'>
                I managed a variety of customer services and administrative
                tasks to resolve customer issues.
              </p>
            </div>
          </div>
        </Slide>

        <Slide direction='up'>
          <div className='flex'>
            <div className='w-1/2'>
              <div className='semi-bold capitalize tracking-widest text-text-color text-2xl mt-4'>
                {' '}
                AltSchool Africa
              </div>
              <span className='text-text-color'>Feb 2022-present</span>
            </div>

            <div className='w-1/2'>
              <div className='semi-bold capitalize tracking-widest text-text-color text-2xl mt-4'>
                {' '}
                Frontend Developer Student
              </div>
              <p className='text-text-color'>
                Excited to begin my journey at a very good school that teaches
                skills that apply to my everyday work.
              </p>
            </div>
          </div>
        </Slide>
      </div>
      <StickyBottomNav />
      <GoToTop />
    </section>
  );
};

export default About;
