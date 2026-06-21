import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/shop/empty-state";

export default function NotFound() {
  return (
    <div className="section py-24">
      <EmptyState
        title="Page not found"
        description="The page or product you're looking for doesn't exist or may have been moved."
        action={
          <Button asChild>
            <Link href="/products">Browse the collection</Link>
          </Button>
        }
      />
    </div>
  );
}
