import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ROUTES } from "@/config/routes";

/**
 * 한글 legacy URL은 next.config redirects만으로 환경에 따라 누락될 수 있어
 * proxy에서 308을 보장한다. 내부 링크는 ROUTES.cost만 사용한다.
 */
export function proxy(request: NextRequest) {
  let pathname = request.nextUrl.pathname;

  try {
    pathname = decodeURIComponent(pathname).normalize("NFC");
  } catch {
    pathname = pathname.normalize("NFC");
  }

  if (pathname === ROUTES.costLegacy) {
    const url = request.nextUrl.clone();
    url.pathname = ROUTES.cost;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
