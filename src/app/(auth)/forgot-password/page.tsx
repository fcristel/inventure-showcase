// app/forgot-password/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Inventure Recruitment",
};

export default function ForgotPassword() {
  const inputStyles =
    "w-full border-neutral-300 rounded-md px-3 py-2 bg-neutral-100 cursor-not-allowed";

  return (
    <div className="max-w-sm mx-auto px-4 py-24">
      <h1
        className="text-3xl font-bold text-center mb-8"
        style={{ color: "#006B4E" }}
      >
        Reset Password
      </h1>
      <p className="text-neutral-600 text-center mb-6 text-sm">
        Enter your email address and we&#39;ll send you a link to reset your
        password.
      </p>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            disabled
            className={inputStyles}
            placeholder="you@example.com"
          />
        </div>
        <button
          disabled
          className="w-full py-2.5 rounded-md text-white font-medium cursor-not-allowed"
          style={{ backgroundColor: "#99c7b9" }}
        >
          Send Reset Link
        </button>
      </form>
      <div className="mt-6 text-center">
        <Link
          href="/login"
          className="text-sm hover:underline"
          style={{ color: "#006B4E" }}
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}
