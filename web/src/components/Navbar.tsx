import Link from "next/link";

import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary rounded-3xl w-auto px-4 space-x-4 md:px-8 md:space-x-8 shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <IoMenu size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#2A2A2E] rounded-box z-1 mt-6 w-52 p-2 shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]"
          >
            <li>
              <Link href="#features" className="text-lg">
                Features
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-lg">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="font-bold text-2xl rounded-3xl">
          FixSleep
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="#cta"
          className="btn bg-[#9A73E8] rounded-xl border-none text-md md:text-lg md:p-4"
        >
          Download
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
