import { assets } from "@/assets/assets"
import { useEffect } from "react";

function HeaderSlider() {
  const sliderData = [
    {
      id:1,
      title:"Title 1",
      offer:'Limited Time Offer 30% Off',
      buttonText1:'Shop Now',
      buttonText2:'Learn More',
      imgSrc: assets.header_headphone_image,
    },
    {
      id:2,
      title:"Title 2",
      offer:'Hurry Up! Limited Edition left',
      buttonText1:'Shop Now',
      buttonText2:'Explore Deals',
      imgSrc: assets.header_playstation_image,
    },
    {
      id:3,
      title:"Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer:'Exclusive Time Offer 40% Off',
      buttonText1:'Order Now',
      buttonText2:'Learn More',
      imgSrc: assets.header_macbook_image,
    },
  ]
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentSlide((prev)=>(prev+1)% sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleNext = (index) => {
    setCurrentSlide(index);
  }
  return (
    <div className="overflow-hidden relative w-full">
      <div className="flex transition-transform duration-700 ease-in-out" style={{transform: `translateX(-${currentSlide * 100}%)`}}>

      </div>
    </div>
  )
}
export default HeaderSlider