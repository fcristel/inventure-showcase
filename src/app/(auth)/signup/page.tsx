// app/signup/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Inventure Recruitment",
};

export default function Signup() {
  const inputStyles =
    "w-full border-neutral-300 rounded-md px-3 py-2 bg-neutral-100 cursor-not-allowed";

  return (
    <div className="max-w-sm mx-auto px-4 py-24">
      <h1
        className="text-3xl font-bold text-center mb-8"
        style={{ color: "#006B4E" }}
      >
        Sign Up
      </h1>
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
            placeholder="Choose a password"
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            disabled
            className={inputStyles}
            placeholder="Confirm your password"
          />
        </div>
        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-neutral-700 mb-1"
          >
            I am a
          </label>
          <select id="role" disabled className={inputStyles}>
            <option>Select your role</option>
            <option>Candidate</option>
            <option>Recruiter</option>
          </select>
        </div>
        <button
          disabled
          className="w-full py-2.5 rounded-md text-white font-medium cursor-not-allowed"
          style={{ backgroundColor: "#99c7b9" }}
        >
          Create Account
        </button>
      </form>
      <div className="mt-4 text-center text-xs text-neutral-500">
        By signing up, you agree to our Terms & Conditions and Privacy Policy.
      </div>
    </div>
  );
}
