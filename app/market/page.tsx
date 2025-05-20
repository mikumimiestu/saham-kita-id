import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MarketOverview from "@/components/market-overview";
import StockChart from "@/components/stock-chart";
import MarketSentiment from "@/components/market-sentiment";

export default function MarketPage() {
  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Ikhtisar Pasar
        </h1>
        <p className="text-lg text-muted-foreground">
          Informasi terkini tentang pasar saham Indonesia
        </p>
      </section>

      <section>
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Indeks Utama</CardTitle>
            <CardDescription>
              Pergerakan indeks pasar saham utama Indonesia hari ini
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 font-medium">IHSG</p>
                <StockChart />
              </div>
              <div>
                <p className="mb-2 font-medium">LQ45</p>
                <StockChart />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <MarketOverview />
        <MarketSentiment />
      </section>

      <section>
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Data Ekonomi Terkini</CardTitle>
            <CardDescription>
              Indikator ekonomi penting yang mempengaruhi pasar saham
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">BI Rate</p>
                  <p className="text-xl font-semibold">5.75%</p>
                  <p className="text-xs text-muted-foreground">Update: 15 Mei 2025</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Inflasi YoY</p>
                  <p className="text-xl font-semibold">3.15%</p>
                  <p className="text-xs text-muted-foreground">Update: 1 Mei 2025</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">USD/IDR</p>
                  <p className="text-xl font-semibold">15,250</p>
                  <p className="text-xs text-muted-foreground">Update: Hari Ini</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Pertumbuhan PDB</p>
                  <p className="text-xl font-semibold">5.2%</p>
                  <p className="text-xs text-muted-foreground">Update: Q1 2025</p>
                </div>
              </div>
              <p className="pt-4 text-sm text-muted-foreground">
                Bank Indonesia mempertahankan suku bunga acuan pada level 5,75% dalam rapat terakhir. 
                Inflasi tahunan berada pada level 3,15%, masih dalam target 2-4% yang ditetapkan 
                pemerintah. Nilai tukar rupiah terhadap dolar AS stabil di kisaran Rp15.200-Rp15.300.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}