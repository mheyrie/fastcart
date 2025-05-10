import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

const authSeller = async (userId) => {
  try {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    if (user.publicMetadata.role === "seller") {
      return true;
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
export default authSeller;
