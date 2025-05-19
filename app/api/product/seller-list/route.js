import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import authSeller from "@/lib/authSeller";
import Product from "@/models/Product";
import connectDB from "@/config/db";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    const isSeller = authSeller(userId);

    if (!isSeller) {
      return NextResponse.json({
        success: false,
        message: "You are not Authorized",
      });
    }
    await connectDB();
    const products = await Product.find({});
    return NextResponse.json({
      success: true,
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal server error fetching products",
      error: error.message,
    });
  }
}
