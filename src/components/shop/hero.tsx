import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft floral gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-background to-accent/50"
      />
      <div className="section grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
        <div className="animate-fade-in space-y-6">
          <p className="eyebrow">Fresh · Seasonal · Hand-tied</p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl">
            Flowers that speak
            <br />
            louder than words
          </h1>
          <p className="max-w-md text-lg text-muted-foreground">
            Thoughtfully composed bouquets and arrangements for life&apos;s
            beautiful moments — delivered with care.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/products">Shop the collection</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Our story</Link>
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="ml-auto aspect-[4/5] w-4/5 rounded-3xl bg-gradient-to-b from-primary/20 to-primary/5 shadow-sm" />
          <div className="absolute -bottom-6 left-0 aspect-square w-2/5 rounded-2xl bg-gradient-to-b from-accent to-secondary shadow-sm" />
        </div>
      </div>
    </section>
  );
}
