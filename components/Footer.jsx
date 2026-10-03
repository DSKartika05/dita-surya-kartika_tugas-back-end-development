import Link from "next/link";

const columns = [
  {
    title: "Menu",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/profile", label: "Profile" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/users", label: "Users" },
      { href: "/favorites", label: "Favorites" },
      { href: "/contact", label: "Contact" },
      { href: "/messages", label: "Messages" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/15 bg-primary text-primary-foreground dark:bg-[#10251b] dark:text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-white/20 dark:bg-primary/20" />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="text-lg font-bold tracking-[0.08em] text-white">
              USERLY
            </p>

            <p className="mt-2 text-sm leading-6 text-primary-foreground/75 dark:text-white/70">
              User Directory &amp; Favorites — a web application developed as an
              assignment for {" "}
              <b className="text-white">Perempuan Inovasi 2026</b> program.
            </p>

            <p className="mt-4 text-xs text-primary-foreground/65 dark:text-white/60">
              Developed by{" "}
              <span className="font-medium text-white">
                Dita Surya Kartika
              </span>
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/85">
                  {column.title}
                </p>

                <ul className="mt-3 space-y-2">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/70 transition-colors hover:text-white dark:text-white/65 dark:hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-primary-foreground/65 dark:text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Userly. All rights reserved.</p>

          <p>Built with Next.js &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}