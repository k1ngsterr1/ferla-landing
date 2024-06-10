export interface INavLink {
  label: string;
  href: string;
  onMouseEnter?: () => void;
}

export const navLinks: INavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Perfect For", href: "#perfect" },
  { label: "Business", href: "#business" },
  { label: "Bikes", href: "#bikes" },
  { label: "Partners", href: "#partners" },
  { label: "Reviews", href: "#reviews" },
  { label: "Markets", href: "#markets" },
];

export const navLinksMob: INavLink[] = [
  { label: "Home", href: "#home-mob" },
  { label: "Perfect For", href: "#perfect-mob" },
  { label: "Business", href: "#business-mob" },
  { label: "Bikes", href: "#bikes-mob" },
  { label: "Partners", href: "#partners-mob" },
  { label: "Reviews", href: "#reviews-mob" },
  { label: "Markets", href: "#markets-mob" },
];
