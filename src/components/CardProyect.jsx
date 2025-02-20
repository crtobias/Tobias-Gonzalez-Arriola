import Button from "./Button"

export default function CardProyect({ proyecto }) {
  return (
    <div className="border border-black rounded pt-10 flex flex-col md:flex-row flex-grow gap-14 items-center p-6">
      <img className="h-60 w-60" src={proyecto.img} alt="icon" />
      <div className="max-w-[80vw] md:max-w-[50vw] text-gris">
        <h2 className="p-1 text-2xl text-black">{proyecto.title}</h2>
        <p className="p-1">{proyecto.date}</p>
        <p className="p-1">{proyecto.text}</p>
        <p className="p-1">
          <span className="text-black">FrontEnd: </span> {proyecto.stackFront}
        </p>
        <p className="p-1">
          <span className="text-black">BackEnd: </span> {proyecto.stackBack}
        </p>
        <br />
        <div className="flex gap-4">
          {proyecto.git && (
            <a href={proyecto.git} target="_blank" rel="noreferrer">
              <Button text="Github" />
            </a>
          )}
          {proyecto.deploy && (
            <a href={proyecto.deploy} target="_blank" rel="noreferrer">
              <Button text="Deploy" />
            </a>
          )}
          {proyecto.yt && (
            <a href={proyecto.yt} target="_blank" rel="noreferrer">
              <Button text="Video" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
