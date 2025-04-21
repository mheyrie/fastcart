"use client";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

function Navbar() {
  const { isSeller, router } = useAppContext();
  return (
    <nav>
      <Image
        src={assets.logo}
        alt="Logo"
        className="cursor-pointer w-28 md:w-32"
      />
    </nav>
  );
}
export default Navbar;
