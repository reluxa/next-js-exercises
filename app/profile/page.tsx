import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Profile() {
    const session = await getServerSession(authOptions);
    return (
        <div>The current user is: {session?.user?.email}</div>
    )
}