import { Mail, MessageCircle, Code2 } from "lucide-react";

import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "10", label: "Users" },
  { value: "12", label: "Features" },
  { value: "8", label: "Pages" },
];

const highlights = [
  "Next.js Route Handler",
  "REST API",
  "CRUD Operations",
  "Server Actions",
];

export default function Profile() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Card className="overflow-hidden border-border bg-card shadow-2xl">
          <CardContent className="p-0">
            {/* =====================================================
                PROFILE IDENTITY — GREEN
            ===================================================== */}
            <div className="relative overflow-hidden bg-primary/[0.07] px-6 py-12 text-center md:px-10">
              <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-50" />

              <div className="relative z-10">
                {/* Avatar */}
                <div className="mx-auto flex size-20 items-center justify-center rounded-full border border-primary/30 bg-primary/15 text-2xl font-bold text-primary shadow-lg shadow-primary/10">
                  DK
                </div>

                {/* Profile Info */}
                <h1 className="mt-5 text-2xl font-bold tracking-tight md:text-3xl">
                  Dita Surya Kartika
                </h1>

                <p className="mt-1 text-sm font-medium text-primary">
                  Back-End Developer
                </p>

                <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-muted-foreground">
                  Developer of Userly, a Back-End Development assignment
                  created for the Perempuan Inovasi 2026 program. This project
                  explores back-end development concepts using Next.js Route
                  Handlers, REST API, CRUD operations, and Server Actions.
                </p>
              </div>
            </div>

            {/* =====================================================
                STATS — CHARCOAL
            ===================================================== */}
            <div className="border-y border-border bg-muted px-6 py-7 md:px-10">
              <div className="grid grid-cols-3 divide-x divide-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-bold text-primary md:text-2xl">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                BUILT WITH — VIOLET
            ===================================================== */}
            <div className="relative overflow-hidden bg-secondary/[0.08] px-6 py-8 text-center md:px-10">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-[80px]" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2">
                  <Code2 className="size-4 text-secondary" />

                  <h2 className="text-sm font-semibold">
                    Built With
                  </h2>
                </div>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-secondary/40 hover:text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* =====================================================
                CONTACT — QUIET / STRUCTURAL
            ===================================================== */}
            <div className="flex justify-center gap-3 bg-card px-6 py-7">
              <Link
                href="/contact"
                aria-label="Contact"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                <MessageCircle className="size-4" />
              </Link>

              <a
                href="mailto:contact.dskartika@gmail.com"
                aria-label="Email"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}