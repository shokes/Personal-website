import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import { Slide } from 'react-awesome-reveal';

const Contact = function () {
  return (
    <section>
      <Navbar />

      <div className='px-60  mt-20'>
        <h2 className='text-4xl capitalize text-center mb-5 font-bold'>
          get in touch!
        </h2>
        <Slide direction='up' duration={200}>
          <p className='text-xl text-center mb-12 px-20'>
            Are you in need of a web developer? I'm open to freelance/contract
            jobs, and frontend developer roles as well. Let's work together!
          </p>
          <div className='text-center mb-20'>
            <a
              className='bg-pink-800 text-gray-200 px-2 py-1 rounded-lg hover:bg-white hover:text-black ease-in duration-300 text-center '
              href='https://drive.google.com/file/d/1F4_h6XCy_xL_MKQsG95_GCd5zBVk1T0O'
              target='_blank'
            >
              Send email →
            </a>
          </div>
        </Slide>
        <div className='grid grid-cols-4 justify-center items-center text-center'>
          <Slide direction='up' delay={200} duration={300}>
            <div>
              <a
                className=' text-pink-800 text-xl font-semibold '
                href='https://drive.google.com/file/d/1F4_h6XCy_xL_MKQsG95_GCd5zBVk1T0O'
                target='_blank'
              >
                GitHub
              </a>
            </div>
          </Slide>
          <Slide direction='up' delay={400} duration={300}>
            <div>
              <a
                className=' text-pink-800 text-xl font-semibold '
                href='https://drive.google.com/file/d/1F4_h6XCy_xL_MKQsG95_GCd5zBVk1T0O'
                target='_blank'
              >
                Twitter
              </a>
            </div>
          </Slide>
          <Slide direction='up' delay={600} duration={300}>
            <div>
              <a
                className=' text-pink-800 text-xl font-semibold '
                href='https://drive.google.com/file/d/1F4_h6XCy_xL_MKQsG95_GCd5zBVk1T0O'
                target='_blank'
              >
                Email
              </a>
            </div>
          </Slide>
          <Slide direction='up' delay={800} duration={300}>
            <div>
              <a
                className=' text-pink-800 text-xl font-semibold'
                href='https://drive.google.com/file/d/1F4_h6XCy_xL_MKQsG95_GCd5zBVk1T0O'
                target='_blank'
              >
                LinkedIn
              </a>
            </div>
          </Slide>
        </div>
      </div>
      <StickyBottomNav />
    </section>
  );
};

export default Contact;
