"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUp, Search, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { popularStocks } from "@/lib/stock-data";

export default function StocksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sector, setSector] = useState("all");
  
  // Combine all stocks for demo
  const allStocks = [...popularStocks];
  
  // Filter stocks based on search and sector
  const filteredStocks = allStocks.filter((stock) => {
    const matchesSearch = 
      stock.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSector = sector === "all" || 
      (sector === "banking" && stock.code.startsWith("BB"));
    
    return matchesSearch && matchesSector;
  });
  
  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Daftar Saham
        </h1>
        <p className="text-lg text-muted-foreground">
          Cari dan temukan informasi saham di Bursa Efek Indonesia
        </p>
      </section>
      
      <section>
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Pencarian Saham</CardTitle>
            <CardDescription>
              Cari berdasarkan kode atau nama perusahaan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari saham (kode atau nama)"
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={sector} onValueChange={setSector}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih sektor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Sektor</SelectItem>
                  <SelectItem value="banking">Perbankan</SelectItem>
                  <SelectItem value="consumer">Konsumer</SelectItem>
                  <SelectItem value="property">Properti</SelectItem>
                  <SelectItem value="infrastructure">Infrastruktur</SelectItem>
                  <SelectItem value="mining">Pertambangan</SelectItem>
                  <SelectItem value="technology">Teknologi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </section>
      
      <section>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-3 md:w-auto md:grid-cols-5">
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="blue-chip">Blue Chip</TabsTrigger>
            <TabsTrigger value="lq45">LQ45</TabsTrigger>
            <TabsTrigger value="idx30">IDX30</TabsTrigger>
            <TabsTrigger value="shariah">Syariah</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="pt-4">
            <Card className="border shadow-sm">
              <CardHeader className="py-4">
                <div className="grid grid-cols-12 gap-2 text-sm font-medium">
                  <div className="col-span-5">Kode & Nama</div>
                  <div className="col-span-2 text-right">Harga</div>
                  <div className="col-span-2 text-right">% Perubahan</div>
                  <div className="col-span-2 text-right">Vol (Lot)</div>
                  <div className="col-span-1 text-right"></div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {filteredStocks.map((stock) => (
                    <div
                      key={stock.code}
                      className="grid grid-cols-12 items-center gap-2 p-4 hover:bg-muted/50"
                    >
                      <div className="col-span-5">
                        <Link
                          href={`/stocks/${stock.code}`}
                          className="font-medium hover:underline"
                        >
                          {stock.code}
                        </Link>
                        <p className="text-xs text-muted-foreground">
                          {stock.name}
                        </p>
                      </div>
                      <div className="col-span-2 text-right font-medium">
                        {stock.price.toLocaleString()}
                      </div>
                      <div
                        className={cn(
                          "col-span-2 flex items-center justify-end gap-1 font-medium",
                          stock.change > 0
                            ? "text-emerald-500"
                            : "text-rose-500"
                        )}
                      >
                        {stock.change > 0 ? (
                          <ArrowUp className="h-3 w-3" />
                        ) : (
                          <ArrowDown className="h-3 w-3" />
                        )}
                        <span>{Math.abs(stock.change).toFixed(2)}%</span>
                      </div>
                      <div className="col-span-2 text-right text-sm">
                        {Math.floor(Math.random() * 10000).toLocaleString()}
                      </div>
                      <div className="col-span-1 text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="blue-chip" className="pt-4">
            <Card className="border p-6 text-center">
              <p>Menampilkan saham-saham blue chip</p>
            </Card>
          </TabsContent>
          <TabsContent value="lq45" className="pt-4">
            <Card className="border p-6 text-center">
              <p>Menampilkan saham-saham LQ45</p>
            </Card>
          </TabsContent>
          <TabsContent value="idx30" className="pt-4">
            <Card className="border p-6 text-center">
              <p>Menampilkan saham-saham IDX30</p>
            </Card>
          </TabsContent>
          <TabsContent value="shariah" className="pt-4">
            <Card className="border p-6 text-center">
              <p>Menampilkan saham-saham Syariah</p>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}