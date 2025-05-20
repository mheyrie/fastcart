import { assets } from "@/assets/assets";
import Image from "next/image";

function Footer() {
  //current year
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-orange-50 dark:bg-black/80 dark:text-gray-200">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 pap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image src={assets.logo} alt="logo" className="w-28 md:w-32" />
          <p className="mt-6 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            quisquam accusantium tenetur nostrum, facilis voluptate obcaecati ea
            repellat perspiciatis eveniet at laboriosam molestias aspernatur ex
            nulla earum laudantium consequatur veniam? Est dolorem eaque saepe
            harum obcaecati, repellendus rerum id quae expedita mollitia at
            aspernatur molestias sint, optio explicabo laudantium! Quo sequi
            vitae esse numquam magnam odit autem quisquam. Voluptate, aut!
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div className="">
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li className="">
                <a href="#" className="hover:underline transition">
                  Home
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline transition">
                  About
                </a>
              </li>
              <li className="">
                <a href="#" className="hover:underline transition">
                  Contact Us
                </a>
              </li>
              <li className="">
                <a className="hover:underline transition">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div className="">
            <h2 className="font-medium text-gray-900 mb-5">Get in Touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-234-456-903</p>
              <p>contact@may.dev</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright {currentYear} © All rights reserved. Powered by{" "}
        <a href="#" className="font-medium text-gray-900 hover:underline">
          FastCart
        </a>
      </p>
    </footer>
  );
}
export default Footer;
