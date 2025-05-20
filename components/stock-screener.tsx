"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { popularStocks } from "@/lib/stock-data";

export default function StockScreener() {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sector, setSector] = useState("all");
  
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle>Screener Saham</CardTitle>
        <CardDescription>Temukan saham sesuai kriteria Anda</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
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
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="min-pe">P/E Minimum</Label>
              <Input id="min-pe" type="number" placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-pe">P/E Maksimum</Label>
              <Input id="max-pe" type="number" placeholder="100" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="min-div">Dividen Minimum (%)</Label>
              <Input id="min-div" type="number" placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="min-vol">Volume Minimum</Label>
              <Input id="min-vol" type="number" placeholder="1000000" />
            </div>
          </div>
          
          <Button className="w-full">Cari Saham</Button>
          
          <div className="mt-6 rounded-md border">
            <div className="grid grid-cols-12 gap-2 bg-muted/50 p-3 text-xs font-medium">
              <div className="col-span-5">Kode</div>
              <div className="col-span-3 text-right">Harga</div>
              <div className="col-span-4 text-right">Sektor</div>
            </div>
            <div className="divide-y">
              {popularStocks.slice(0, 5).map((stock) => (
                <div
                  key={stock.code}
                  className="grid grid-cols-12 items-center gap-2 p-3"
                >
                  <div className="col-span-5">
                    <p className="font-medium">{stock.code}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {stock.name}
                    </p>
                  </div>
                  <div className="col-span-3 text-right font-medium">
                    {stock.price.toLocaleString()}
                  </div>
                  <div className="col-span-4 text-right text-sm">
                    {stock.code.startsWith("BB") ? "Perbankan" : "Konsumer"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}