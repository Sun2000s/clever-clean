"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Packages", path: "/admin/packages" },
    { name: "Orders", path: "/admin/orders" },
    { name: "Users", path: "/admin/users" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50 h-full w-64 bg-white border-r shadow-sm
          transform ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 transition duration-200
        `}
      >
        <div className="p-5 font-bold text-xl text-gray-600 border-b">
          🧼 Admin
        </div>

        <nav className="p-4 space-y-1">
          {menu.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`
                  block px-4 py-2 rounded-lg text-sm transition
                  ${
                    active
                      ? "bg-black text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <header className="h-14 bg-white border-b flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-xl"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>

            <h1 className="font-semibold text-gray-800">
              Admin Panel
            </h1>
          </div>

          {/* User */}
          <div className="text-sm text-gray-600">
            👤 Admin
          </div>
        </header>

        {/* Content */}
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}