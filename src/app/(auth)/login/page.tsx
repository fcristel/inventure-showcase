// app/login/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Inventure Recruitment",
};

export default function Login() {
  const inputStyles =
    "w-full border-neutral-300 rounded-md px-3 py-2 bg-neutral-100 cursor-not-allowed";

  return (
    <div className="max-w-sm mx-auto px-4 py-24">
      <h1
        className="text-3xl font-bold text-center mb-8"
        style={{ color: "#006B4E" }}
      >
        Log In
      </h1>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            Email address
          </label>
          <input type="email" id="email" disabled className={inputStyles} />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            disabled
            className={inputStyles}
          />
        </div>
        <button
          disabled
          className="w-full py-2.5 rounded-md text-white font-medium cursor-not-allowed"
          style={{ backgroundColor: "#99c7b9" }}
        >
          Sign In
        </button>
      </form>
      <div className="mt-4 text-center">
        <Link
          href="/forgot-password"
          className="text-sm hover:underline"
          style={{ color: "#006B4E" }}
        >
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}
