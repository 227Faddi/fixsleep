import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <nav className="navbar bg-primary rounded-3xl w-fit mx-auto mt-4 px-4 space-x-4 md:px-8 md:space-x-8 shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]">
        <div className="navbar-start">
          <div className="dropdown space-x-4 lg:space-x-0">
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
                  Q&A
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <div className="flex justify-center items-center gap-2">
              <Image
                src="/ios-light.png"
                alt="fixsleep logo"
                width={40}
                height={40}
                className="hidden lg:inline"
              />
              <span className="font-bold text-2xl rounded-3xl">FixSleep</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-10 space-x-6 text-lg">
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#faq">Q&A</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="#cta"
            className="btn bg-[#9A73E8] rounded-xl border-none md:text-lg md:p-4"
          >
            Download
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
