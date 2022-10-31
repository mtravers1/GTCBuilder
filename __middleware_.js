import { NextResponse } from "next/server";
import { routes } from "./constants/Routes";

export default function middleware(req) {
  const token = req.cookies.get("token");
  const { url } = req;
  if (!token && url.includes("profile")) {
    NextResponse.redirect(routes.login);
  }
  // if (token && url.includes("login")) {
  //   console.log("here");
  //   return NextResponse.redirect("http://localhost:3000" + routes.profile);
  // }
}
