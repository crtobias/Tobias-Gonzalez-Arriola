
// import flag from "../../public/Flag.svg";
// import flagsh from "../assets/FlagSh.svg";

function FlagButton({ logo }) {
  return (
    <div
      className="relative h-12 w-20 flex justify-left pl-3 pb-2 items-center bg-contain bg-no-repeat transition-all duration-300"
      style={{
        backgroundImage: `url(/Flag.svg)`,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = `url(/Flag.svg)`)} //asd
      onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = `url(/Flag.svg)`)}
    >
      <img className="h-8 w-8 " src={logo} alt="logo" />
    </div>
  );
}

export default FlagButton;
