"use client";

import Link from "next/link";
import UserCard from "@/components/UserCard";
import { useFavorite } from "@/context/FavoriteContext";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          USERLY
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Favorite Users
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Your saved users are collected here for quick access.
        </p>
      </div>

      {favorites.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-lg rounded-2xl border border-white/10 bg-foreground/[0.03] px-6 py-12 text-center">
          <h2 className="text-xl font-semibold">
            No favorite users yet
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Save users from the directory and they will appear here.
          </p>

          <Link
            href="/users"
            className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore Users
          </Link>
        </div>
      )}
    </main>
  );
}