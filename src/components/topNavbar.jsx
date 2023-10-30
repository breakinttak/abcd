"use clietn";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./maxWidthWrapper";
import { ModeToggle } from "./mode-toggle";
import {
  RegisterLink,
  getKindeServerSession,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
export default async function Navbar() {
  return (
    <MaxWidthWrapper>
      <>
        {" "}
        <nav className="backdrop-blur sticky w-full flex flex-1 flex-col ">
          <div className="text-20px ml-0 flex-1 z-20 inline r-0 ring-inset relative w-full">
            <ol className="inline right-auto ">
              <li className="inline mx-2">
                <Link href="/" className={buttonVariants({ variant: "ghost" })}>
                  Home
                </Link>
              </li>
              <li className="inline mx-2">
                <Link
                  href="/pricing"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Pricing
                </Link>
              </li>
              <li className="inline mx-2">
                <Link href={"/dashboard"} className={buttonVariants({})}>
                  Get started
                </Link>
              </li>
              <ModeToggle className="mx-4 mt-3" />
              {/* <li>
                <LoginLink>Login</LoginLink>
              </li> */}
            </ol>
          </div>
        </nav>
      </>
    </MaxWidthWrapper>
  );
}
