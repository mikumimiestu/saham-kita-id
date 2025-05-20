"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newsItems } from "@/lib/news-data";

export default function NewsSection() {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle>Berita Pasar Terkini</CardTitle>
        <CardDescription>Berita dan analisis terbaru terkait pasar saham</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="latest">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="latest">Terbaru</TabsTrigger>
            <TabsTrigger value="popular">Populer</TabsTrigger>
            <TabsTrigger value="analysis">Analisis</TabsTrigger>
          </TabsList>
          <TabsContent value="latest" className="space-y-4 pt-4">
            {newsItems.slice(0, 4).map((news) => (
              <div key={news.id} className="group flex gap-4 py-2">
                <div className="relative h-24 w-24 flex-none overflow-hidden rounded-md">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <Link href={`/news/${news.id}`} className="font-medium hover:underline">
                      {news.title}
                    </Link>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {news.excerpt}
                    </p>
                  </div>
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
                </div>
              </div>
            ))}
            <div className="pt-2 text-center">
              <Link
                href="/news"
                className="text-sm font-medium text-primary hover:underline"
              >
                Lihat semua berita
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="popular" className="space-y-4 pt-4">
            {newsItems.slice(4, 8).map((news) => (
              <div key={news.id} className="group flex gap-4 py-2">
                <div className="relative h-24 w-24 flex-none overflow-hidden rounded-md">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <Link href={`/news/${news.id}`} className="font-medium hover:underline">
                      {news.title}
                    </Link>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {news.excerpt}
                    </p>
                  </div>
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
                </div>
              </div>
            ))}
            <div className="pt-2 text-center">
              <Link
                href="/news"
                className="text-sm font-medium text-primary hover:underline"
              >
                Lihat semua berita
              </Link>
            </div>
          </TabsContent>
          <TabsContent value="analysis" className="space-y-4 pt-4">
            {newsItems.slice(2, 6).map((news) => (
              <div key={news.id} className="group flex gap-4 py-2">
                <div className="relative h-24 w-24 flex-none overflow-hidden rounded-md">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <Link href={`/news/${news.id}`} className="font-medium hover:underline">
                      {news.title}
                    </Link>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {news.excerpt}
                    </p>
                  </div>
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
                </div>
              </div>
            ))}
            <div className="pt-2 text-center">
              <Link
                href="/news"
                className="text-sm font-medium text-primary hover:underline"
              >
                Lihat semua berita
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}