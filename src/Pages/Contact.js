import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import GoToTop from '../GoToTop';
import { BsDashLg } from 'react-icons/bs';
import { Slide } from 'react-awesome-reveal';

const Contact = function () {
  return (
    <section>
      <Navbar />
      <div className='md:max-w-2xl max-w-sm lg:max-w-5xl mx-auto mt-20 pb-20'>
        <h2 className='mb-12 text-3xl text-text-color font-semibold tracking-wider'>
          <BsDashLg className='text-text-link mr-1 inline' />
          contact
        </h2>
        <div className='text-center'>
          <h4 className=' uppercase text-xl text-text-color mb-4'>
            send me a message
          </h4>
          <Slide direction='up' duration={200}>
            <a
              className='text-6xl font-semibold text-text-color underline mail'
              href='mailto:oyatioshoke@yahoo.com'
              target='_blank'
              rel='noreferrer'
            >
              oyatioshoke@yahoo.com
            </a>
          </Slide>

          <h4 className=' uppercase text-xl text-text-color mt-10 mb-4'>
            OR CONNECT WITH ME ON SOCIALS
          </h4>
          <div className='grid grid-cols-1'>
            <Slide direction='up' delay={200} duration={300} className=' mb-1'>
              <a
                href='https://twitter.com/Airshokes'
                target='_blank'
                rel='noreferrer'
                className='underline text-6xl  uppercase  text-text-color'
              >
                Twitter
              </a>
            </Slide>
            <Slide direction='up' delay={400} duration={300} className=' mb-1'>
              <a
                className='underline uppercase text-6xl  text-text-color '
                href='https://github.com/shokes'
                target='_blank'
                rel='noreferrer'
              >
                github
              </a>
            </Slide>
            <Slide direction='up' delay={600} duration={300} className=' mb-1'>
              <a
                className='underline uppercase text-6xl  text-text-color'
                href='https://www.linkedin.com/in/oshoke-oyati?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7bIwlnH1TeKUJ6r3jWAS6g%3D%3D'
                rel='noreferrer'
                target='_blank'
              >
                linkedin
              </a>
            </Slide>
          </div>
        </div>
      </div>
      <StickyBottomNav />
      <GoToTop />
    </section>
  );
};

export default Contact;
