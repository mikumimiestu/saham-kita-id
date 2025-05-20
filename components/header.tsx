"use client";

import Link from "next/link";
import { CircleDollarSign, LucideGitGraph, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <img 
              src="https://www.svgrepo.com/show/370769/stock.svg" 
              alt="Logo SahamKita" 
              className="h-12 w-12 dark:invert" // `dark:invert` agar warnanya menyesuaikan tema gelap
            />
            <span className="hidden md:inline-block">SahamKita</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            Beranda
          </Link>
          <Link href="/market" className="text-sm font-medium hover:underline">
            Pasar
          </Link>
          <Link href="/stocks" className="text-sm font-medium hover:underline">
            Saham
          </Link>
          <Link href="/watchlist" className="text-sm font-medium hover:underline">
            Watchlist
          </Link>
          <Link href="/news" className="text-sm font-medium hover:underline">
            Berita
          </Link>
          <Link href="/screener" className="text-sm font-medium hover:underline">
            Screener
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {searchOpen ? (
            <div className="flex animate-in fade-in items-center gap-2">
              <Input
                placeholder="Cari saham..."
                className="w-[200px] md:w-[300px]"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={toggleSearch}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" size="icon" onClick={toggleSearch}>
                <Search className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden animate-in fade-in slide-in-from-top">
          <nav className="container flex flex-col gap-4 p-4">
            <Link href="/" className="flex items-center p-2 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>
              Beranda
            </Link>
            <Link href="/market" className="flex items-center p-2 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>
              Pasar
            </Link>
            <Link href="/stocks" className="flex items-center p-2 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>
              Saham
            </Link>
            <Link href="/watchlist" className="flex items-center p-2 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>
              Watchlist
            </Link>
            <Link href="/news" className="flex items-center p-2 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>
              Berita
            </Link>
            <Link href="/screener" className="flex items-center p-2 hover:bg-muted rounded-md" onClick={toggleMobileMenu}>
              Screener
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}