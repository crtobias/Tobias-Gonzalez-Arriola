import FlagButton from "./FlagButton"
import git from "../assets/GitHub.svg"
import Linkedin from "../assets/Linkedin.svg"
import email from "../assets/Gmail Logo.svg"
import cv from "../assets/Attach.svg"
import ig from "../assets/instagram.svg"
import icon from "../assets/Perfile.jpg"

function Profile(){
    return(
        <div className=" flex flex-row p-6 justify-center h-full max-h-[500px]">
            <div className=" w-5/6 max-w-80">
                <div className="border border-black h-5/6 rounded-tr-md rounded-tl-md">
                    <img src={icon} className="rounded-tr-md rounded-tl-md h-full w-full object-cover" ></img>
                </div>
                <div className="rounded-br-md rounded-bl-md border border-black h-1/6 flex justify-center items-center">
                    <h2 className="text-base sm:text-xl ">Tobias Gonzalez Arriola</h2>
                </div>
            </div>
            <div className=" w-1/4  flex flex-col justify-around">
                <FlagButton logo={git}></FlagButton>
                <FlagButton logo={Linkedin}></FlagButton>
                <FlagButton logo={email}></FlagButton>
                <FlagButton logo={cv}></FlagButton>
                <FlagButton logo={ig}></FlagButton>
            </div>
        </div>
    )
}

export default Profile