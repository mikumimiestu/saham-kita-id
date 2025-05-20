import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newsItems } from "@/lib/news-data";

export default function NewsPage() {
  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Berita Pasar Modal
        </h1>
        <p className="text-lg text-muted-foreground">
          Berita terbaru dan analisis seputar pasar saham Indonesia
        </p>
      </section>
      
      <section>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Cari berita" className="pl-9" />
        </div>
      </section>
      
      <section>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="market">Pasar</TabsTrigger>
            <TabsTrigger value="stocks">Saham</TabsTrigger>
            <TabsTrigger value="economy">Ekonomi</TabsTrigger>
            <TabsTrigger value="analysis">Analisis</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="pt-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((news) => (
                <Card key={news.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 w-full">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <Link href={`/news/${news.id}`}>
                      <CardTitle className="line-clamp-2 hover:underline">
                        {news.title}
                      </CardTitle>
                    </Link>
                    <CardDescription className="line-clamp-2">
                      {news.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {news.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {news.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="market" className="pt-4">
            <p className="text-center text-muted-foreground py-10">
              Berita pasar akan ditampilkan di sini
            </p>
          </TabsContent>
          <TabsContent value="stocks" className="pt-4">
            <p className="text-center text-muted-foreground py-10">
              Berita saham akan ditampilkan di sini
            </p>
          </TabsContent>
          <TabsContent value="economy" className="pt-4">
            <p className="text-center text-muted-foreground py-10">
              Berita ekonomi akan ditampilkan di sini
            </p>
          </TabsContent>
          <TabsContent value="analysis" className="pt-4">
            <p className="text-center text-muted-foreground py-10">
              Analisis pasar akan ditampilkan di sini
            </p>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}