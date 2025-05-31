import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Отключаем middleware, так как проверка авторизации происходит на клиенте
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [],
}
