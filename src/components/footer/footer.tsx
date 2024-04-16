import { SocialLinks } from "@/components/social-links/social-links";

export const Footer = (): JSX.Element => {
  return (
    <footer className="content-container py-12 tracking-wide">
      <SocialLinks />

      <span className="block text-dark text-xs text-center">Copyright ©2024 All rights reserved</span>
    </footer>
  );
};
