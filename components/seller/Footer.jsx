import { assets } from "@/assets/assets";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 pap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image src={assets.logo} alt="logo" className="w-28 md:w-32" />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
