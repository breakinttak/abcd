import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  getKindeServerSession,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import MaxWidthWrapper from "@/components/maxWidthWrapper";

export default async function Page() {
  const { getUser, isAuthenticated, getPermissions } =
    await getKindeServerSession();
  const user = await getUser();
  console.log(user);

  {
    if (!user || !user.id) {
      return (
        <>
          <LoginLink className={buttonVariants({})}>Login ?</LoginLink>
        </>
      );
    }

    return (
      <>
        <MaxWidthWrapper>
          <div className="mt-30 ml-50 absolute z-2">
            Welcome {user.given_name} {user.family_name}
            <Button className={buttonVariants({})}>Create Group ?</Button>
          </div>
        </MaxWidthWrapper>
      </>
    );
  }

  return <></>;
}
