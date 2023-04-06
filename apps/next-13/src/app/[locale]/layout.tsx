import { notFound } from "next/navigation";
import NextInternationalizationClientProvider from "@/providers/next-intl-client-provider";

export function generateStaticParams() {
  return [{ locale: "hu" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "hu" | "en" };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body>
        <NextInternationalizationClientProvider
          locale={params.locale}
          messages={messages}
        >
          {children}
        </NextInternationalizationClientProvider>
      </body>
    </html>
  );
}
