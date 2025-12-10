"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      // Use local API route to handle login and set cookie on same domain
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // Check if response is ok before parsing JSON
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Login failed");
      }

      // Success - redirect to dashboard
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch (err) {
      // Handle network errors vs API errors
      if (err instanceof Error) {
        if (err.name === "TypeError" || err.message.includes("JSON")) {
          setError("Cannot connect to server. Is the backend running?");
        } else {
          setError(err.message || "Login failed");
        }
      } else {
        setError("Login failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-images min-h-screen bg-dark text-light flex items-center justify-center px-4">
      <div className="w-full max-w-md backdrop-blur-md bg-white/2 border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6 ">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold">
            Welcome Boss!!!
          </h1>
          <p className="text-secondary text-sm md:text-base">
            Mag Eedit ulit tayu ng Projects? Ndi parin ba na hire?. pa ilang
            ulit na to ah Boss, Baka skill issue.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-lg text-sm text-center">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-dark px-3 py-2 text-sm focus:outline-none"
              placeholder="your_username"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-dark px-3 py-2 text-sm focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 inline-flex items-center justify-center rounded-full bg-primary text-dark font-semibold py-2.5 text-sm md:text-base hover:bg-teal-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Lets G!!!!!"}
          </button>
        </form>

        <div className="text-center text-xs md:text-sm text-secondary">
          {/* <Link
            href="/register"
            className="hover:text-primary transition-colors duration-300"
          >
            Register
          </Link> */}
        </div>
      </div>
    </div>
  );
}
