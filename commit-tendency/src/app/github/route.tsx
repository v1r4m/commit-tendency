import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    //get url param
    const code = request.nextUrl.searchParams.get("code");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      "client_id": process.env.GITHUB_CLIENT_ID_LOCAL,
      "client_secret": process.env.GITHUB_CLIENT_SECRET_LOCAL,
      "code": code
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };
    
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", requestOptions);
    const response = await tokenResponse.text();

    //get headers from tokenResponse
    return new NextResponse(
        `
            <h1>${response}</h1>
            <h2>dashboard header</h2>
            <p>dashboard body</p>
        `,
        { status: 200, headers: { 'content-type': 'text/html' } }
    );
}