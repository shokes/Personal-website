import cartoon from '../Images/oshoke-cartoon.png';
import oshokelight from '../Images/oshoke-light.png';
import { Slide, Fade } from 'react-awesome-reveal';
import { useGlobalContext } from '../context';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
const Hero = function () {
  const { theme } = useGlobalContext();
  return (
    <section>
      <div className='max-w-sm md:max-w-2xl md:pb-24 lg:flex mt-28 justify-center items-center gap-x-48  lg:max-w-5xl mx-auto overflow-x-hidden '>
        <Fade duration={3000}>
          {theme === 'dark-theme' ? (
            <div className=''>
              <p className='text-lg text-text-color'>
                Hello, I'm <b>Oshoke Oyati</b>
              </p>

              <h1 className=' text-text-link text-7xl capitalize font-semibold '>
                frontend{' '}
              </h1>
              <h1 className=' text-text-link  text-7xl font-semibold  capitalize mb-2'>
                developer
              </h1>

              <p className='text-xl  text-text-color mb-3'>
                I'm a Frontend Developer currently based in Nigeria with
                professional experience in building and delivering end to end
                solutions for digital products. 🚀
              </p>

              <div className='flex space-x-4'>
                <a
                  href='https://twitter.com/Airshokes'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaTwitter className='w-7 h-7 text-text-link   font-semibold' />
                </a>
                <a
                  className=' text-text-link text-xl font-semibold '
                  href='https://github.com/shokes'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithub className='w-7 h-7 text-text-link   font-semibold' />
                </a>
                <a
                  className=' text-text-link text-xl font-semibold'
                  href='https://www.linkedin.com/in/oshoke-oyati?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7bIwlnH1TeKUJ6r3jWAS6g%3D%3D'
                  rel='noreferrer'
                  target='_blank'
                >
                  <FaLinkedin className='w-7 h-7 text-text-link   font-semibold' />
                </a>

                <a
                  className='  text-xl font-semibold '
                  href='mailto:oyatioshoke@yahoo.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GrMail className='w-7 h-7 text-text-link   font-semibold' />
                </a>
              </div>
            </div>
          ) : (
            <div className=''>
              <p className='text-lg text-text-color'>
                Hi, I'm <b>Oshoke</b>
              </p>

              <p className=' text-text-link font-semibold text-7xl capitalize'>
                software{' '}
              </p>
              <h1 className=' text-text-link font-semibold text-7xl capitalize mb-2'>
                engineer
              </h1>

              <p className='text-xl font-playfair text-text-color mb-3'>
                A problem-solving language-learning beast, with the keen eye of
                a growth engineer.📈
              </p>

              <div className='flex space-x-4'>
                <a
                  href='https://twitter.com/Airshokes'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaTwitter className='w-7 h-7 text-text-link   font-semibold' />
                </a>
                <a
                  className=' text-text-link text-xl font-semibold '
                  href='https://github.com/shokes'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithub className='w-7 h-7 text-text-link font-semibold' />
                </a>
                <a
                  href='https://www.linkedin.com/in/oshoke-oyati?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B7bIwlnH1TeKUJ6r3jWAS6g%3D%3D'
                  rel='noreferrer'
                  target='_blank'
                >
                  <FaLinkedin className='w-7 h-7 text-text-link   font-semibold' />
                </a>

                <a
                  className='  text-xl font-semibold '
                  href='mailto:oyatioshoke@yahoo.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GrMail className='w-7 h-7 text-text-link  font-semibold' />
                </a>
              </div>
            </div>
          )}
        </Fade>

        <Slide direction='right' duration={1000}>
          <div className='w-64 hidden  lg:block'>
            {theme === 'dark-theme' ? (
              <img src={cartoon} alt='cartoon' />
            ) : (
              <img src={oshokelight} alt='cartoon' />
            )}
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Hero;
