import { fallbackLocale, locales } from "@/i18n/settings";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prisma Games",
  description: `🔎 Tauche ein in die aufregende Welt von Prisma Games! 🚀 Kombiniere physische und digitale Elemente und erlebe Exit Games wie nie zuvor! 🎮💥 Lasse dich von unseren innovativen Spielen begeistern und entdecke eine völlig neue Art des Spielens. 🌟🔓 Mit Prisma Games wird jeder Raum zu deinem persönlichen Abenteuerspielplatz! 💡🔒 Finde versteckte Hinweise, löse knifflige Rätsel und arbeite im Team, um das ultimative Spielerlebnis zu erreichen. 🕵️‍♀️🔓 Tauche ein in eine fesselnde Geschichte und lasse dich von hochwertigen Materialien und atemberaubenden Grafiken begeistern. 📚🎨 Bereite dich auf Nervenkitzel, Action und jede Menge Spaß vor! 💥🎉 Erlebe die Zukunft des Spielens mit Prisma Games! 🌈🎮 Bist du bereit für das Abenteuer deines Lebens? 🔓💪 Dann schnapp dir deine Freunde und stürzt euch in das Spielerlebnis der Superlative! 🚀💥 Prisma Games - der Kickstart für unvergessliche Gaming-Erlebnisse! 🌟🎉`,
};

function getLocaleFromHeaderUrl(header_url: string) {
  try {
    // get first path segment from header_url
    const firstPathSegment = new URL(header_url).pathname.split("/").at(1);
    // check if firstPathSegment is a valid locale
    if (firstPathSegment && locales.includes(firstPathSegment)) {
      return firstPathSegment;
    }
  } catch {
    return fallbackLocale;
  }
  return fallbackLocale;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  const locale = getLocaleFromHeaderUrl(header_url);

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.className} overflow-hidden`}>{children}</body>
    </html>
  );
}
