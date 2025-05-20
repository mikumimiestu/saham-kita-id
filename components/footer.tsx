import Link from "next/link";
import { CircleDollarSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <CircleDollarSign className="h-6 w-6 text-primary" />
              <span>SahamKita</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Solusi lengkap untuk investasi saham di Indonesia. Dapatkan informasi pasar, analisis, dan berita terkini.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/market" className="hover:underline">
                  Pasar
                </Link>
              </li>
              <li>
                <Link href="/stocks" className="hover:underline">
                  Saham
                </Link>
              </li>
              <li>
                <Link href="/watchlist" className="hover:underline">
                  Watchlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/news" className="hover:underline">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:underline">
                  Edukasi
                </Link>
              </li>
              <li>
                <Link href="/screener" className="hover:underline">
                  Screener
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:underline">
                  Kalender Ekonomi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium">Tentang Kami</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  Tentang SahamKita
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; 2025 SahamKita. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}