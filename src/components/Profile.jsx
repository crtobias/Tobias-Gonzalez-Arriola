import FlagButton from "./FlagButton"
import git from "../assets/GitHub.svg"


function Profile(){
    return(
        <div className="border border-red-500 flex flex-row p-6 justify-center h-full">
            <div className="border border-blue-200 w-5/6 max-w-80">
                <div className="border border-black h-5/6">
                    IMG
                </div>
                <div className="border border-black h-1/6 flex justify-center items-center">
                    <h2>Tobias Gonzalez Arriola</h2>
                </div>
            </div>
            <div className="border w-1/6 border-transparent flex flex-col justify-around">
                <FlagButton logo={git}></FlagButton>
                <FlagButton logo={git}></FlagButton>
                <FlagButton logo={git}></FlagButton>
                <FlagButton logo={git}></FlagButton>
                <FlagButton logo={git}></FlagButton>
            </div>
        </div>
    )
}

export default Profile