import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faX } from "@fortawesome/free-solid-svg-icons";

export interface ISocialMediaProps {
  icon: IconDefinition;
  href: string;
  aria_label: string;
}

export const socialMediaContent: ISocialMediaProps[] = [
  {
    icon: faTwitter,
    href: "test",
    aria_label: "twitter",
  },
  {
    icon: faPinterest,
    href: "test",
    aria_label: "pinterest",
  },
  {
    icon: faFacebook,
    href: "test",
    aria_label: "facebook",
  },
  {
    icon: faInstagram,
    href: "test",
    aria_label: "instagram",
  },

  {
    icon: faYoutube,
    href: "test",
    aria_label: "youtube",
  },
];
