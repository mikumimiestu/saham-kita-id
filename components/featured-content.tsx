import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FeaturedContent() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Analisis teknikal saham"
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Analisis</Badge>
            <Badge variant="outline">Edukasi</Badge>
          </div>
          <CardTitle className="line-clamp-2">
            Memahami Analisis Teknikal untuk Pemula
          </CardTitle>
          <CardDescription className="line-clamp-2">
            Panduan lengkap memahami analisis teknikal untuk investor pemula dengan contoh
            praktis dan strategi penerapannya.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/education/technical-analysis" className="w-full">
            <Button variant="outline" className="w-full group">
              <span>Baca Selengkapnya</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src="https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Diversifikasi portofolio"
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Strategi</Badge>
            <Badge variant="outline">Investasi</Badge>
          </div>
          <CardTitle className="line-clamp-2">
            5 Strategi Diversifikasi Portofolio Saham
          </CardTitle>
          <CardDescription className="line-clamp-2">
            Pelajari cara mendiversifikasi portofolio saham Anda dengan efektif untuk
            meminimalkan risiko dan memaksimalkan pengembalian investasi.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/education/portfolio-diversification" className="w-full">
            <Button variant="outline" className="w-full group">
              <span>Baca Selengkapnya</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Webinar investasi"
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Event</Badge>
            <Badge variant="outline">Webinar</Badge>
          </div>
          <CardTitle className="line-clamp-2">
            Webinar: Prospek Saham Indonesia 2025
          </CardTitle>
          <CardDescription className="line-clamp-2">
            Bergabunglah dalam webinar eksklusif bersama analis terkemuka untuk membahas prospek
            pasar saham Indonesia di tahun 2025.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/events/webinar-2025" className="w-full">
            <Button variant="outline" className="w-full group">
              <span>Daftar Sekarang</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}