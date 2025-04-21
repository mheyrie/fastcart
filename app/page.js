'use client';
import Banner from "@/components/seller/Banner";
import FeaturedProduct from "@/components/seller/FeaturedProduct";
import Footer from "@/components/seller/Footer";
import HeaderSlider from "@/components/seller/HeaderSlider";
import HomeProducts from "@/components/seller/HomeProducts";
import Navbar from "@/components/seller/Navbar";
import NewsLetter from "@/components/seller/NewsLetter";


export default function Home() {
  return (
    <>
    <Navbar />
    <div className="px-6 md:px-16 lg:px-32">
      <HeaderSlider/>
      <HomeProducts/>
      <FeaturedProduct/>
      <Banner/>
      <NewsLetter/>
    </div>
    <Footer/>
    </>
  );
}
