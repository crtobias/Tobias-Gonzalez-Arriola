import Button from "./Button"
import { Link } from "react-scroll"


function Text() {
    return (
        <div className="gap-10 h-full flex justify-center flex-col items-center p-3 lg:pr-20 lg:pl-20 text-center">
            <p className="
            text-shadow-xl
            text-xl
            text-gris
            ">
                Hi, I'm Tobias. I'm a 21-year-old
                <span className="text-pinkk"> programmer and designer </span>
                specializing in apps and websites.
                Currently, I'm studying for a degree in Systems
                Analysis at the National University in La Plata.
                I love creating solutions and sharing my knowledge.
            </p>
            <Link to="screen2" smooth={true} duration={500}>
                <Button text="More About Me"></Button>
            </Link>
        </div>
    )
}

export default Text