"use client";

import Link from "next/link";

const menus = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "#services" },
  { name: "Packages", href: "/packages" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#183153]">
          Clever Clean
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#D9B06D]"
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden rounded-full bg-[#183153] px-6 py-3 text-white transition hover:bg-[#D9B06D] hover:text-[#183153] lg:block"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}