import Link from "next/link";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const PlayStoreBtn = () => {
  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.x227faddi.fixsleep"
      target="_blank"
      className="btn btn-primary flex items-center justify-start gap-4 rounded-xl py-8 w-full border border-white shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)] max-w-full"
    >
      <IoLogoGooglePlaystore size={40} />
      <div className="flex flex-col items-start justify-center">
        <span className="text-xs">GET IT ON</span>
        <span className="text-lg">Google Play</span>
      </div>
    </Link>
  );
};

export default PlayStoreBtn;
