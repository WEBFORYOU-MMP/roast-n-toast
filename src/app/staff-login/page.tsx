"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function StaffLoginPage() {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!passcode.trim()) {
      setError("Please enter the passcode");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/staff-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode: passcode.trim() }),
      });
      if (res.ok) {
        router.push("/staff-dashboard");
      } else {
        setError("Invalid passcode");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-3">
            <Lock className="w-7 h-7 text-amber-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Staff Login</h1>
          <p className="text-sm text-gray-500 mt-1">Enter your passcode to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
              placeholder="Enter passcode"
            />
            {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold transition disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}
