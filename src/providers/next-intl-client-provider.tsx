import { ReactNode } from "react";

import { NextIntlClientProvider as NextIntlProvider, useMessages } from "next-intl";

interface Props {
  children: ReactNode;
  locale: string;
}

export const NextIntlClientProvider = ({ children, locale }: Props): JSX.Element => {
  const messages = useMessages();

  return (
    <NextIntlProvider locale={locale} messages={messages}>
      {children}
    </NextIntlProvider>
  );
};
