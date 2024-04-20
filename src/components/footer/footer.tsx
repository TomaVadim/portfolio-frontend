import { useTranslations } from "next-intl";

import { SocialLinks } from "@/components/social-links/social-links";

export const Footer = (): JSX.Element => {
  const t = useTranslations("footer");

  return (
    <footer className="content-container py-12 tracking-wide">
      <SocialLinks />

      <span className="block text-dark text-xs text-center">{t("copyright")}</span>
    </footer>
  );
};
