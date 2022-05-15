const SingleWork = function ({ title, desc, github, image, stack, website }) {
  return (
    <div className='rounded-lg p-3 shadow-xl'>
      <h3 className='text-text-link tracking-wider text-xl font-bold uppercase mb-3 '>
        {title}
      </h3>
      <p className='mb-3 text-text-color text-base'>{desc}</p>
      <p className='mb-3 text-text-color font-semibold'>{stack.join(', ')}.</p>
      <div className='flex justify-between mb-1'>
        <a
          className='text-text-link font-medium capitalize'
          target='_blank'
          href={website}
          rel='noreferrer'
        >
          live
        </a>
        <a
          className='text-text-link font-medium capitalize'
          target='_blank'
          href={github}
          rel='noreferrer'
        >
          GitHub
        </a>
      </div>

      <img
        src={image}
        alt='project'
        className='w-full h-56 md:h-64 rounded-lg'
      />
    </div>
  );
};

export default SingleWork;
