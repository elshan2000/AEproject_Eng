import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="section grid items-center gap-12 py-20 lg:grid-cols-2">
      <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
        <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-secondary to-accent/60" />
        <div className="mt-8 aspect-[3/4] rounded-2xl bg-gradient-to-b from-accent/60 to-primary/15" />
      </div>
      <div className="order-1 space-y-5 lg:order-2">
        <p className="eyebrow">Our story</p>
        <h2 className="text-3xl font-semibold sm:text-4xl">
          A small studio with a love for flowers
        </h2>
        <p className="text-muted-foreground">
          Maison Fleur began with a simple belief: that flowers, thoughtfully
          arranged, can turn an ordinary day into something memorable. Every
          bouquet is composed by hand using the freshest seasonal stems.
        </p>
        <p className="text-muted-foreground">
          From intimate gestures to grand celebrations, we pour care into every
          petal so you can share something truly beautiful.
        </p>
        <Button asChild variant="outline">
          <Link href="/about">Read more about us</Link>
        </Button>
      </div>
    </section>
  );
}
