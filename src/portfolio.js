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
  githubUserName: 'angus-macdonald',
};

export const contact = {
  "email": "angus@houdini.dev",
  "mobile": "0417 675 508"
}

export const socialLinks = {
    "github": "https://github.com/angus-macdonald",
    "linkedin": "https://www.linkedin.com/in/angus-macdonald-399a061aa/",
    "email": "angus@houdini.dev",
    "mobile": "0417 675 508"
}

export const skillsSection = {
    title: 'My Skills',
    subTitle: 'Throughout my years of education, I have obtained a library of languages and frameworks.',
    skills: [
      emoji(
        '⚡ Develop code for real-world problems and projects, such as simulations and interactive applications.'
      ),
      emoji('⚡ Follow coding conventions with clear commenting and informative documentation.'),
      emoji(
        '⚡ Use of third-party services, such as RESTApi and AWS.'
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
      schoolName: 'Queensland University of Technology',
      subHeader: 'Bachelor of Information Technology - Computer Science',
      duration: 'February 2019 - Current',
      desc: 'Majoring in Computer Science, Minors in Intelligent Systems and Computational & Simulation Science'
    }
]

export const experience = [
  {
    
  }
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