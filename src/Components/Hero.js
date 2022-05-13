import cartoon from '../Images/oshoke-cartoon.png';
import { Slide, Fade } from 'react-awesome-reveal';

const Hero = function () {
  return (
    <section className='container mx-auto px-40'>
      <div className='flex mt-36 justify-center items-center gap-56'>
        <Fade duration={3000}>
          <div>
            <p className=''>
              Hi, I'm <b>Oshoke Oyati</b>
            </p>

            <p className='text-7xl capitalize'>frontend </p>
            <h1 className='text-7xl capitalize mb-2'>developer;</h1>

            <p className='text-xl '>
              I'm a Frontend Developer currently based in Nigeria with
              professional experience in building and delivering end to end
              solutions for digital products. 🚀
            </p>
          </div>
        </Fade>

        <Slide direction='right' duration={1000}>
          <img className='h-80 w-240' src={cartoon} alt='cartoon' />
        </Slide>
      </div>
    </section>
  );
};

export default Hero;
