import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import DrawerAnchor from "./DrawerAnchor";
import MobileNav from "./MobileNav";
const Navbar = () => {
  return (
    <header className="bg-white py-5">
      <div className="pl-4 sm:pl-6 lg:pl-8">
        <div className="flex h-16 items-center md:justify-start justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to={"/"}>
              <img src="./logo.png" alt="logo" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {NAV_LINKS.map((link) => (
                  <>
                    <Link
                      to={link.href}
                      key={link.key}
                      className="regular-16 hover:text-primary px-7 pt-8 pb-7"
                    >
                      {link.label}
                    </Link>
                  </>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-12">
            <div className="hidden md:flex">
              <div className="sm:flex sm:gap-12">
                <Link
                  className="rounded-md bg-primary hover:bg-white hover:text-black px-5 py-2.5 text-sm font-medium text-white shadow hidde"
                  href="#"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black hover:text-primary"
                    href="#"
                  >
                    Register
                  </Link>
                </div>

                <DrawerAnchor />
              </div>
            </div>

            <div className="block md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
