import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const { title, description, imageUrl, price, categoryId } = await req.json();

        if (!userId || !isTeacher(userId)) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        if (typeof title !== 'string' || title.trim() === '') {
            return new NextResponse('Invalid title', { status: 400 });
        }

         
       
        const course = await db.course.create({
            data: {
                userId,
                title,
                description: description ?? null,
                imageUrl: imageUrl ?? null,
                price: price ?? null,
                categoryId: categoryId ?? null,
            },
        });

      

        return NextResponse.json(course);
    } catch (error) {
        console.error('[COURSES] Error:', error);

        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }

        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
