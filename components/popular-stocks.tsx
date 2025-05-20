"use client";

import Link from "next/link";
import { ArrowDown, ArrowUp, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { popularStocks } from "@/lib/stock-data";

export default function PopularStocks() {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle>Saham Populer</CardTitle>
        <CardDescription>Saham yang banyak diperhatikan investor</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-md border">
            <div className="grid grid-cols-12 gap-2 bg-muted/50 p-3 text-xs font-medium">
              <div className="col-span-5">Kode</div>
              <div className="col-span-3 text-right">Harga</div>
              <div className="col-span-3 text-right">Perubahan</div>
              <div className="col-span-1 text-right"></div>
            </div>
            <div className="divide-y">
              {popularStocks.map((stock) => (
                <div
                  key={stock.code}
                  className="grid grid-cols-12 items-center gap-2 p-3"
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
                  <div className="col-span-3 text-right font-medium">
                    {stock.price.toLocaleString()}
                  </div>
                  <div
                    className={cn(
                      "col-span-3 flex items-center justify-end text-xs font-medium",
                      stock.change > 0
                        ? "text-emerald-500"
                        : "text-rose-500"
                    )}
                  >
                    {stock.change > 0 ? (
                      <ArrowUp className="mr-1 h-3 w-3" />
                    ) : (
                      <ArrowDown className="mr-1 h-3 w-3" />
                    )}
                    {Math.abs(stock.change).toFixed(2)}%
                  </div>
                  <div className="col-span-1 text-right">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <Star className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link href="/stocks">
              <Button variant="outline" className="w-full">
                Lihat Semua Saham
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}