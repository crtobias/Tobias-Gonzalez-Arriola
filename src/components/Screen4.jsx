import CardCertification from "./CardCertification"
import cer1 from "../assets/cer1.png"
import cer2 from "../assets/cer2.png"

export default function Screen4() {

    const certificationUno = {
        title:"Full-Stack Teaching Assistant",
        text:"Main Responsibilities: Coordinate student integration into study groups. Guide students through initial course steps. Assist with exercises and encourage group collaboration (pair programming). Suggest improvements for bootcamp processes. ",
        img:cer1,
        date:"2023"
    }

    const certificationDos = {
        title:"Full-Stack Web Developer ",
        text:"Skills Acquired: HTML, CSS, Node.js, React, Redux, SQL, JavaScript, and more. Team collaboration and development practices. GitHub for version control. Project organization and management in a team setting.",
        img:cer2,
        date:"2023"
    }

    return (
        <div className="w-full  pt-9 ">
            <h3 className="pl-9 pb-9 w-full text-black text-4xl mb-9 border-b border-black">Certifications</h3>

            <div className="flex flex-col p-9 gap-9 items-center ">

                <CardCertification certification={certificationUno}></CardCertification>
                <CardCertification certification={certificationDos}></CardCertification>
                <p>Currently pursuing a Systems Analyst degree while continuing to learn autonomously 🛠.</p>
            </div>

        </div >
    )
}