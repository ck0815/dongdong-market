"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "首页", href: "/" },
  { name: "供货指南", href: "/supply" },
  { name: "采购指南", href: "/purchase" },
  { name: "供应产品", href: "/products" },
  { name: "关于市场", href: "/about" },
  { name: "联系我们", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[rgb(var(--theme-primary))] p-2 rounded-lg group-hover:scale-110 transition-transform">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[rgb(var(--theme-primary))]">
              东东瓜果蔬菜市场
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[rgb(var(--theme-primary))] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-gray-700 hover:text-[rgb(var(--theme-primary))] transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

