import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const user = await prisma.user.findMany();

    console.log(user);

    return NextResponse.json(user);
    
}