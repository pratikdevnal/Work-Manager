import { NextResponse } from "next/server";

//This function can be marked async if using `await` inside

export function middleware(request) {
  // console.log("middleware executed");
  const authToken = request.cookies.get("authToken")?.value;

  // if (!authToken) {
  //   return NextResponse.redirect(new URL("/api/login", request.url));
  // }

  if (
    request.nextUrl.pathname === "/api/login" ||
    request.nextUrl.pathname === "/api/users"
  ) {
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  if (loggedInUserNotAccessPaths) {
    if (authToken) {
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  } else {
    if (!authToken) {
      if (request.nextUrl.pathname.startsWith("/api")) {
        return NextResponse.json(
          {
            message: "Access Denied",
            success: false,
          },
          {
            status: 401,
          }
        );
      }
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // console.log(authToken);

  // return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
