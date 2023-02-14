import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Angus Macdonald",
    "title": "Software engineer at Precision AI",
    "description": "Full-stack developer with expertise in building reactive front-end web applications served by .NET services hosted in cloud environments. I deliver complete web solutions that are not only visually appealing and user-friendly, but also scalable and secure.",
    "resumeLink": "https://houdini.dev"
}

export const openSource = {
  githubUserName: 'angus-macdonald',
};

export const contact = {
  "email": "angus@houdini.dev"
}

export const socialLinks = {
    "github": "https://github.com/angus-macdonald",
    "linkedin": "https://www.linkedin.com/in/angus-macdonald-399a061aa/",
    "email": "angus@houdini.dev",
}

export const skillsSection = {
    title: 'My Skills',
    subTitle: 'A showcase of my diverse and extensive education in programming languages and frameworks.',
    skills: [
      emoji(
        '⚡ Strong focus on test-driven development.'
      ),
      emoji('⚡ Experience designing programs that are scalable, testable, and maintainable.'),
      emoji(
        '⚡ Emphasis on using design patterns to eliminate dependencies and promote good software architecture. '
      ),
        emoji(
        '⚡ Commitment to writing clean, efficient code that can be easily maintained and modified over time. '
      ),
        emoji(
        '⚡ Continuously seeking new ways to improve skills and stay ahead of industry trends.'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'Typescript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'C-Sharp',
        fontAwesomeClassname: 'vscode-icons:file-type-csharp2',
      },
      {
        skillName: 'Python',
        fontAwesomeClassname: 'logos:python',
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
        skillName: 'vuejs',
        fontAwesomeClassname: 'vscode-icons:file-type-vue',
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
    ],
}

export const educationInfo = [
    {
      schoolName: 'Queensland University of Technology',
      subHeader: 'Bachelor of Information Technology - Computer Science',
      duration: 'February 2019 - July 2022',
      desc: 'Majoring in Computer Science, Minors in Intelligent Systems and Computational & Simulation Science'
    }
]

export const experience = [
	{}
]

export const projects = [
  {
    name: "Tool Library - C#",
    desc: "Using the .NET Console, I created a service to allows users to borrow multiple tools from a library, alongside administration priviledges.",
    link: {
    name: "Code and Technical Report Repository",
    url: "https://www.github.com/Angus-Macdonald/Csharp_Library"
    }
  },
  {
    name: "Artificial Intelligence - Python",
    desc: "Using recursive functions and object-orientated design, the project is able to find the optimal path to mine resources.",
    link: {
      name: "Code and Report Repository",
      url: "https://www.github.com/Angus-Macdonald/AI-Mining-Python"
    }
  },
  {
    name: "Billboard Management and Display - Java",
    desc: "As a team, I developed a dynamic GUI for a service that allowed users to create digital billboards, and schedule their display.",
    link: {
      name: "Code Repository",
      url: "https://www.github.com/Angus-Macdonald/BillboardHero"
    }
  }
]
