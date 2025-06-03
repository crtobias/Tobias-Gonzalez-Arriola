import CardProyect from "./CardProyect"
import elmolino from "../assets/El-Molino.png"
import login from "../assets/Login-Proyect.png"
import Task from "../assets/task.jpeg"
import habits from "../assets/habits.png"
import esmarket from "../assets/Esmarket.png"
import nokki from "../assets/eNooki.png"
import editor from "../assets/editor.png"

export default function Screen3() {

    const proyectoUno = {
        title: "Full Stack - El Molino",
        text: "Developed a full-stack application to enhance restaurant experiences with an online menu system My role  focused on front-end development, including styles, components, and user experience.",
        img: elmolino,
        stackFront: "TypeScript, Redux Toolkit, React, HTML, CSS, Firebase",
        stackBack: "TypeScript, Express.js, Firestore, MongoDB",
        git: "https://github.com/crtobias/El-Molino",
        date: "July 2023 - August 2023"
    }

    const proyectoEditor = {
        title: "Text Editor",
        text: "A text editor built with Next.js and Firebase, currently a work in progress and paused. Started in March 2025. This app allows you to create summaries, save them in the cloud, and keep your notes and summaries uploaded. You can create, edit, and format text freely — adjusting size, colors, and more. It uses a custom system inspired by Markdown but without using Markdown directly.",
        img: editor,
        stackFront: "Next.js, various libraries",
        stackBack: "Firebase",
        git: "",
        date: "March 2025 - Present (paused)"
    };

    const proyectoNoki = {
        title: "Undef",
        text: "A cooperative, multiplatform isometric game started in May 2025, currently in progress. Built using React Native and Firebase backend. It includes real-time features using WebSockets, a custom Shopgrounds system, cloud functions, and more.",
        img: nokki,
        stackFront: "React Native",
        stackBack: "Firebase",
        git: "",
        date: "May 2025 - Present"
    };

    const proyectoHabits = {
        title: "Habits - React Native App",
        text: "Developed a mobile application designed to help users adopt and eliminate habits, focusing on personal growth and self-improvement. The app includes features like habit tracking, user authentication, and email verification.",
        img: habits,
        stackFront: "React Native, NativeWind, Expo Router, TailwindCSS",
        stackBack: "Node.js, Express.js, MongoDB, Prisma ORM, JWT, Nodemailer",
        git: "https://github.com/crtobias/Habits-native-Enero",
        date: "January 2025",
    };


    const proyectoDos = {
        title: "Back End - Login/Register Template",
        text: "Developed a reusable login and registration template for authentication systems. The project includes email verification, token-based authentication, and a scalable architecture for future integrations.",
        img: login,
        stackFront: "React, HTML, CSS, Javascript",
        stackBack: "Javascript, Express.js, Prisma ORM, NodeMailer, PostgreSQL, JWT , Jest , SuperTest",
        git: "https://github.com/crtobias/Template-Login",
        date: "November 2024 - December 2024"
    }

    const proyectoTres = {
        title: "CRUD Tasks",
        text: "technical test for a Full-Stack developer position",
        img: Task,
        stackFront: "React, HTML, tailwind, Javascript, React Router, React Context, vercel",
        stackBack: "Javascript , Node.JS , Express , MongoDB , Mongoose , mongoAtlas , express Validator , swagger , jest , supertest and Render deploy",
        git: "https://github.com/crtobias/PT-Task-Frontend",
        date: "December 2024"
    }


    const esMarketProject = {
        title: "Es Market",
        text: "Es Market is a free application for merchants and any type of market. With this app, you can manage your inventory, generate sales, create keys for employees, access sales history, and manage your own prices and products—all in an easy and cost-free way.",
        img: esmarket,
        stackFront: "React Native, Expo, NativeWind, React Context, TailwindCSS",
        stackBack: "Firebase Authentication, Firestore, Firebase Storage",
        deploy: "https://es-market-landing.vercel.app/",
        date: "February 2025",
        yt: "https://youtu.be/hbn6aZ1qfy4?si=byd-3fjCIzNip9cN",
    };


    return (
        <div className="w-full  pt-9 ">

            <h3 className="text-black text-4xl border-b border-black pl-9 pb-9">Projects</h3>

            <div className="flex flex-col p-9 gap-9 items-center ">
                <CardProyect proyecto={proyectoNoki} />
                <CardProyect proyecto={proyectoEditor} />
                <CardProyect proyecto={esMarketProject} />
                <CardProyect proyecto={proyectoHabits} />
                <CardProyect proyecto={proyectoTres} />
                <CardProyect proyecto={proyectoDos} />
                <CardProyect proyecto={proyectoUno} />

                <p>Here are some of my highlighted projects. To explore more, feel free to visit my <a href="https://github.com/crtobias" target="blank" className="text-pinkk">GitHub 😀</a>.</p>

            </div>
        </div>
    )
}