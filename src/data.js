import country from './Images/country rest.png';
import landy from './Images/landy.png';
import overreacted from './Images/overreacted-clone-screenshot.png';
import grocery from './Images/grocery-bud-app-screenshot.png';
import omuwa from './Images/omuwa-photography.png';
import portfolioV1 from './Images/portfolio-screenshot.png';

const projects = [
  {
    id: 1,
    title: 'country info',
    image: country,
    desc: 'A web app that displays info of a country as requested with a theme switcher.',
    website: 'https://countries-infoo.vercel.app/',
    github: 'https://github.com/shokes/Country-rest-API',
    stack: ['React', 'CSS 3', 'API', 'React-router'],
  },

  {
    id: 2,
    title: 'landy news',
    image: landy,
    desc: 'A web app displaying news content as searched for by the user with a theme switcher.',
    website: 'https://landy-news.netlify.app/',
    github: 'https://github.com/shokes/News-app',
    stack: ['React', 'CSS 3', 'API', 'React-router'],
  },

  {
    id: 3,
    title: 'omuwa photography',
    image: omuwa,
    desc: 'A portfolio website for a photographer.',
    website: 'https://omuwa-photography.vercel.app/',
    github: 'https://github.com/shokes/Omuwa-Photography',
    stack: ['React', 'CSS 3', 'React-router'],
  },

  {
    id: 4,
    title: 'grocery bud',
    image: grocery,
    desc: 'A grocery bud app with an alert functionality.',
    website: 'https://shokes-grocery.netlify.app/',
    github: 'https://github.com/shokes/Grocery-bud',
    stack: ['React', 'CSS 3'],
  },

  {
    id: 5,
    title: 'Overreacted clone',
    image: overreacted,
    desc: "A clone of Dan Abramov's overreacted blog.",
    website: 'https://dan-clone.netlify.app/',
    github: 'https://github.com/shokes/Dan-abramov-blog-clone',
    stack: ['React', 'CSS 3'],
  },

  {
    id: 6,
    title: 'Previous portfolio',
    image: portfolioV1,
    desc: 'My first portfolio website.',
    website: 'https://shokes.vercel.app/',
    github: 'https://github.com/shokes/Porfolio-website',
    stack: ['HTML 5', 'CSS 3', 'vanilla JavaScript'],
  },
];

export default projects;
