import { Slide } from 'react-awesome-reveal';

const SingleWork = function ({ title, desc, github, image, stack, website }) {
  return (
    <Slide direction='up' triggerOnce>
      <div className='rounded-lg p-3 shadow-xl'>
        <h3 className='text-pink-800 text-xl font-bold uppercase mb-3 '>
          {title}
        </h3>
        <p className='mb-3 text-gray-700 text-base'>{desc}</p>
        <p className='mb-3 font-semibold'>{stack.join(', ')}.</p>
        <div className='flex justify-between mb-1'>
          <a
            className='text-pink-700 font-medium capitalize'
            target='_blank'
            href={website}
            rel='noreferrer'
          >
            live
          </a>
          <a
            className='text-pink-700 font-medium capitalize'
            target='_blank'
            href={github}
            rel='noreferrer'
          >
            GitHub
          </a>
        </div>

        <img src={image} alt='project' className='w-full h-30 rounded-lg' />
      </div>
    </Slide>
  );
};

export default SingleWork;
