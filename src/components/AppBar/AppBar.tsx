import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Avatar from "./Avatar";
import logoImg from "../../assets/images/logo.svg";
import hamburgerImg from "../../assets/images/icon-menu.svg";
import closeMobileMenuImg from "../../assets/images/icon-close.svg";

function MainNavItem({ text }: { text: string }) {
  return (
    <li className="relative">
      <button type="button" className="peer h-full w-full">
        {text}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "4px", opacity: 100 }}
        transition={{ duration: 0.2 }}
        className="absolute -bottom-8 left-0 hidden w-full bg-userOrange peer-hover:block"
      />
    </li>
  );
}

function MobileNav({
  setIsMobileMenuOpen,
}: {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="absolute left-0 top-0 z-10 h-[100dvh] w-full md:hidden">
      <button
        type="button"
        aria-label="Background"
        className="absolute left-0 top-0 -z-10 h-full w-full bg-black opacity-50"
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ type: "tween" }}
        className="h-full w-2/3 bg-white p-4"
      >
        <button type="button" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={closeMobileMenuImg} alt="Close mobile menu" />
        </button>
        <ul className="mt-8 font-bold [&>li>button]:py-3">
          <li>
            <button type="button">Collections</button>
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
      </motion.div>
    </div>
  );
}

function AppBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex w-full max-w-7xl items-center justify-between border-b-userGrayishBlue/50 px-6 md:border-b md:pb-8 md:pt-6 xl:px-0">
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav setIsMobileMenuOpen={setIsMobileMenuOpen} />
        )}
      </AnimatePresence>
      <div className="flex h-full items-center">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="-mb-1"
        >
          <img
            src={hamburgerImg}
            alt="mobile menu icon"
            className="md:hidden"
          />
        </button>
        <img
          src={logoImg}
          alt="logo"
          className="ml-4 w-5/6 md:ml-0 md:w-full"
        />
        <ul className="ml-10 hidden text-userDarkGrayishBlue md:flex [&>li>button]:p-4">
          <MainNavItem text="Collections" />
          <MainNavItem text="Men" />
          <MainNavItem text="Women" />
          <MainNavItem text="About" />
          <MainNavItem text="Contact" />
        </ul>
      </div>
      <div className="flex gap-x-2 md:gap-x-8">
        <ShoppingCart />
        <Avatar />
      </div>
    </div>
  );
}

export default AppBar;
