"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { useFavorite } from "@/context/FavoriteContext";
import { useUser } from "@/context/UserContext";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/profile", label: "Profile" },
  { href: "/contact", label: "Contact" },
  { href: "/users", label: "Users" },
  { href: "/favorites", label: "Favorites" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { favoritesCount } = useFavorite();
  const { name, submitted } = useUser();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      <nav className="rounded-full border border-white/10 bg-background/70 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-xl">
        {/* Top Navbar */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="shrink-0 text-sm font-bold tracking-[0.15em] text-primary"
          >
            USERLY
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 text-sm text-muted-foreground lg:flex">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 transition-colors hover:text-foreground",
                    isActive && "bg-primary/10 text-primary"
                  )}
                >
                  {link.label}

                  {link.href === "/favorites" && favoritesCount > 0 && (
                    <span className="ml-1.5 rounded-full bg-primary/15 px-1.5 py-0.5 text-xs text-primary">
                      {favoritesCount}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {submitted && (
              <span className="hidden text-sm text-muted-foreground sm:inline">
                Hi, {name} 👋
              </span>
            )}

            <ThemeToggle />

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden rounded-full sm:inline-flex"
              )}
            >
              Sign Up / Login
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary lg:hidden"
            >
              {menuOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "grid transition-all duration-300 lg:hidden",
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="mt-3 border-t border-white/10 pt-3 pb-2">
              <div className="flex flex-col gap-1">
                {links.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname?.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground",
                        isActive && "bg-primary/10 text-primary"
                      )}
                    >
                      <span>{link.label}</span>

                      {link.href === "/favorites" &&
                        favoritesCount > 0 && (
                          <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">
                            {favoritesCount}
                          </span>
                        )}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Sign Up / Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}