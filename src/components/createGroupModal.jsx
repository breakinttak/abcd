"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { UploadButton } from "@uploadthing/react";
import { redirect } from "next/navigation";

export default function CreateGroup() {
  let inputType = false;
  return (
    <>
      <Dialog>
        <DialogTrigger>Create Group ?</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter your Group Name</DialogTitle>
            {/* <UploadButton
              endpoint="imageUploader"
              // onClientUploadComplete={(res) => {
              //   // Do something with the response
              //   console.log("Files: ", res);
              //   alert("Upload Completed");
              // }}
              // onUploadError={(error) => {
              //   // Do something with the error.
              //   alert(`ERROR! ${error.message}`);
              // }}
            /> */}
            <Input
              id="inputTag"
              onChange={() => {
                document.getElementById("anotherPTag").innerHTML = "";
              }}
              disabled={inputType}
            />
            <Button
              onClick={async () => {
                if (!document.getElementById("inputTag").value) {
                  document.getElementById("pTag").innerHTML =
                    "Server name required";
                } else {
                  document.getElementById("pTag").innerHTML = "";
                  let groupName = document.getElementById("inputTag").value;
                  const res = await fetch("/api/createGroup", {
                    method: "POST",
                    headers: {
                      "Content-type": "application/json",
                    },
                    body: JSON.stringify(groupName),
                  });
                  console.log(res);
                  document.getElementById("anotherPTag").innerHTML =
                    "group created !!";
                }
              }}
            >
              Submit
            </Button>

            <p id="pTag" className="text-red-600 "></p>
            <p id="anotherPTag" className="text-green-600"></p>
            <DialogDescription>
              Setting up name and picture for your Group
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
