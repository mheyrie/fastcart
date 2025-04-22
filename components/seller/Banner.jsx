import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#E6E9F2] my-16 rounded-xl overflow-hidden">
      <Image
        className="max-w-56"
        src={assets.jbl_soundbox_image}
        alt="jbl_soundbox_image"
      />
    </div>
  );
}
export default Banner;
