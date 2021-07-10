import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1ABFqyxQF3bszd0exjg_TZbYiQFvAfYox/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpeg',
    title: 'Connect 4',
    info: 'For my first ever project, I re-created the classic game of Connect 4 using JavaScript, HTML, and CSS. Click on the link below and enjoy the classic game with friend!',
    info2: '',
    url: ' https://mherr95.github.io/connectfour-app/',
    repo: 'https://github.com/mherr95/mherr95.github.io', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpeg',
    title: 'Fitness Week',
    info: 'This second project was one that I really enjoyed creating. It is a full-stack application that allows users to create workout routines and keep traxk of their weekly workout schedule.',
    info2: '',
    url: 'https://sleepy-mesa-34044.herokuapp.com/day',
    repo: 'https://github.com/mherr95/weekly-workout-routine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpeg',
    title: 'Things I Like',
    info: 'For this third project I had the opportunity to work with a great team to create a MERN stack application. This application was created to make a list of all the users favorite movies and songs.',
    info2: '',
    url: 'https://sleepy-tor-42367.herokuapp.com/',
    repo: 'https://github.com/Keith-Levine/project-3-front', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michael-herr95/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mherr95',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
