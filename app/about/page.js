import { CheckCircle2 } from "lucide-react";

const values = [
  "Simple and maintainable back-end solutions",
  "Clear API structure with proper request validation",
  "Practical implementation of Next.js back-end concepts",
];

const stats = [
  { value: "4", label: "API HTTP methods" },
  { value: "3", label: "API endpoints" },
  { value: "2", label: "Data resources" },
  { value: "10+", label: "Implemented features" },
];

const features = [
  "Next.js Route Handler for building custom API endpoints",
  "GET endpoint for retrieving user profile data",
  "GET endpoint for retrieving favorite users",
  "POST endpoint for adding users to Favorites",
  "PATCH endpoint for updating favorite user notes",
  "DELETE endpoint for removing users from Favorites",
  "Dynamic API route with /api/favorites/[id]",
  "Request body validation and error handling",
  "Duplicate favorite validation before creating data",
  "In-memory data management through lib/db.js",
  "Server Action for deleting messages",
  "revalidatePath() to refresh data after server mutations",
];

export default function AboutPage() {
  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* About */}
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold text-primary">
              About Userly
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              A Back-End Development Assignment
            </h1>

            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              Userly is a user directory web application developed as a
              Back-End Development assignment for the{" "}
              <span className="font-medium text-foreground">
                Perempuan Inovasi 2026
              </span>{" "}
              program.
            </p>

            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              This project was developed by{" "}
              <span className="font-medium text-foreground">
                Dita Surya Kartika
              </span>{" "}
              to apply back-end development concepts using Next.js Route
              Handlers, REST API methods, request validation, server actions,
              and server-side data management.
            </p>

            <ul className="mt-8 space-y-3">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-start gap-3 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />

                  <span className="text-muted-foreground">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-primary/30"
              >
                <p className="text-3xl font-bold tracking-tight text-primary">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Concepts */}
        <div className="mt-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">
              Tech Stack &amp; Concepts
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Built with modern back-end tools
            </h2>

            <p className="mt-4 text-muted-foreground">
              Userly combines Next.js back-end features with REST API concepts
              and server-side data handling learned throughout the assignment.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">Route Handler</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Next.js Route Handlers are used to create custom API endpoints
                inside the application.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">REST API</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                GET, POST, PATCH, and DELETE methods are implemented to handle
                different data operations.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">API Validation</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Request bodies are validated and API errors return appropriate
                response messages and status codes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">Data Management</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Favorite users and messages are managed through an in-memory
                data module in lib/db.js.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">Server Actions</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                Server Actions handle server-side mutations such as deleting
                messages directly from the application.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-foreground/[0.03] p-6">
              <h3 className="font-semibold">Revalidation</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                revalidatePath() is used to refresh the messages page after a
                successful server-side mutation.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">
              Features
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              What you can do with Userly
            </h2>

            <p className="mt-4 text-muted-foreground">
              The project brings together the back-end concepts implemented
              throughout the assignment.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 border-b border-border/50 pb-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />

                <span className="text-sm text-muted-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}