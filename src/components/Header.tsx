import { useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import { navigation } from "../constants";
import Button from "./Button";
import { useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function Header() {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed top-0 z-50 lg:bg-n-8/90 border-b border-n-6 left-0 w-full ${
        openNavigation ? "bg-n-8 " : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8 " href="#hero">
          <img width={190} height={40} src={logo} alt="Logo" />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-n-1 text-2xl uppercase transition-colors hover:text-color-1 px-5 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } ${
                  pathname.hash === item.url
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/10"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="hidden button mr-8 text-n-1/10 transition-colors hover:text-n-1 lg:block"
        >
          New Acount
        </a>
        <Button className="hidden lg:flex">Sing in</Button>
        <Button
          className="lg:hidden ml-auto"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
}

export default Header;
