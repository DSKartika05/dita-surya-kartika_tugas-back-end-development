"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { useFavorite } from "@/context/FavoriteContext";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserCard({ user }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorite();
  const favorited = isFavorite(user.id);

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Card
      className={cn(
        "group border-border bg-card transition-all duration-200",
        "hover:-translate-y-1 hover:border-primary/30",
        "hover:shadow-xl hover:shadow-black/10"
      )}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-full",
              "bg-primary/10 text-sm font-bold text-primary",
              "ring-1 ring-primary/20"
            )}
          >
            {initials}
          </div>

          <CardTitle className="truncate text-base font-semibold">
            {user.name}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <p className="truncate text-sm text-muted-foreground">
          {user.email}
        </p>

        <div className="mt-5 flex gap-2">
          <Link
            href={`/users/${user.id}`}
            className={cn(
              buttonVariants(),
              "flex-1 rounded-full"
            )}
          >
            View Profile
          </Link>

          <Button
            variant={favorited ? "secondary" : "outline"}
            className={cn(
              "rounded-full transition-colors",
            favorited &&
              "border-violet-600 bg-violet-600 text-white hover:bg-violet-700 hover:text-white dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400 dark:hover:bg-violet-500/15 dark:hover:text-violet-300"
            )}
            aria-pressed={favorited}
            onClick={() =>
            favorited ? removeFavorite(user.id) : addFavorite(user)
            }
            >
           <Heart
            className={cn(
              "size-4",
            favorited && "fill-red-500 text-red-500"
            )}
            />

            {favorited ? "Favourite" : "Add Favourite"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}