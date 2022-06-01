import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import projects from '../data';

import SingleWork from '../Components/SingleWork';
import GoToTop from '../GoToTop';
import { BsDashLg } from 'react-icons/bs';
const Work = function () {
  return (
    <section>
      <Navbar />

      <div className='md:max-w-2xl max-w-sm lg:max-w-5xl mx-auto mt-20 pb-20'>
        <h2 className='mb-12 text-3xl text-text-color font-semibold tracking-wider'>
          <BsDashLg className='text-text-link mr-1 inline' />
          projects
        </h2>
        <div className='grid-cols-1'>
          {/* <Zoom cascade triggerOnce duration={600}> */}
          {projects.map((project) => {
            return <SingleWork key={project.id} {...project} />;
          })}
          {/* </Zoom> */}
        </div>
      </div>
      <StickyBottomNav />
      <GoToTop />
    </section>
  );
};

export default Work;
