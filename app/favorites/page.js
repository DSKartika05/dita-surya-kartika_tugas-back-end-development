"use client";

import Link from "next/link";
import UserCard from "@/components/UserCard";
import { useFavorite } from "@/context/FavoriteContext";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <main className="bg-background">
      {/* HEADER — FAVORITES INTRO */}
      <section className="relative overflow-hidden border-b border-border bg-primary/[0.07]">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[600px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-16 md:pb-12 md:pt-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Userly
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              Favorite Users
            </h1>

            <p className="mt-3 max-w-xl text-muted-foreground">
              Your saved users are collected here for quick access.
            </p>
          </div>
        </div>
      </section>

      {/* FAVORITE USERS */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          {favorites.length > 0 ? (
            <>
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-primary">
                    Saved
                  </p>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight">
                    Your Favorites
                  </h2>
                </div>

                <p className="text-sm text-muted-foreground">
                  {favorites.length}{" "}
                  {favorites.length === 1 ? "user" : "users"}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {favorites.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
              </div>
            </>
          ) : (
            /* EMPTY STATE — VIOLET BLOCK */
            <div className="mx-auto max-w-lg rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] px-6 py-12 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-violet-500/10 text-violet-500">
                <span className="text-lg">♡</span>
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                No favorite users yet
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Save users from the directory and they will appear here
                for quick access.
              </p>

              <Link
                href="/users"
                className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore Users
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}