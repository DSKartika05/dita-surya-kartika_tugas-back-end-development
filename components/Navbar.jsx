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
  { href: "/messages", label: "Messages"},
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
      <nav className="rounded-full border border-primary/20 bg-primary px-4 py-2 text-primary-foreground shadow-lg shadow-primary/20 dark:border-white/10 dark:bg-[#10251b] dark:text-white dark:shadow-black/20">
        {/* Top Navbar */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="shrink-0 text-sm font-bold tracking-[0.15em] text-white transition-opacity hover:opacity-80"
          >
            USERLY
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 text-sm text-primary-foreground/80 dark:text-white/75 lg:flex">
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
                    "rounded-full px-3 py-1.5 transition-colors",
                    "hover:bg-white/10 hover:text-white",
                    isActive && "bg-white/15 text-white"
                  )}
                >
                  {link.label}

                  {link.href === "/favorites" &&
                    favoritesCount > 0 && (
                      <span className="ml-1.5 rounded-full bg-white/15 px-1.5 py-0.5 text-xs text-white">
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
              <span className="hidden text-sm text-primary-foreground/80 dark:text-white/70 sm:inline">
                Hi, {name} 👋
              </span>
            )}

            <ThemeToggle />

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden rounded-full bg-white text-primary hover:bg-white/90 sm:inline-flex dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
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
              className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 lg:hidden"
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
            <div className="mt-3 border-t border-white/15 pb-2 pt-3">
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
                        "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-primary-foreground/80 transition-colors dark:text-white/75",
                        "hover:bg-white/10 hover:text-white",
                        isActive && "bg-white/15 text-white"
                      )}
                    >
                      <span>{link.label}</span>

                      {link.href === "/favorites" &&
                        favoritesCount > 0 && (
                          <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs text-white">
                            {favoritesCount}
                          </span>
                        )}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-primary transition-opacity hover:bg-white/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
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