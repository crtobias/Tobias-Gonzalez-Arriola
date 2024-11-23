// import flag from "../assets/Flag.svg"
// import flagsh from "../assets/Flag-Sh.svg"

// function FlagButton({logo}){
//     return(
//         <div className=" bg-[url('../assets/Flag.svg')]  relative h-12 w-20  flex justify-center items-center pr-5">
//             <img className="h-8 w-8 z-10" src={logo} alt="logo" />
//         </div>
//     )
// }

// export default FlagButton


import flag from "../assets/Flag.svg";
import flagsh from "../assets/Flag-Sh.svg";

function FlagButton({ logo }) {
  return (
    <div
      className="relative h-12 w-20 flex justify-left pl-3 pb-2 items-center bg-contain bg-no-repeat transition-all duration-300"
      style={{
        backgroundImage: `url(${flag})`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(${flagsh})`)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(${flag})`)}
    >
      <img className="h-8 w-8 " src={logo} alt="logo" />
    </div>
  );
}

export default FlagButton;
