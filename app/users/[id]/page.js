"use client";

import Link from "next/link";
import { use } from "react";
import {
  ArrowLeft,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserProfilePage({ params }) {
  const { id } = use(params);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok) {
          throw new Error("User not found");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError("Gagal mengambil data user.");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-background px-6">
        <p className="animate-pulse text-muted-foreground">
          Loading profile...
        </p>
      </main>
    );
  }

  if (error || !user) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-background px-6">
        <div className="w-full max-w-lg rounded-2xl border border-destructive/30 bg-destructive/10 p-8 text-center">
          <h1 className="text-2xl font-bold">
            User not found
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            The user profile could not be found.
          </p>

          <Link href="/users">
            <Button className="mt-6 rounded-full">
              Back to Users
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <main className="bg-background">
      {/* PROFILE HEADER */}
      <section className="relative overflow-hidden border-b border-border bg-primary/[0.07]">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

        <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[650px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-8 md:pb-14 md:pt-10">
          <Link
            href="/users"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to Users
          </Link>

          <div className="mt-10 flex flex-col items-center text-center md:flex-row md:items-center md:text-left">
            <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-primary/10 text-3xl font-bold text-primary ring-1 ring-primary/20">
              {initials}
            </div>

            <div className="mt-5 md:ml-6 md:mt-0">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                User Profile
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
                {user.name}
              </h1>

              <p className="mt-1 text-muted-foreground">
                @{user.username}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 md:py-14">
        {/* CONTACT + ADDRESS */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact */}
          <Card className="border-border bg-card">
            <CardHeader>
              <p className="text-sm font-semibold text-primary">
                Contact
              </p>

              <CardTitle className="mt-1">
                Contact Information
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />

                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">
                    Email
                  </p>

                  <p className="break-all text-sm font-medium">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Phone
                  </p>

                  <p className="text-sm font-medium">
                    {user.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 size-5 shrink-0 text-primary" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Website
                  </p>

                  <p className="text-sm font-medium">
                    {user.website}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address */}
          <Card className="border-border bg-card">
            <CardHeader>
              <p className="text-sm font-semibold text-primary">
                Location
              </p>

              <CardTitle className="mt-1">
                Address
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />

                <div>
                  <p className="text-xs text-muted-foreground">
                    Street
                  </p>

                  <p className="text-sm font-medium">
                    {user.address.street}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Suite
                </p>

                <p className="text-sm font-medium">
                  {user.address.suite}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  City
                </p>

                <p className="text-sm font-medium">
                  {user.address.city}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Zipcode
                </p>

                <p className="text-sm font-medium">
                  {user.address.zipcode}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* LOCATION + COMPANY */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Location */}
          <Card className="border-violet-500/20 bg-violet-500/[0.04]">
            <CardHeader>
              <p className="text-sm font-semibold text-violet-500 dark:text-violet-400">
                Coordinates
              </p>

              <CardTitle className="mt-1">
                Location
              </CardTitle>
            </CardHeader>

            <CardContent className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-violet-500/15 bg-card p-4">
                <p className="text-xs text-muted-foreground">
                  Latitude
                </p>

                <p className="mt-1 text-sm font-medium">
                  {user.address.geo.lat}
                </p>
              </div>

              <div className="rounded-xl border border-violet-500/15 bg-card p-4">
                <p className="text-xs text-muted-foreground">
                  Longitude
                </p>

                <p className="mt-1 text-sm font-medium">
                  {user.address.geo.lng}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Company */}
          <Card className="border-violet-500/20 bg-violet-500/[0.04]">
            <CardHeader>
              <p className="text-sm font-semibold text-violet-500 dark:text-violet-400">
                Organization
              </p>

              <CardTitle className="mt-1">
                Company
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
              <div>
                <p className="text-xs text-muted-foreground">
                  Company Name
                </p>

                <p className="mt-1 text-sm font-medium">
                  {user.company.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Catch Phrase
                </p>

                <p className="mt-1 text-sm font-medium">
                  {user.company.catchPhrase}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Business
                </p>

                <p className="mt-1 text-sm font-medium">
                  {user.company.bs}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* USER ID */}
        <div className="mt-6 rounded-2xl border border-border bg-muted px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              User ID
            </span>

            <span className="text-sm font-semibold text-primary">
              #{user.id}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}