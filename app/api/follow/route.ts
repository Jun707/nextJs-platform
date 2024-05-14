import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";


export async function Post(req: Request) {
    const session = await getServerSession()
    const currentUserEmail = session?.user?.email!

}