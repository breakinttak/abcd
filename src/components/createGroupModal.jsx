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

export default function CreateGroup() {
  return (
    <>
      <Dialog>
        <DialogTrigger>Create Group ?</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
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
            <Input id="inputTag" />
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
                }
              }}
            >
              Submit
            </Button>
            <p id="pTag" className="text-red-600 "></p>
            <DialogDescription>
              Setting up name and picture for your Group
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
