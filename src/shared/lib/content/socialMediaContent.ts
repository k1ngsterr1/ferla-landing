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
}

export const socialMediaContent: ISocialMediaProps[] = [
  {
    icon: faTwitter,
    href: "test",
  },
  {
    icon: faPinterest,
    href: "test",
  },
  {
    icon: faFacebook,
    href: "test",
  },
  {
    icon: faInstagram,
    href: "test",
  },

  {
    icon: faYoutube,
    href: "test",
  },
];
