import FlagButton from "./FlagButton"
import git from "../assets/GitHub.svg"
import Linkedin from "../assets/Linkedin.svg"
import email from "../assets/Gmail Logo.svg"
import cv from "../assets/Attach.svg"
import ig from "../assets/ig.svg"
import icon from "../assets/foto.png"

function Profile() {
    return (
        <div className=" flex flex-row p-6 justify-center h-full max-h-[500px]">
            <div className=" w-5/6 max-w-80">
                <div className="border border-black h-5/6 rounded-tr-md rounded-tl-md">
                    <img src={icon} className="rounded-tr-md rounded-tl-md h-full w-full object-cover" ></img>
                </div>
                <div className="rounded-br-md rounded-bl-md border border-black h-1/6 flex justify-center items-center">
                    <h2 className="text-base sm:text-xl text-black ">Tobias Gonzalez Arriola</h2>
                </div>
            </div>
            <div className=" w-1/4  flex flex-col justify-around">
                <a href='https://github.com/crtobias' target="_blank" className=""><FlagButton logo={git}></FlagButton></a>
                <a href='https://www.linkedin.com/in/tobias-gonzalez-arriola-0a2399273/' target="_blank" className=""><FlagButton logo={Linkedin}></FlagButton></a>
                <a href='mailto:tgonzalezarriola@gmail.com' target="_blank" className=""><FlagButton logo={email}></FlagButton></a>
                <a href='https://drive.google.com/file/d/11zLfB64P5tKIPcp93zFyvChN3FVnyRlR/view?usp=sharing' target="_blank" className=""><FlagButton logo={cv}></FlagButton></a>
                <a href='https://www.instagram.com/crtobias__/' target="_blank" className=""><FlagButton logo={ig}></FlagButton></a>

            </div>
        </div>
    )
}

export default Profile