"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, RefreshCw, Trash2 } from "lucide-react";

interface Submission {
  id: number;
  name: string;
  phone_number: string;
  message: string;
  email: string | null;
  authorized: boolean;
  status: string;
  created_at: string;
}

export default function StaffDashboardPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [unauthorized, setUnauthorized] = useState(false);
  const router = useRouter();

  async function fetchSubmissions() {
    setLoading(true);
    try {
      const res = await fetch("/api/contact/submissions");
      if (res.status === 401) {
        setUnauthorized(true);
        return;
      }
      const json = await res.json();
      setSubmissions(json.data || []);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSubmissions();
  }, []);

  useEffect(() => {
    if (unauthorized) router.push("/staff-login");
  }, [unauthorized, router]);

  async function updateStatus(id: number, status: string) {
    setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
    await fetch("/api/contact/status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
  }

  async function deleteSubmission(id: number) {
    if (!confirm("Are you sure you want to permanently delete this entry?")) return;
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
    await fetch("/api/contact/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }

  function handleLogout() {
    document.cookie = "staff_session=; path=/; max-age=0";
    router.push("/staff-login");
  }

  if (unauthorized) return null;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Staff Dashboard</h1>
          <div className="flex gap-3">
            <button
              onClick={fetchSubmissions}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition text-sm"
            >
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition text-sm"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-16 text-gray-500">Loading submissions...</div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-16 text-gray-500">No submissions yet</div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-900">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Name</th>
                  <th className="text-left px-4 py-3 font-semibold">Phone</th>
                  <th className="text-left px-4 py-3 font-semibold">Message</th>
                    <th className="text-left px-4 py-3 font-semibold">Email</th>
                    <th className="text-left px-4 py-3 font-semibold">Authorized</th>
                    <th className="text-left px-4 py-3 font-semibold">Status</th>
                    <th className="text-left px-4 py-3 font-semibold">Date/Time</th>
                    <th className="text-left px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((s) => (
                  <tr key={s.id} className="border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                    <td className="px-4 py-3 whitespace-nowrap">{s.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{s.phone_number}</td>
                    <td className="px-4 py-3 max-w-xs truncate">{s.message}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{s.email || "-"}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${s.authorized ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>
                          {s.authorized ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                      <select
                        value={s.status}
                        onChange={(e) => updateStatus(s.id, e.target.value)}
                        className={`px-3 py-1.5 rounded-md border text-xs font-medium ${
                          s.status === "Contacted"
                            ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700"
                            : "bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-700"
                        }`}
                      >
                        <option value="Not Contacted">Not Contacted</option>
                        <option value="Contacted">Contacted</option>
                      </select>
                    </td>
                      <td className="px-4 py-3 whitespace-nowrap text-xs text-gray-500">
                        {new Date(s.created_at).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => deleteSubmission(s.id)}
                          className="p-1.5 rounded-md text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 transition"
                          title="Delete permanently"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
