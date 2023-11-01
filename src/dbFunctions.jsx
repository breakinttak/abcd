import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./lib/prisma";
import { Prisma } from "@prisma/client";

const { getUser, isAuthenticated, getPermissons } =
  await getKindeServerSession();

const user = await getUser();

const createNewGroup = async ({ groupName }) => {
  const newGroup = await prisma.Group.create({
    data: {
      groupName: groupName,
      createdBy: user.id,
      groupMembers: [user, id],
    },
  });
};

export default createNewGroup;
