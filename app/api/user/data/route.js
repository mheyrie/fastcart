import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);
    await connectDB();
    const user = await User;
  } catch (error) {
    console.log(error);
  }
}
