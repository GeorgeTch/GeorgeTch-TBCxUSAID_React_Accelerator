import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ka"],

  // Used when no locale matches
  defaultLocale: "en",

  localePrefix: "never",
  // alternateLinks: false,
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(ka|en)/:path*"],
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|robots.txt|sw.js).*)",
    "/",
  ],
};
