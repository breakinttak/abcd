import { createUploadthing } from "uploadthing/next";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const f = createUploadthing();
const { getUser, isAuthenticated, getPermissions } =
  await getKindeServerSession();
const user = await getUser();
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      // return { userId: user.given_name };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:");

      console.log("file url", file.url);
    }),
};
