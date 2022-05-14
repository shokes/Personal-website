import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import projects from '../data';
import { Slide } from 'react-awesome-reveal';
import SingleWork from '../Components/SingleWork';

const Work = function () {
  return (
    <section>
      <Navbar />
      <div className='px-60 mt-20 grid grid-cols-2 gap-7 pb-20'>
        {projects.map((project) => {
          console.log(project);
          return <SingleWork key={project.id} {...project} />;
        })}
      </div>
      <StickyBottomNav />
    </section>
  );
};

export default Work;
