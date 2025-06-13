import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full flex flex-col justify-between items-center py-4 mt-36 gap-6"
    >
      <a href="#" className="text-center">
        © 2025 Fix Sleep. All Rights Reserved.
      </a>
      <ul className="flex gap-3 sm:gap-12 justify-center items-center">
        <li>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms">Terms & Conditions</Link>
        </li>
        <li>
          Made by{" "}
          <Link href="https://www.faliloukhouma.com/" target="_blank">
            Falilou
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
