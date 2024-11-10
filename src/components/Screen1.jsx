import Profile from "./Profile"
import Text from "./Text"

export default function Screen1(){
    return(
            <div className="pt-10  flex justify-center items-center flex-col ">

                <h2 className="w-full pl-9 ">Welcome to my portfolio</h2>

                <div className="pt-10  flex justify-center items-center flex-col md:flex-row ">
                    <div className="border border-black  bg-white w-full h-96">
                        <Profile></Profile>
                    </div>
                    <div className=" border border-black   bg-white w-full h-96">
                        <Text></Text>
                    </div>
                </div>

            </div>
    )
}