import personImg from "../../assets/images/image-avatar.png";

function Avatar() {
  return (
    <button
      type="button"
      className="box-border rounded-full hover:-m-[2px] hover:border-2 hover:border-userOrange"
    >
      <img src={personImg} alt="Person" className="h-8 w-8 md:h-12 md:w-12" />
    </button>
  );
}

export default Avatar;
