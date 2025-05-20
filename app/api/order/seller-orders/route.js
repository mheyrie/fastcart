import connectDB from "@/config/db";
import Order from "@/models/Order";
import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import Product from "@/models/Product";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { address, items } = await request.json();

    if (!address || !items) {
      return NextResponse.json({
        success: false,
        message: "Invalid data - Address and items are required",
      });
    }

    //calculate amount using items
    const amount = await items.reduce(async (acc, item) => {
      const product = await Product.findById(item.product);
      return acc + product.offerPrice * item.quantity;
    }, 0);

    await connectDB();

    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
