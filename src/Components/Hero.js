import cartoon from '../Images/oshoke-cartoon.png';
import oshokelight from '../Images/oshoke-light.png';
import { Slide, Fade } from 'react-awesome-reveal';
import { useGlobalContext } from '../context';

const Hero = function () {
  const { theme } = useGlobalContext();
  return (
    <section>
      <div className='max-w-sm md:max-w-2xl  lg:flex mt-36 justify-center items-center gap-x-48  lg:max-w-5xl mx-auto overflow-x-hidden '>
        <Fade duration={3000}>
          {theme === 'dark-theme' ? (
            <div className=''>
              <p className='text-lg text-text-color'>
                Hello, I'm <b>Oshoke Oyati</b>
              </p>

              <p className=' text-text-link font-semibold text-7xl capitalize'>
                frontend{' '}
              </p>
              <h1 className=' text-text-link font-semibold text-7xl capitalize mb-2'>
                developer;
              </h1>

              <p className='text-xl font-playfair text-text-color'>
                I'm a Frontend Developer currently based in Nigeria with
                professional experience in building and delivering end to end
                solutions for digital products. 🚀
              </p>
            </div>
          ) : (
            <div className=''>
              <p className='text-lg text-text-color'>
                Hi, I'm <b>Oshoke</b>
              </p>

              <p className=' text-text-link font-semibold text-7xl capitalize'>
                website{' '}
              </p>
              <h1 className=' text-text-link font-semibold text-7xl capitalize mb-2'>
                developer;
              </h1>

              <p className='text-xl font-playfair text-text-color'>
                A problem solving language learning beast, with the keen eye of
                a growth engineer.📈
              </p>
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
