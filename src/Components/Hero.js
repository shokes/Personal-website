import cartoon from '../Images/oshoke-cartoon.png';
import { Slide, Fade } from 'react-awesome-reveal';

const Hero = function () {
  return (
    <section className='container'>
      <div className='hero-flex'>
        <Fade duration={3000}>
          <div>
            <p className='into'>
              Hi, I'm <b>Oshoke Oyati</b>
            </p>

            <h1>frontend developer;</h1>
            <p className='intro-desc'>
              I'm a Frontend Developer currently based in Nigeria with
              professional experience in building and delivering end to end
              solutions for digital products. 🚀
            </p>
          </div>
        </Fade>

        <Slide direction='right' duration={1000}>
          <img className='hero-image' src={cartoon} alt='cartoon' />
        </Slide>
      </div>
    </section>
  );
};

export default Hero;
