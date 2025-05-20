import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StockChart from "@/components/stock-chart";

export default function StockDetailPage({
  params,
}: {
  params: { code: string };
}) {
  const { code } = params;
  
  // In a real app, you would fetch stock details from API using the code
  
  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-10">
      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {code}
            </h1>
            <p className="text-lg text-muted-foreground">
              PT Bank Central Asia Tbk - Sektor Perbankan
            </p>
          </div>
          <div className="text-right">
            <div className="text-xl font-semibold">Rp 9.750</div>
            <div className="flex items-center justify-end text-emerald-500">
              <span className="text-sm font-medium">
                +Rp 175 (+1.82%)
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <StockChart stock={code} />
      </section>
      
      <section>
        <Card className="border shadow-sm">
          <CardHeader>
            <CardTitle>Ringkasan Saham</CardTitle>
            <CardDescription>Informasi kunci tentang {code}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">Open</p>
                <p className="text-sm font-medium">Rp 9.600</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">Previous Close</p>
                <p className="text-sm font-medium">Rp 9.575</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">Day Range</p>
                <p className="text-sm font-medium">Rp 9.550 - Rp 9.800</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">52 Week Range</p>
                <p className="text-sm font-medium">Rp 8.500 - Rp 9.950</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">Volume</p>
                <p className="text-sm font-medium">23.5 M</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">Avg. Volume</p>
                <p className="text-sm font-medium">19.8 M</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">Market Cap</p>
                <p className="text-sm font-medium">Rp 1,197.5 T</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground">P/E Ratio</p>
                <p className="text-sm font-medium">22.5</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
      
      <section>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Ikhtisar</TabsTrigger>
            <TabsTrigger value="financials">Keuangan</TabsTrigger>
            <TabsTrigger value="analysis">Analisis</TabsTrigger>
            <TabsTrigger value="news">Berita</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="pt-4">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle>Tentang Perusahaan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  PT Bank Central Asia Tbk (BCA) adalah bank swasta terbesar di Indonesia. 
                  BCA didirikan pada 21 Februari 1957 dan berkantor pusat di Jakarta, Indonesia.
                  Bank ini menawarkan berbagai produk dan layanan perbankan termasuk tabungan, 
                  kredit, kartu kredit, perbankan digital, dan layanan korporasi.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Sektor</p>
                    <p className="text-sm font-medium">Keuangan</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Industri</p>
                    <p className="text-sm font-medium">Perbankan</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Tahun Didirikan</p>
                    <p className="text-sm font-medium">1957</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">IPO Date</p>
                    <p className="text-sm font-medium">31 Mei 2000</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">CEO</p>
                    <p className="text-sm font-medium">Jahja Setiaatmadja</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Karyawan</p>
                    <p className="text-sm font-medium">~24,500</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Website</p>
                    <p className="text-sm font-medium">bca.co.id</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="financials" className="pt-4">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle>Data Keuangan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-10">
                  Data keuangan akan ditampilkan di sini
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analysis" className="pt-4">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle>Analisis Teknikal & Fundamental</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-10">
                  Analisis saham akan ditampilkan di sini
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="news" className="pt-4">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle>Berita Terkait {code}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground py-10">
                  Berita terkait perusahaan akan ditampilkan di sini
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}