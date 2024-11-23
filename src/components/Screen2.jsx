import Tools from "./Tools";


export default function Screen2() {
    return (
        <div className=" border-t border-black flex flex-col justify-center items-center  ">

            <h2 className="text-3xl p-9 pl-9 border-b border-black w-full">More About Me</h2>

            <div className="max-w-[60vw] m-9 border-b border-gris pb-9">
                <h6 className="text-2xl" >About Me</h6>
                <br />
                <p  className="text-gris" >
                    I’m from Argentina, born in Córdoba, Río Cuarto, and currently living in La Plata, Buenos Aires. I’m 21 years old and enjoy all kinds of music, including techno, funky, Brazilian, reggaeton, rock, pop, and more. I’m passionate about art, both drawing (even though I’m not an expert) and digital art.
                        <br />
                        <br />
                    Video games are a big part of my life, especially programming games in Godot or developing terminal games with various languages. I also enjoy playing sports and staying active, although I spend a lot of time programming.
                    </p>
            </div>

            <div className="max-w-[60vw] m-9 border-b border-gris pb-9">
                <h6 className="text-2xl" >Carrer Overview</h6>
                <br />

                <h6 className="text-xl">2024</h6>
                <br />
                <p className="text-gris" >Enrolled in the Systems Analysis program at the National University of La Plata. Began exploring low-level languages and data structures, including Pascal, Assembly, and Java, expanding my knowledge and skills in fundamental programming and computer science areas.</p>
                <br />
                <h6 className="text-xl">2023</h6>
                <br />
                <p  className="text-gris" >Started my IT career focusing on full-stack web development through a bootcamp and self-study. Gained skills in JavaScript, TypeScript, React, HTML, CSS, and various other technologies and frameworks. This year marked my deep dive into software development and industry practices.</p>

            </div>

            <h2 className="text-2xl">Languages & Tools</h2>
            <Tools></Tools>

        </div>
    )
}