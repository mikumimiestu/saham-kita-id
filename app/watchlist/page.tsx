"use client";

import Link from "next/link";
import { ArrowDown, ArrowUp, Bell, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { popularStocks } from "@/lib/stock-data";

export default function WatchlistPage() {
  const myWatchlists = [
    { id: "default", name: "Watchlist Utama" },
    { id: "dividend", name: "Saham Dividen" },
    { id: "growth", name: "Pertumbuhan" },
  ];
  
  const getWatchlistStocks = (id: string) => {
    // For the demo, just slice different parts of the stock data
    switch (id) {
      case "dividend":
        return popularStocks.slice(0, 4);
      case "growth":
        return popularStocks.slice(3, 6);
      default:
        return popularStocks.slice(0, 6);
    }
  };
  
  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Watchlist Saya
        </h1>
        <p className="text-lg text-muted-foreground">
          Pantau pergerakan saham yang Anda minati
        </p>
      </section>
      
      <section>
        <Tabs defaultValue="default">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <TabsList className="h-auto">
              {myWatchlists.map((watchlist) => (
                <TabsTrigger key={watchlist.id} value={watchlist.id}>
                  {watchlist.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Bell className="mr-2 h-4 w-4" />
                <span>Atur Notifikasi</span>
              </Button>
              <Button size="sm">Tambah Watchlist</Button>
            </div>
          </div>
          
          {myWatchlists.map((watchlist) => (
            <TabsContent key={watchlist.id} value={watchlist.id} className="pt-4">
              <Card className="border shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{watchlist.name}</CardTitle>
                      <CardDescription>
                        {getWatchlistStocks(watchlist.id).length} saham dipantau
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      Tambah Saham
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 gap-2 bg-muted/50 p-3 text-xs font-medium">
                      <div className="col-span-5">Kode & Nama</div>
                      <div className="col-span-2 text-right">Harga</div>
                      <div className="col-span-2 text-right">% Perubahan</div>
                      <div className="col-span-2 text-right">Target Harga</div>
                      <div className="col-span-1 text-right"></div>
                    </div>
                    <div className="divide-y">
                      {getWatchlistStocks(watchlist.id).map((stock) => (
                        <div
                          key={stock.code}
                          className="grid grid-cols-12 items-center gap-2 p-3 hover:bg-muted/50"
                        >
                          <div className="col-span-5">
                            <Link
                              href={`/stocks/${stock.code}`}
                              className="font-medium hover:underline"
                            >
                              {stock.code}
                            </Link>
                            <p className="text-xs text-muted-foreground truncate">
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
                            Rp {(stock.price * (1 + Math.random() * 0.2)).toFixed(0)}
                          </div>
                          <div className="col-span-1 text-right">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Trash2 className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      
      <section>
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Notifikasi Harga</CardTitle>
            <CardDescription>Atur notifikasi ketika harga saham mencapai target Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-2 bg-muted/50 p-3 text-xs font-medium">
                <div className="col-span-4">Kode</div>
                <div className="col-span-3">Jenis</div>
                <div className="col-span-2 text-right">Harga Target</div>
                <div className="col-span-2 text-right">Harga Saat Ini</div>
                <div className="col-span-1 text-right"></div>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-12 items-center gap-2 p-3">
                  <div className="col-span-4 font-medium">BBCA</div>
                  <div className="col-span-3">
                    <span className="inline-flex rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                      Di atas
                    </span>
                  </div>
                  <div className="col-span-2 text-right">10,000</div>
                  <div className="col-span-2 text-right">9,750</div>
                  <div className="col-span-1 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center gap-2 p-3">
                  <div className="col-span-4 font-medium">GOTO</div>
                  <div className="col-span-3">
                    <span className="inline-flex rounded-full bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700 dark:bg-rose-900 dark:text-rose-300">
                      Di bawah
                    </span>
                  </div>
                  <div className="col-span-2 text-right">85</div>
                  <div className="col-span-2 text-right">89</div>
                  <div className="col-span-1 text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}