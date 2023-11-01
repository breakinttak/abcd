import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  getKindeServerSession,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import CreateGroup from "@/components/createGroupModal";
import { cn } from "@/lib/utils";


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
          <div className=" ml-50  absolute z-2">
            <div className="mt-50 absolute px-30">
              <CreateGroup
                className={cn(
                  buttonVariants({}),
                  "px-20 py-30 bg-white text-white"
                )}
              >
                Hello
              </CreateGroup>
            </div>
          </div>
        </MaxWidthWrapper>
      </>
    );
  }
}
