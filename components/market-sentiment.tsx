"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { name: "Bullish", value: 60 },
  { name: "Bearish", value: 25 },
  { name: "Netral", value: 15 },
];

const COLORS = ["#10b981", "#ef4444", "#f59e0b"];

export default function MarketSentiment() {
  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle>Sentimen Pasar</CardTitle>
        <CardDescription>Pandangan investor terhadap pasar saat ini</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                labelLine={false}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ paddingTop: "20px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>
            Sentimen pasar saat ini menunjukkan mayoritas investor (60%) memiliki pandangan
            bullish terhadap pasar saham Indonesia. Hal ini didukung oleh pertumbuhan ekonomi
            yang stabil dan kebijakan pemerintah yang pro-investasi.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}