import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Angus Macdonald",
    "title": "Specialising in Simulation and Intelligent Systems",
    "description": "I'm currently studying at Queensland University of Technology.",
    "resumeLink": "https://houdini.dev"
}

export const openSource = {
  githubUserName: 'AngusMacdonald1996',
};

export const contact = {
  "email": "angusmacdonald1996@outlook.com",
  "mobile": "0417 675 508"
}

export const socialLinks = {
    "github": "https://github.com/AngusMacdonald1996",
    "linkedin": "https://www.linkedin.com/in/angus-macdonald-399a061aa/",
    "email": "angusmacdonald1996@outlook.com",
    "mobile": "0417675508"
}

export const skillsSection = {
    title: 'My Skills',
    subTitle: 'Throughout my years of education, I have obtained a library of languages and frameworks.',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      emoji(
        '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'Python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'C',
        fontAwesomeClassname: 'vscode-icons:file-type-c3',
      },
      {
        skillName: 'C-Sharp',
        fontAwesomeClassname: 'vscode-icons:file-type-csharp2',
      },
      {
        skillName: 'Java',
        fontAwesomeClassname: 'vscode-icons:file-type-java',
      },
      {
        skillName: 'Matlab',
        fontAwesomeClassname: 'vscode-icons:file-type-matlab',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'linux',
        fontAwesomeClassname: 'vscode-icons:folder-type-linux',
      },
      {
        skillName: 'macOS',
        fontAwesomeClassname: 'vscode-icons:folder-type-macos',
      },


    ],
}

export const educationInfo = [
    {
      schoolName: 'Harvard University',
      subHeader: 'Master of Science in Computer Science',
      duration: 'September 2017 - April 2019',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'Harvard',
      subHeader: 'Master of Science in Computer Science',
      duration: 'September 2017 - April 2019',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: 'Stanford University',
      subHeader: 'Bachelor of Science in Computer Science',
      duration: 'September 2013 - April 2017',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit'],
    },
]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Google',
    companylogo: googlelogo,
    date: 'June 2018 – Present',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    descBullets: [
      'Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Github',
    companylogo: github,
    date: 'May 2017 – May 2018',
    desc:
      'Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Airbnb',
    companylogo: airbnb,
    date: 'Jan 2015 – Sep 2015',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export const projects = [
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    name: "lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    link: {
      name: "hanzla",
      url: "kasjfklsdjf"
    }
  }
]