import Link from "next/link";
import {
  ArrowRight,
  Users,
  Heart,
  Search,
  UserCheck,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Explore Users",
    description:
      "Browse user profiles and discover information about people in the Userly directory.",
    iconClass:
      "bg-primary/15 text-primary ring-1 ring-primary/20 group-hover:bg-primary/25",
  },
  {
    icon: Search,
    title: "Find Someone",
    description:
      "Use the search feature to quickly find a user by name without scrolling through the entire directory.",
    iconClass:
      "bg-secondary/15 text-secondary ring-1 ring-secondary/20 group-hover:bg-secondary/25",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description:
      "Save users you want to keep within reach and access your favorite profiles anytime.",
    iconClass:
      "bg-accent/15 text-accent ring-1 ring-accent/20 group-hover:bg-accent/25",
  },
];

export default function Home() {
  return (
    <>
      {/* =========================================================
          HERO — GREEN / CYBERPUNK
      ========================================================= */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 bg-grid bg-radial-fade" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 md:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <UserCheck className="size-3.5" />
              Welcome to Userly
            </div>

            <h1 className="text-gradient text-4xl font-bold tracking-tight md:text-6xl">
              Find people. Save your favorites.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Explore user profiles, search for people, and keep your favorite
              users within easy reach.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/users"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6 shadow-lg shadow-primary/25"
                )}
              >
                Explore Users
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/favorites"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "rounded-full border-primary/20 bg-background/50 px-6 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/10"
                )}
              >
                View Favorites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES — CHARCOAL / SEPARATE VISUAL BLOCK
      ========================================================= */}
      <section className="border-y border-border bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              What you can do
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Everything You Need to Manage Your User List
            </h2>

            <p className="mt-4 text-muted-foreground">
              Userly makes it simple to explore users, find the people you need,
              and save your favorites.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map(
              ({ icon: Icon, title, description, iconClass }) => (
                <Card
                  key={title}
                  className="group border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                >
                  <CardHeader>
                    <div
                      className={cn(
                        "mb-3 flex size-11 items-center justify-center rounded-xl transition-colors",
                        iconClass
                      )}
                    >
                      <Icon className="size-5" />
                    </div>

                    <CardTitle className="text-base">{title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA — VIOLET / DISTINCT SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-secondary/10">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/15 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="relative overflow-hidden rounded-3xl border border-secondary/30 bg-secondary/10 px-8 py-16 text-center shadow-2xl shadow-secondary/10 md:px-12">
            <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-50" />

            <div className="relative z-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Your directory awaits
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to explore?
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-muted-foreground">
                Discover users and build your own collection of favorite
                profiles with Userly.
              </p>

              <Link
                href="/users"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-8 rounded-full px-7 shadow-lg shadow-primary/25"
                )}
              >
                Browse Users
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}