"use client";

import { useEffect, useState } from "react";
import { Search, SearchX } from "lucide-react";

import UserCard from "@/components/UserCard";
import { Input } from "@/components/ui/input";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-background px-6">
        <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-6 text-center">
          <h2 className="font-semibold text-destructive">
            Something went wrong
          </h2>

          <p className="mt-2 text-sm text-destructive/80">
            {error}
          </p>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-background px-6">
        <p className="animate-pulse text-muted-foreground">
          Loading users...
        </p>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden bg-background">
      {/* =====================================================
          HEADER — GREEN DIRECTORY INTRO
      ===================================================== */}
      <section className="relative border-b border-border bg-primary/[0.07]">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-16 md:pb-12 md:pt-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Directory
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              User Directory
            </h1>

            <p className="mt-3 max-w-xl text-muted-foreground">
              Browse and search through registered users.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH — COMPACT + HIGHLIGHTED
      ===================================================== */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-5 md:py-6">
          <div className="relative max-w-lg">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" />

            <Input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 rounded-full border-primary/30 bg-card pl-11 pr-4 shadow-md shadow-primary/5 transition-all placeholder:text-muted-foreground focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/20"
            />
          </div>

          {search && (
            <p className="mt-2 text-xs text-muted-foreground">
              Showing results for{" "}
              <span className="font-medium text-foreground">
                "{search}"
              </span>
            </p>
          )}
        </div>
      </section>

      {/* =====================================================
          USER DIRECTORY — USER GRID
      ===================================================== */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-primary">
                People
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-tight">
                Browse Users
              </h2>
            </div>

            <p className="text-sm text-muted-foreground">
              {filteredUsers.length}{" "}
              {filteredUsers.length === 1 ? "user" : "users"}
            </p>
          </div>

          {filteredUsers.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredUsers.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-border bg-muted/50 px-6 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <SearchX className="size-5" />
              </div>

              <p className="mt-4 font-medium">
                User not found.
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Try searching with a different name.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}