import logoImg from "../../assets/images/logo.svg";
import cartImg from "../../assets/images/icon-cart.svg";
import personImg from "../../assets/images/image-avatar.png";

function AppBar() {
  return (
    <div className="border-b-userGrayishBlue/50 flex w-full max-w-7xl items-center justify-between border-b pb-8">
      <div className="flex items-center">
        <img src={logoImg} alt="logo" />
        <ul className="text-userDarkGrayishBlue ml-10 flex [&>li>button]:p-4">
          <li className="relative">
            <button type="button" className="peer h-full w-full">
              Collections
            </button>
            <div className="bg-userOrange absolute -bottom-8 left-0 hidden h-1 w-full peer-hover:block" />
          </li>
          <li>
            <button type="button">Men</button>
          </li>
          <li>
            <button type="button">Women</button>
          </li>
          <li>
            <button type="button">About</button>
          </li>
          <li>
            <button type="button">Contact</button>
          </li>
        </ul>
      </div>
      <div className="flex gap-x-8">
        <button type="button" className="rounded-full p-3 hover:brightness-50">
          <img src={cartImg} alt="Shopping cart" />
        </button>
        <button
          type="button"
          className="hover:border-userOrange box-border rounded-full hover:-m-[2px] hover:border-2"
        >
          <img src={personImg} alt="Person" className="h-12 w-12" />
        </button>
      </div>
    </div>
  );
}

export default AppBar;
