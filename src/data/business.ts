export interface NavItem {
  /** Visible label. */
  label: string;
  /** Destination: `/#id` for a landing page section, or a path for a separate page. */
  href: string;
}

export interface Social {
  /** Platform name, shown as the accessible label. */
  platform: string;
  /** Profile URL. */
  href: string;
}

/** Client facts, written once and read by the nav, hero, contact section, footer and structured data. */
export const BUSINESS = {
  name: "A Business Template",
  tagline: "One line that says what you do and who for.",
  phone: "(555) 555-0100",
  email: "hello@example.com",
  address: {
    street: "123 Main Street",
    city: "Your Town",
    region: "ST",
    postalCode: "00000",
  },
  hours: [
    { days: "Mon–Fri", time: "9am–5pm" },
    { days: "Sat–Sun", time: "Closed" },
  ],
};

/** Social profiles. Remove any the client does not have. */
export const SOCIALS: Social[] = [
  { platform: "Facebook", href: "#" },
  { platform: "Instagram", href: "#" },
  { platform: "Google Business", href: "#" },
];

/** One list for the nav and footer. Section links use `/#id` so they also work from subpages. */
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];
