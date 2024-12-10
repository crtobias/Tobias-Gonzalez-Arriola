

function Button({text}){
    return(
        <div className="
        bg-pink border-black rounded border p-2 pr-5 pl-5 
        text-center max-w-52
        hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
        transition-all max-h-9
        flex items-center
         ">
            {text}
        </div>
    )
}

export default Button

