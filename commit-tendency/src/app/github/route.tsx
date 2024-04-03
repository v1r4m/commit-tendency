import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    //get url param
    const code = request.nextUrl.searchParams.get("code");
    return new NextResponse(
        `
            <h1>${code}</h1>
            <h2>dashboard header</h2>
            <p>dashboard body</p>
        `,
        { status: 410, headers: { 'content-type': 'text/html' } }
    );
}