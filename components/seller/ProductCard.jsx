import { products } from "@/assets/productData";
import { useAppContext } from "@/context/AppContext"
import Image from "next/image";

function ProductCard({product}) {
  const {currency, router }=useAppContext()
  return (
    <div onClick={()=>{router.push('/product' + products._id); scrollTo(0, 0)}} className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer">
      <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
      <Image src={product.image[0]} 
      alt={product.name}
      className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full" width={800} height={800} />
    
      </div>
    </div>
  )
}
export default ProductCard