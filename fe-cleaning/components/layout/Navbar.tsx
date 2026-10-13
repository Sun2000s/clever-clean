"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "@/i18n/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";

const menus = [
  { key: "home", href: "/" },
  { key: "services", href: "/#services" },
  { key: "packages", href: "/packages" },
  { key: "portfolio", href: "/portfolio" },
  { key: "contact", href: "/contact" },
] as const;

const LINE_URL = "https://line.me/R/ti/p/@crclean";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/#services") return false;

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const switchLanguage = () => {
    const nextLocale = locale === "th" ? "en" : "th";

    closeMenu();
    router.replace(pathname, { locale: nextLocale });
  };

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
          className="hidden items-center gap-6 lg:flex"
        >
          {menus.map((menu) => (
            <Link
              key={menu.key}
              href={menu.href}
              aria-current={isActive(menu.href) ? "page" : undefined}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#D9B06D] ${
                isActive(menu.href)
                  ? "text-[#183153]"
                  : "text-gray-700"
              }`}
            >
              {t(menu.key)}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={switchLanguage}
            aria-label="Switch language"
            className="rounded-full border border-gray-200 px-3 py-2 text-sm font-semibold text-[#183153] transition hover:border-[#D9B06D]"
          >
            {locale === "th" ? "EN" : "TH"}
          </button>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#183153] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#D9B06D] hover:text-[#183153]"
          >
            {t("bookNow")}
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={switchLanguage}
            aria-label="Switch language"
            className="rounded-full border border-gray-200 px-3 py-2 text-sm font-semibold text-[#183153]"
          >
            {locale === "th" ? "EN" : "TH"}
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-[#183153] transition hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <HiOutlineX size={26} />
            ) : (
              <HiOutlineMenu size={26} />
            )}
          </button>
        </div>
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
                key={menu.key}
                href={menu.href}
                onClick={closeMenu}
                aria-current={isActive(menu.href) ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-[#F9F9F7] hover:text-[#183153] ${
                  isActive(menu.href)
                    ? "bg-[#F9F9F7] text-[#183153]"
                    : "text-gray-700"
                }`}
              >
                {t(menu.key)}
              </Link>
            ))}

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center rounded-full bg-[#183153] px-6 py-3 font-semibold text-white transition hover:bg-[#D9B06D] hover:text-[#183153]"
            >
              {t("bookNow")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
