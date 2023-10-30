import Image from "next/image";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mt-20 mb-20 border-zinc-400 border-spacing-1 border-solid border-2 ">
          {" "}
          <div className="text-6xl mt-20 items-center opacity-1 justify-center absolute text-zinc-800 dark:text-white font-bold sm:text-1vh ">
            Get your{" "}
            <span className="text-pink-900 opacity-1 dark:text-red-600">
              students
            </span>{" "}
            ready at a Glance !
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
