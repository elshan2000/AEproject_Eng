/** Central place for brand + contact details used across the storefront. */
export const siteConfig = {
  name: "Maison Fleur",
  tagline: "Luxury Flowers & Bouquets",
  description:
    "Hand-tied luxury bouquets and floral arrangements, delivered with care.",
  // Contact details (also used by the WhatsApp button & contact page).
  phone: "+1 (555) 014-2200",
  phoneE164: "15550142200", // digits only, for tel: & wa.me links
  email: "hello@maisonfleur.com",
  address: "128 Garden Lane, Bloomfield, NY 10024",
  hours: "Mon–Sat 9am–6pm",
  nav: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
