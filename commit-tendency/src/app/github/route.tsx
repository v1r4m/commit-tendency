import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    //get url param
    const code = request.nextUrl.searchParams.get("code");
    return NextResponse.json({"code":code});
}