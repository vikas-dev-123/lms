import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
 
const f = createUploadthing();
 
 
const handleAuth =() => {
    const {userId} = auth();
    const isAuthorised = isTeacher(userId);

    if (!userId || !isAuthorised) throw new Error("Unauthorised");
    return{ userId};
}

export const ourFileRouter = {
  courseImage : f({ image: {maxFileSize:"4MB", maxFileCount: 1}})
  .middleware(()=> handleAuth())
  .onUploadComplete(() => {}),
  courseAttachment : f(["text", "image", "video", "audio", "pdf"])
  .middleware(() => handleAuth())
  .onUploadComplete(() => {}),
 chapterVideo : f({ video: { maxFileCount:1, maxFileSize:"512GB"}})
  .middleware(() => handleAuth())
  .onUploadComplete(() => {})

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;