import country from './Images/country rest.png';
import omuwa from './Images/omuwa-photography.png';
import portfolioV1 from './Images/portfolio-screenshot.png';
import countryInfo from './Images/countryInfo.jpg';
import photography from './Images/photography.jpg';
import port from './Images/port1.png';
import port2 from './Images/port2.png';
import country2 from './Images/country2.png';
import nextglass from './Images/nextglass.png';
import nextglass2 from './Images/nextglass2.png';
import nextGlass from './Images/nextGlass.jpg';
import omuwa2 from './Images/omuwa2.png';
import BGKICKS from './Images/30BGKICKS.jpg';
import bgkicks1 from './Images/bgkicks1.png';
import bgkicks2 from './Images/bgkicks2.png';

const projects = [
  {
    id: 1,
    title: '30BG KICKS',
    image: bgkicks1,
    image2: bgkicks2,
    desc: 'An E-commerce web app with authentication and payment integration.',
    website: 'https://30bgkicks.vercel.app/',
    github: 'https://github.com/shokes/30BGKICKS',
    stack: ['React', 'TailwindCss', 'Paystack API', 'React-router', 'Auth0'],
    role: 'Frontend development.',
    mainImage: BGKICKS,
    year: 2022,
    para1:
      'Building this web app was complex. I had some difficulties, i could not get a free api to use for this application  so i came up with a database of my own.',
    para2:
      'Another difficulty was while sorting the array, it kept on mutating the original so i had to spread out before sorting to prevent mutating. A simple fix it might seem, but it took me sometime to figure the root of the issue. ',
    para3:
      'The process was mostly enjoyable as I had fun playing around with some new stuff like payment integration using the paystack api, tailwind css for styling and authentication with auth0.',
  },
  {
    id: 2,
    title: 'country info',
    image: country,
    image2: country2,
    desc: 'A web app that displays info of a country as requested with a theme switcher.',
    website: 'https://countries-infoo.vercel.app/',
    github: 'https://github.com/shokes/Country-rest-API',
    stack: ['React', 'CSS 3', 'API', 'React-router'],
    role: 'Frontend development.',
    mainImage: countryInfo,
    year: 2022,
    para1:
      'This was the first application I built when I was learning about accessing data from an API. Country Info is a web application showing basic information about a country searched for by the user. ',
    para2:
      'The original idea for this project came from Frontend Mentors but I was able to build upon the idea by adding a few more functionalities, a preloader and a theme switcher. I managed the states with the context API and useReducer. ',

    para3:
      'This project made me better at destructuring as well as accessing data dynamically from an API.',
  },

  {
    id: 3,
    title: 'Next Glass',
    image: nextglass,
    image2: nextglass2,
    desc: 'A minimal and beautiful NextJS personal blog with a nice glassmorphism ui coupled with sanity cms for content management.',
    website: 'https://next-glass-gamma.vercel.app/',
    github: 'https://github.com/shokes/Next-Glass',
    stack: ['NextJS', 'React', 'TailwindCSS', 'Sanity CMS'],
    role: 'Frontend development. ',
    mainImage: nextGlass,
    year: 2022,
    para1:
      'After getting a basic understanding of NextJS and a headless CMS, I wanted to build something with it and this was the result. I wanted the user interface to be minimal and beautiful and use the Glassmorphism design trend. I also wanted non-technical users to be able to add and update the site content easily. ',
    para2:
      'After checking several headless cms, I decided to choose Sanity because it is simple, has an intuitive content editor and generous pricing.',
    para3:
      'NextJS did not take long to get hold of because of its great docs, kudos to the team at vercel. After some googling, i was able to figure out connecting a CMS to it.',
  },

  {
    id: 4,
    title: 'omuwa photography',
    image: omuwa,
    image2: omuwa2,
    desc: 'A portfolio website for a photographer.',
    website: 'https://omuwa-photography.vercel.app/',
    github: 'https://github.com/shokes/Omuwa-Photography',
    stack: ['React', 'CSS 3', 'React-router'],

    role: 'Frontend development. ',
    mainImage: photography,
    year: 2022,
    para1:
      'This is a simple and minimal portfolio website for a photographer. ',
    para2:
      'After my understanding of the fundamentals of React, I wanted to apply that knowledge immediately into something simple but beautiful and this was the result. ',
    para3:
      'I wanted the site to have some simple animation too, I used React awesome reveal for that. CSS 3 is my go to for styling. ',
  },

  {
    id: 5,
    title: 'Previous portfolio',
    image: port,
    image2: port2,
    desc: 'My first portfolio website.',
    website: 'https://shokes.vercel.app/',
    github: 'https://github.com/shokes/Porfolio-website',
    stack: ['HTML 5', 'CSS 3', 'vanilla JavaScript'],
    role: 'Frontend development. ',
    mainImage: portfolioV1,
    year: 2021,
    para1:
      'This is the first version of my portfolio website made with HTML 5, CSS 3 and a little Javascript. ',
    para2:
      'After the first few months of learning HTML, CSS and JS, I was eager to have a website where I can showcase projects I had worked on and this was what i built. I got to master some interesting CSS properties like grid and flex box. ',
    para3:
      'It still contains some of the projects I worked on in my early days learning frontend developerment. ',
  },
];

export default projects;
