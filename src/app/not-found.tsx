import Link from "next/link";

// Global fallback 404 (used for routes outside the storefront layout).
export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: 0 }}>404 — Page not found</h1>
        <p style={{ color: "#666" }}>This page could not be found.</p>
        <Link href="/" style={{ color: "#b03a5b" }}>
          Return home
        </Link>
      </body>
    </html>
  );
}
