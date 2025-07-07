import Link from "next/link";
import { IoLogoApple } from "react-icons/io5";

const AppStoreBtn = () => {
  return (
    <Link
      href="https://apps.apple.com/ca/app/fixsleep/id6745803646?platform=iphone"
      target="_blank"
      className="btn btn-primary flex items-center justify-start gap-4 rounded-xl py-8 w-full border border-white shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)] max-w-full"
    >
      <IoLogoApple size={40} />
      <div className="flex flex-col items-start justify-center">
        <span className="text-xs">DOWNLOAD ON THE</span>
        <span className="text-lg">App Store</span>
      </div>
    </Link>
  );
};

export default AppStoreBtn;
