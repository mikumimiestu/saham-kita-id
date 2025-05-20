"use client";

import { useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { stockChartData } from "@/lib/stock-data";

const timeRanges = [
  { label: "1H", value: "1h" },
  { label: "1D", value: "1d" },
  { label: "1W", value: "1w" },
  { label: "1M", value: "1m" },
  { label: "1Y", value: "1y" },
  { label: "All", value: "all" },
];

export default function StockChart({ stock = "BBCA" }) {
  const [timeRange, setTimeRange] = useState("1m");
  const [isPositive, setIsPositive] = useState(true);
  
  // Simulate changing data and direction based on time range
  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
    setIsPositive(Math.random() > 0.3); // Randomly change direction for demo
  };
  
  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">{stock}</CardTitle>
            <CardDescription>PT Bank Central Asia Tbk</CardDescription>
          </div>
          <div className="text-right">
            <div className="text-xl font-semibold">Rp 9.750</div>
            <div
              className={cn(
                "flex items-center justify-end",
                isPositive ? "text-emerald-500" : "text-rose-500"
              )}
            >
              <span className="text-sm font-medium">
                {isPositive ? "+" : "-"}Rp 175 ({isPositive ? "+" : "-"}1.82%)
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={stockChartData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#888" strokeOpacity={0.2} />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickMargin={10}
                minTickGap={20}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickMargin={10}
                domain={["dataMin - 100", "dataMax + 100"]}
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                formatter={(value: number) => [`Rp ${value}`, "Harga"]}
                labelFormatter={(label) => `Waktu: ${label}`}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke={isPositive ? "#10b981" : "#ef4444"}
                fillOpacity={1}
                fill={`url(#color${isPositive ? "Positive" : "Negative"})`}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {timeRanges.map((range) => (
            <Button
              key={range.value}
              variant={timeRange === range.value ? "default" : "outline"}
              size="sm"
              onClick={() => handleTimeRangeChange(range.value)}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}