import Button from "./Button"

export default function CardProyect({ proyecto }) {
    const link = proyecto.git
    return (
        <div className="border border-black rounded pt-10 flex flex-col md:flex-row flex-grow gap-14 items-center p-6">
            <img className=" h-60 w-60"
             src={proyecto.img} alt="icon" />
            <div className="max-w-[80vw] md:max-w-[50vw] text-gris">
                <h2 className="p-1 text-2xl text-black">{proyecto.title}</h2>
                <p className="p-1" >{proyecto.date}</p>
                <p className="p-1">{proyecto.text}</p>
                <p className="p-1"><p className="text-black">FrontEnd: </p>  {proyecto.stackFront}</p>
                <p className="p-1"><p className="text-black">BackEnd:</p> {proyecto.stackBack}</p>
                <br />
                <a href={link} target="_blank" className="">
                  <Button text="Github"></Button>
                </a>

            </div>
        </div>
    )
}