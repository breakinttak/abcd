"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
const { getUser, isAuthenticated, getPermissions } =
  await getKindeServerSession();

const GET = () => {
  if (!user || !user.given_name) {
    return NextResponse.json({ Error: "Unauthorized" });
  } else {
    return NextResponse.json({ message: "succesful login" });
  }
};

const POST = async (req, res) => {
  const user = getUser();
  const data = await req.json();
  const newGroup = await prisma.Group.create({
    data: {
      groupName: data,
      createdBy: user.id,
      groupMembers: [user.id],
      groupImage: "groupImage",
    },
  });
  console.log(newGroup);

  return NextResponse.json({ message: "request recieved" }, { status: 200 });
};

export { GET, POST };
