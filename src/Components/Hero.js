import cartoon from '../Images/oshoke-cartoon.png';
import { Slide, Fade } from 'react-awesome-reveal';

const Hero = function () {
  return (
    <section>
      <div className='flex mt-36 justify-center items-center gap-x-7 px-60 overflow-x-hidden '>
        <Fade duration={3000}>
          <div className=''>
            <p className=''>
              Hi, I'm <b>Oshoke Oyati</b>
            </p>

            <p className=' text-pink-800 font-semibold text-7xl capitalize'>
              frontend{' '}
            </p>
            <h1 className=' text-pink-800 font-semibold text-7xl capitalize mb-2'>
              developer;
            </h1>

            <p className='text-xl '>
              I'm a Frontend Developer currently based in Nigeria with
              professional experience in building and delivering end to end
              solutions for digital products. 🚀
            </p>
          </div>
        </Fade>

        <Slide direction='right' duration={1000}>
          <div className='w-64'>
            <img src={cartoon} alt='cartoon' />
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Hero;
