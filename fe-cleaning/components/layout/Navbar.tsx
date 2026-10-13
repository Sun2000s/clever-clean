
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const menus = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/#services" },
  { name: "Packages", href: "/packages" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const LINE_URL = "https://line.me/R/ti/p/@crclean";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/#services") return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-200/50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-[#183153]"
        >
          Clever Clean
        </Link>

        {/* Desktop Menu */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              aria-current={isActive(menu.href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#D9B06D] ${
                isActive(menu.href)
                  ? "text-[#183153]"
                  : "text-gray-700"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Booking CTA */}
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#183153] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#D9B06D] hover:text-[#183153] lg:block"
        >
          Book Now
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-lg p-2 text-[#183153] transition hover:bg-gray-100 lg:hidden"
        >
          {isMenuOpen ? (
            <HiOutlineX size={26} />
          ) : (
            <HiOutlineMenu size={26} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 shadow-lg lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1"
          >
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                onClick={closeMenu}
                aria-current={isActive(menu.href) ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-[#F9F9F7] hover:text-[#183153] ${
                  isActive(menu.href)
                    ? "bg-[#F9F9F7] text-[#183153]"
                    : "text-gray-700"
                }`}
              >
                {menu.name}
              </Link>
            ))}

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center rounded-full bg-[#183153] px-6 py-3 font-semibold text-white transition hover:bg-[#D9B06D] hover:text-[#183153]"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}