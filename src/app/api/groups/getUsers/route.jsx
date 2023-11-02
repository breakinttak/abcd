import { NextResponse } from "next/server";

const GET = () => {
  return NextResponse.json(JSON.stringify({ message: "connected" }));
};
export { GET };
