import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/config/db";
import Address from "@/models/Address";
import Product from "@/models/Product";
import Order from "@/models/Order";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);
    connectDB();

    Address.length;
    Product.length;
    const orders = await Order.find({ userId }).populate(
      "address items.product"
    );

    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
