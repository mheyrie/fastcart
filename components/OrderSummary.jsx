import { addressDummyData } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext"
import { useEffect, useState } from "react"

function OrderSummary() {

  const {currency, router, getCartCount, getCartAmount} = useAppContext()
  const [selectedAddress, setSelectedAddress]=useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userAddresses, setUserAddresses] = useState([])

  const fetchUserAddress = async ()=>{
setUserAddresses(addressDummyData)
  }

  const handleAddressSelect = (address)=>{
    setSelectedAddress(address);
    setIsDropdownOpen(false)
  }

  const createOrder = async ()=>{
    
  }

  useEffect(()=>{
    fetchUserAddress()
  }, [])

  return (
    <div>OrderSummary</div>
  )
}
export default OrderSummary