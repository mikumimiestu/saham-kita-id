import MarketOverview from "@/components/market-overview";
import StockChart from "@/components/stock-chart";
import NewsSection from "@/components/news-section";
import PopularStocks from "@/components/popular-stocks";
import FeaturedContent from "@/components/featured-content";
import MarketSentiment from "@/components/market-sentiment";
import StockScreener from "@/components/stock-screener";

export default function Home() {
  return (
    <div className="container space-y-8 px-4 py-8 md:px-6 md:py-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Selamat Datang di SahamKita
        </h1>
        <p className="text-lg text-muted-foreground">
          Platform informasi saham terlengkap untuk investor Indonesia
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <StockChart />
        <MarketOverview />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold tracking-tight">
          Berita dan Edukasi
        </h2>
        <FeaturedContent />
      </section>

      <section className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-4">
          <NewsSection />
        </div>
        <div className="md:col-span-3">
          <div className="space-y-6">
            <PopularStocks />
            <MarketSentiment />
          </div>
        </div>
      </section>

      <section>
        <StockScreener />
      </section>
    </div>
  );
}