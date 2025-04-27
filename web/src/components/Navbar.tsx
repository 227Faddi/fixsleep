import Link from "next/link";

import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-sm rounded-3xl w-auto sm:space-x-8 text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu size={25} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow text-2xl"
          >
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl rounded-3xl">
          FixSleep
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="#cta" className="btn bg-primary rounded-3xl">
          Download
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
