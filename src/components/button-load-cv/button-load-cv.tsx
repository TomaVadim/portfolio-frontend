import { useTranslations } from "next-intl";

export const ButtonLoadCV = (): JSX.Element => {
  const t = useTranslations("home");

  const linkToCV =
    "https://docs.google.com/document/d/1fsJzoQhPiB85wHIlGind2upGJjSJ6_sa/edit?usp=drive_link&ouid=102423125268701553630&rtpof=true&sd=true";

  return (
    <a
      rel="noopener noreferrer"
      href={linkToCV}
      className="px-5 py-3 w-fit text-white bg-primary hover:bg-primary/90 transition-colors duration-200 rounded-sm"
    >
      {t("button-load-resume")}
    </a>
  );
};
