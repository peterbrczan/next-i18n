"use client";

import React, { ReactNode } from "react";
import { AbstractIntlMessages } from "next-intl";
import { NextIntlClientProvider } from "next-intl/client";
import { appTheme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import { Header } from "@/app/components/header/header";

type Props = {
  messages: AbstractIntlMessages;
  locale: string;
  children: ReactNode;
};

export default function NextInternationalizationClientProvider({
  messages,
  locale,
  children,
}: Props) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      defaultTranslationValues={{
        strong: (text) => <strong>{text}</strong>,
      }}
    >
      <ThemeProvider theme={appTheme}>
        <Header />
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
