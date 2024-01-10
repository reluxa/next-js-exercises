import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { NextResponse } from "next/server";


export async function GET(request:any) {
  const session = await getServerSession(authOptions);  
  if (session) {
    return NextResponse.json({"Hello":"World, you are authenticated"});
  } else {
    return NextResponse.json({ isLogged: false }, { status: 401 });
  }
}
