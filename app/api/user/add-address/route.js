import { NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import connectDB from "@/config/db";
import User from "@/models/User";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { addressData } = await request.json();
    await connectDB();
    const user = await User.findById(userId);
    user.addresses.push(addressData);

    await user.save();

    return NextResponse.json({
      success: true,
      message: "Address added successfully",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
