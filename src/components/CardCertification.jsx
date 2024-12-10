import Button from "./Button"

export default function CardCertification({ certification }) {
    const link = certification.git
    return (
        <div className="border border-black rounded pt-10 flex flex-col md:flex-row flex-grow gap-14 items-center p-6">
            <img className=" h-60 w-60"
             src={certification.img} alt="icon" />
            <div className="max-w-[80vw] md:max-w-[50vw] text-gris">
                <h2 className="p-1 text-2xl text-black">{certification.title}</h2>
                <p className="p-1" >{certification.date}</p>
                <p className="p-1">{certification.text}</p>
            </div>
        </div>
    )
}