"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  isValidUsername,
  isValidPassword,
  sanitizeString,
} from "@/lib/validation";

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    // Sanitize username
    const sanitizedUsername = sanitizeString(username, 30);

    // Validate username format
    if (!isValidUsername(sanitizedUsername)) {
      setError(
        "Username must be 3-30 characters and contain only letters, numbers, and underscores"
      );
      return;
    }

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Validate password strength
    const passwordValidation = isValidPassword(password);
    if (!passwordValidation.valid) {
      setError(passwordValidation.errors.join(". "));
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${baseURL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      // Success - show message then redirect to login
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Registration failed";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-images min-h-screen bg-dark text-light flex items-center justify-center px-4">
      <div className="w-full max-w-md backdrop-blur-md bg-white/2 border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6 ">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold">
            Register Boss!!!
          </h1>
          <p className="text-secondary text-sm md:text-base">
            Himo na&apos;g account para makadumala ka sa imong mga proyekto sa
            dashboard… kay dili man ni siya manghimo ug kaugalingon.
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

          <div className="space-y-1">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-dark px-3 py-2 text-sm focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 inline-flex items-center justify-center rounded-full bg-primary text-dark font-semibold py-2.5 text-sm md:text-base hover:bg-teal-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="text-center text-xs md:text-sm text-secondary">
          <Link
            href="/login"
            className="hover:text-primary transition-colors duration-300"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
