import {
    mobile,
    backend,
    creator,
    web,
    cpp,
    nextjs,
    socketio,
    express,
    firebase,
    github,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    cloutflow,
    codify,
    ecommerce,
    chatapp,
    raveai,
    cryptotracker,
    railway,
    realcrud,
    blogapp,
    tesla,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "tech",
        title: "Tech Stack",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Software Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "Socket.io",
        icon: socketio,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: express,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "CloutFLow",
        icon: cloutflow,
        iconBg: "#00013A",
        date: "Jun 2022 – Aug 2022",
        points: [
            "Utilized Ant Design Library and React-typescript for front-end development.",
            "Worked with Node.js-typescript along with MongoDB as a database for the back-end.",
            "Built an admin panel from scratch and incorporated Firebase for authentication.",
            "Designed a customized cursor-based pagination system to paginate data.",
        ],
    },
    {
        title: "Junior Developer Intern",
        company_name: "Codify Apps Private Limited",
        icon: codify,
        iconBg: "#f2f2f2",
        date: "Mar 2022 – Apr 2022",
        points: [
            "Developed a Node.js application and worked on its deployment to a server hosted by Digital Ocean.",
            "With a team of 2, created a WhatsApp bot that uses Node.js and the puppeteer library to send automated campaigns.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];


const projects = [
    {
        name: "E-Commerce Website",
        description:
            "Web-based platform that enables customers to browse the store categories and products as well as customize their profile and inlcudes and features like search filters. The admin can access the admin panel that allows the admin to oversee and control all store components",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "contextapi",
                color: "green-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "orange-text-gradient",
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/PrateekPheonix/E-Commerce",
    },
    {
        name: "Real-time Chat App",
        description:
            "A chat application that allows private messaging between multiple users by using a room ID feature.The application's front-end was built with HTML, CSS, and JS. The back-end was created with Node.js, Express.js, and socket.io, which utilized web sockets to enable two-way communication.",
        tags: [
            {
                name: "nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "socketio",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: chatapp,
        source_code_link: "https://github.com/PrateekPheonix/node-tuts-chat-app",
    },
    {
        name: "RaveAI",
        description:
            "A comprehensive web app that converts a text prompt into an image and allows users to share it on a community page. The application would utilize OpenAI API to do so.The user would input a text prompt in the application, and the backend of the application would generate an image based on the text. Once the image is generated, the user can share it on the community page.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "mondodb",
                color: "pink-text-gradient",
            },
            {
                name: "openai",
                color: "orange-text-gradient",
            },
        ],
        image: raveai,
        source_code_link: "https://github.com/PrateekPheonix/Rave",
    },
    {
        name: "Cryptocurrency Tracker",
        description:
            "A React-based cryptocurrency tracker was developed using Axios, which pulls real-time data from a Rest API. The tracker utilized chart.js to display the prices of different cryptocurrencies with the help of descriptive charts. Additionally, a keyword search feature was integrated to allow users to easily search for their desired cryptocurrency.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "chartjs",
                color: "pink-text-gradient",
            },
            {
                name: "axios",
                color: "orange-text-gradient",
            },
        ],
        image: cryptotracker,
        source_code_link: "https://github.com/PrateekPheonix/crypto-tracker",
    },
    {
        name: "Railway Mangement System",
        description:
            "Railway Management System is an application built for users to book trains and administrators to run and manage trains. Guest User can view ticket. Logged In User can view, book, cancel ticket, change Password and login or logout of account. Administrator have all the powers of the End user and can also create or remove trains and view all the tickets booked.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "pink-text-gradient",
            },
            {
                name: "nodejs",
                color: "orange-text-gradient",
            },
        ],
        image: railway,
        source_code_link: "https://github.com/PrateekPheonix/railway-management-system",
    },
    {
        name: "Real-Time CRUD",
        description:
            "A web application that enables users to perform CRUD (Create, Read, Update, Delete) operations on data in real-time. Real-time updates are made possible using Socket.IO, which enable two-way communication between the frontend and backend.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "socketio",
                color: "pink-text-gradient",
            },
            {
                name: "nodejs",
                color: "orange-text-gradient",
            },
        ],
        image: realcrud,
        source_code_link: "https://github.com/PrateekPheonix/railway-management-system",
    },
    {
        name: "Blog App",
        description:
            "A comprehensive web application that allows users to create, edit, and publish blog posts.The blog app would include features like post creation and editing, and like functionality. The app leverages two popular state management tools, Redux and Context API, to handle the application's state.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "contextapi",
                color: "pink-text-gradient",
            },
        ],
        image: blogapp,
        source_code_link: "https://github.com/PrateekPheonix/Blog-App-Redux-ContextAPI",
    },
    {
        name: "Tesla Clone",
        description:
            "A Tesla CLone website that emulates the design and functionality of the Tesla website. The project is built using React.js and EchmaScript6 and CSS to create a visually appealing and interactive frontend.The application would feature a similar design to the Tesla website, with sections dedicated to different car models, features, and pricing.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "es6",
                color: "green-text-gradient",
            },
            {
                name: "styledcomponents",
                color: "pink-text-gradient",
            },
        ],
        image: tesla,
        source_code_link: "https://github.com/PrateekPheonix/Blog-App-Redux-ContextAPI",
    },
];

export { services, technologies, experiences, projects };