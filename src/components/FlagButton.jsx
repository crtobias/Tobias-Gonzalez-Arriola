

function FlagButton({logo}){
    return(
        <div className="relative h-12 w-20 border border-black flex justify-center items-center pr-5">
            <img className="h-8 w-8 z-10" src={logo} alt="logo" />
        </div>
    )
}

export default FlagButton