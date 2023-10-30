import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
const GET = async () => {
  const { getUser, isAuthenticated, getPermissions } =
    await getKindeServerSession();
  const user = await getUser();

  return NextResponse.json({ user: user });
};
export { GET };
