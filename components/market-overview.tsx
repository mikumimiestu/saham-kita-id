"use client";

import { ArrowDown, ArrowUp, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { marketIndices, topGainers, topLosers } from "@/lib/stock-data";

export default function MarketOverview() {
  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle>Ringkasan Pasar</CardTitle>
        <CardDescription>Indeks utama pasar saham Indonesia</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {marketIndices.map((index) => (
            <div key={index.name} className="space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{index.name}</p>
                <div
                  className={cn(
                    "flex items-center text-xs font-medium",
                    index.change > 0
                      ? "text-emerald-500"
                      : "text-rose-500"
                  )}
                >
                  {index.change > 0 ? (
                    <ArrowUp className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDown className="mr-1 h-3 w-3" />
                  )}
                  {Math.abs(index.change).toFixed(2)}%
                </div>
              </div>
              <p className="font-semibold">{index.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
        
        <Tabs defaultValue="gainers" className="mt-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="gainers">
              <TrendingUp className="mr-2 h-4 w-4 text-emerald-500" />
              Top Gainers
            </TabsTrigger>
            <TabsTrigger value="losers">
              <TrendingDown className="mr-2 h-4 w-4 text-rose-500" />
              Top Losers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="gainers" className="space-y-4 pt-4">
            <div className="space-y-3">
              {topGainers.map((stock) => (
                <div
                  key={stock.code}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <p className="font-medium">{stock.code}</p>
                      <span className="ml-2 text-xs text-muted-foreground">
                        {stock.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-medium">{stock.price.toLocaleString()}</p>
                    <div className="flex items-center text-emerald-500">
                      <ArrowUp className="mr-1 h-3 w-3" />
                      <span className="font-medium">{stock.change.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="losers" className="space-y-4 pt-4">
            <div className="space-y-3">
              {topLosers.map((stock) => (
                <div
                  key={stock.code}
                  className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center">
                      <p className="font-medium">{stock.code}</p>
                      <span className="ml-2 text-xs text-muted-foreground">
                        {stock.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-medium">{stock.price.toLocaleString()}</p>
                    <div className="flex items-center text-rose-500">
                      <ArrowDown className="mr-1 h-3 w-3" />
                      <span className="font-medium">{Math.abs(stock.change).toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}