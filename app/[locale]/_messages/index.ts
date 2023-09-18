import { I18nLocaleTextBundle } from "@/i18n";

export default async function messageLoader(
  locale: string
): Promise<I18nLocaleTextBundle> {
  const translationFile = await import(
    `@/app/[locale]/_messages/${locale}.json`
  );

  return translationFile.default;
}
