import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;

    // Forward login request to backend
    const backendResponse = await fetch(`${backendUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    });

    const data = await backendResponse.json();

    if (!backendResponse.ok) {
      return NextResponse.json(data, { status: backendResponse.status });
    }

    // Get the token from backend's Set-Cookie header
    const setCookieHeader = backendResponse.headers.get("set-cookie");

    // Create response with the data
    const response = NextResponse.json(data, { status: 200 });

    // If backend sent a cookie, extract the token and set it on our domain
    if (setCookieHeader) {
      // Parse token from the cookie header
      const tokenMatch = setCookieHeader.match(/token=([^;]+)/);
      if (tokenMatch) {
        const token = tokenMatch[1];
        // Set cookie on the frontend domain
        response.cookies.set("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24, // 24 hours
          path: "/",
        });
      }
    }

    return response;
  } catch (error) {
    console.error("Login proxy error:", error);
    return NextResponse.json(
      { error: "Failed to connect to authentication server" },
      { status: 500 }
    );
  }
}
