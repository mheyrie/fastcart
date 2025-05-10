import { NextResponse } from "next/server"

const authSeller = async (userId) => {
    try{
        const client = await clerkClient()
    } catch(error){
        return NextResponse.json({success:false, message:error.message})
    }
 
}
export default authSeller