"use client";
import { productsDummyData, userDummyData } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const router = useRouter();
  const currency = process.env.NEXT_PUBLIC_CURRENCY;

  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const fetchProductData = async () => {
    setProducts(productsDummyData);
  };

  const fetchUserData = async () => {
    setUserData(userDummyData);
  };

  const addToCart = async(itemId) => {
    let cartData = structuredClone(cartItems);
    if(cartData[itemId]) {
      cartData[itemId] += 1;
    }
    else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  }


  const value = {
    products,
    userData,
    setUserData,
    isSeller,
    setIsSeller,
    cartItems,
    setCartItems,
    currency,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
