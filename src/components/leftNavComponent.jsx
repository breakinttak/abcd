"use client";
import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import axios from "axios";

export default async function LeftNavComp() {
  try {
    const users = await fetch("/api/groups/getUsers", {
      method: "GET",
    });
    console.log(users);
  } catch (error) {
    console.log("Error: fetch error: ", error);
  }
  const userss = await axios
    .get("/api/groups/getUsers", {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    })
    .then(() => {
      console.log(userss);
    })
    .catch((error) => {
      console.log("Error : Axios error : " + error);
    });

  return <></>;
}
