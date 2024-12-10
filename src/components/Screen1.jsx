import Profile from "./Profile";
import Text from "./Text";

export default function Screen1() {
    return (
        <div className="pt-10 flex flex-col min-h-[100vh]">
            <h2 className="text-black mt-12 w-full pl-9 text-2xl sm:text-4xl">
                Welcome to my portfolio
            </h2>

            <div className="pt-10 flex flex-col md:flex-row flex-grow">
                <div className="border border-black border-b-0 bg-white flex-1 flex items-center justify-center md:border-r-0">
                    <Profile />
                </div>
                <div className="border border-black border-b-0 bg-white flex-1 flex items-center justify-center">
                    <Text />
                </div>
            </div>
        </div>
    );
}
