import CardProyect from "./CardProyect"
import elmolino from "../assets/El-Molino.png"
import login from "../assets/Login-Proyect.png"
export default function Screen3() {

    const proyectoUno={
        title:"Full Stack - El Molino",
        text:"Developed a full-stack application to enhance restaurant experiences with an online menu system My role  focused on front-end development, including styles, components, and user experience.",
        img:elmolino,
        stackFront:"TypeScript, Redux Toolkit, React, HTML, CSS, Firebase",
        stackBack:"TypeScript, Express.js, Firestore, MongoDB",
        git:"https://github.com/crtobias/El-Molino",
        date:"July 2023 - August 2023"
    }

    const proyectoDos={
        title:"Back End - Login/Register Template",
        text:"Developed a reusable login and registration template for authentication systems. The project includes email verification, token-based authentication, and a scalable architecture for future integrations.",
        img:login,
        stackFront:"React, HTML, CSS, Javascript",
        stackBack:"Javascript, Express.js, Prisma ORM, NodeMailer, PostgreSQL, JWT , Jest , SuperTest",
        git:"https://github.com/crtobias/Template-Login",
        date:"November 2024 - December 2024"
    }




    return (
        <div className="w-full  pt-9 ">

            <h3 className="text-black text-4xl border-b border-black pl-9 pb-9">Projects</h3>

            <div className="flex flex-col p-9 gap-9 items-center ">

                <CardProyect proyecto={proyectoDos}/>
                <CardProyect proyecto={proyectoUno}/>

                <p>Here are some of my highlighted projects. To explore more, feel free to visit my <a href="https://github.com/crtobias" target="blank" className="text-pinkk">GitHub 😀</a>.</p>

            </div>
        </div>
    )
}