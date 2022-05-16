import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import { Slide } from 'react-awesome-reveal';
import GoToTop from '../GoToTop';

const Contact = function () {
  return (
    <section>
      <Navbar />

      <div className='max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto  mt-20 md:pb-24'>
        <h2 className='text-4xl capitalize text-center text-text-color mb-8 font-bold'>
          get in touch!
        </h2>
        <Slide direction='up' duration={200}>
          <p className='text-xl text-center mb-12 lg:px-20  text-text-color '>
            You can reach out to me via Email. I’m not really active on Linkedin
            but you can follow me on Twitter. I post links to really good music
            on my twitter but if you want something serious you can check my
            GitHub.
          </p>
          <div className='text-center mb-20'>
            <a
              className='bg-text-link text-background font-semibold px-2 py-1 rounded-lg hover:bg-white hover:text-black ease-in duration-300 text-center '
              href='mailto:oyatioshoke@yahoo.com'
              target='_blank'
              rel='noreferrer'
            >
              Send email →
            </a>
          </div>
        </Slide>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-5 justify-center items-center text-center'>
          <Slide direction='up' delay={200} duration={300}>
            <div>
              <a
                className=' text-text-link text-xl font-semibold '
                href='https://github.com/shokes'
                target='_blank'
                rel='noreferrer'
              >
                GitHub
              </a>
            </div>
          </Slide>
          <Slide direction='up' delay={400} duration={300}>
            <div>
              <a
                className=' text-text-link text-xl font-semibold '
                href='https://twitter.com/Airshokes'
                target='_blank'
                rel='noreferrer'
              >
                Twitter
              </a>
            </div>
          </Slide>
          <Slide direction='up' delay={600} duration={300}>
            <div>
              <a
                className=' text-text-link text-xl font-semibold '
                href='mailto:oyatioshoke@yahoo.com'
                target='_blank'
                rel='noreferrer'
              >
                Email
              </a>
            </div>
          </Slide>
          <Slide direction='up' delay={800} duration={300}>
            <div>
              <a
                className=' text-text-link text-xl font-semibold'
                href='https://www.linkedin.com/in/oshoke-oyati?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7bIwlnH1TeKUJ6r3jWAS6g%3D%3D'
                rel='noreferrer'
                target='_blank'
              >
                LinkedIn
              </a>
            </div>
          </Slide>
        </div>
      </div>
      <StickyBottomNav />
      <GoToTop />
    </section>
  );
};

export default Contact;
