import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import projects from '../data';
import { Zoom } from 'react-awesome-reveal';
import SingleWork from '../Components/SingleWork';
import GoToTop from '../GoToTop';

const Work = function () {
  return (
    <section>
      <Navbar />

      {/* //  <Zoom cascade triggerOnce duration={600}></Zoom> */}
      <div className='grid-cols-1 md:max-w-2xl max-w-sm lg:max-w-5xl mx-auto mt-20 grid lg:grid-cols-2 gap-7 pb-20'>
        <Zoom cascade triggerOnce duration={600}>
          {projects.map((project) => {
            console.log(project);
            return <SingleWork key={project.id} {...project} />;
          })}
        </Zoom>
      </div>
      <StickyBottomNav />
      <GoToTop />
    </section>
  );
};

export default Work;
