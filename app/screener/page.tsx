"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUp, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { popularStocks } from "@/lib/stock-data";

export default function ScreenerPage() {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sector, setSector] = useState("all");
  
  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Screener Saham
        </h1>
        <p className="text-lg text-muted-foreground">
          Temukan saham berdasarkan kriteria keuangan dan teknikal
        </p>
      </section>
      
      <section>
        <Tabs defaultValue="basic">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Dasar</TabsTrigger>
            <TabsTrigger value="advanced">Lanjutan</TabsTrigger>
          </TabsList>
          <TabsContent value="basic" className="pt-4">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle>Filter Dasar</CardTitle>
                <CardDescription>
                  Filter saham berdasarkan kriteria umum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="sector">Sektor</Label>
                      <Select value={sector} onValueChange={setSector}>
                        <SelectTrigger id="sector">
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
                    <div className="space-y-2">
                      <Label htmlFor="index">Indeks</Label>
                      <Select>
                        <SelectTrigger id="index">
                          <SelectValue placeholder="Pilih indeks" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua</SelectItem>
                          <SelectItem value="lq45">LQ45</SelectItem>
                          <SelectItem value="idx30">IDX30</SelectItem>
                          <SelectItem value="kompas100">Kompas 100</SelectItem>
                          <SelectItem value="jii">JII</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Rentang Harga</Label>
                      <div className="text-sm text-muted-foreground">
                        Rp {priceRange[0].toLocaleString()} - Rp {priceRange[1].toLocaleString()}
                      </div>
                    </div>
                    <Slider
                      defaultValue={priceRange}
                      max={10000}
                      step={100}
                      onValueChange={setPriceRange}
                    />
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="min-market-cap">Market Cap Min (Rp)</Label>
                      <Input id="min-market-cap" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="min-pe">P/E Min</Label>
                      <Input id="min-pe" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-pe">P/E Max</Label>
                      <Input id="max-pe" type="number" placeholder="100" />
                    </div>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="min-div">Dividen Min (%)</Label>
                      <Input id="min-div" type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="min-vol">Volume Min (Lot)</Label>
                      <Input id="min-vol" type="number" placeholder="1000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="change">Perubahan (%)</Label>
                      <Select>
                        <SelectTrigger id="change">
                          <SelectValue placeholder="Pilih perubahan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua</SelectItem>
                          <SelectItem value="up">Naik</SelectItem>
                          <SelectItem value="down">Turun</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Reset</Button>
                    <Button>Cari Saham</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="advanced" className="pt-4">
            <Card className="border p-6 text-center">
              <p className="text-muted-foreground py-10">
                Filter lanjutan akan ditampilkan di sini
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
      
      <section>
        <Card className="border shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Hasil Pencarian</CardTitle>
              <CardDescription>15 saham ditemukan</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Cari di hasil" className="w-[200px] pl-9" />
              </div>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-2 bg-muted/50 p-3 text-xs font-medium">
                <div className="col-span-2">Kode</div>
                <div className="col-span-3">Nama</div>
                <div className="col-span-2 text-right">Harga</div>
                <div className="col-span-2 text-right">% Perubahan</div>
                <div className="col-span-1 text-right">P/E</div>
                <div className="col-span-2 text-right">Volume</div>
              </div>
              <div className="divide-y">
                {popularStocks.map((stock) => (
                  <div
                    key={stock.code}
                    className="grid grid-cols-12 items-center gap-2 p-3 hover:bg-muted/50"
                  >
                    <div className="col-span-2">
                      <Link
                        href={`/stocks/${stock.code}`}
                        className="font-medium hover:underline"
                      >
                        {stock.code}
                      </Link>
                    </div>
                    <div className="col-span-3 text-sm">
                      {stock.name}
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
                    <div className="col-span-1 text-right text-sm">
                      {(Math.random() * 30 + 10).toFixed(1)}
                    </div>
                    <div className="col-span-2 text-right text-sm">
                      {(Math.random() * 10000000).toFixed(0).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}