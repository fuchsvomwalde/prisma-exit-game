import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prisma Games",
  description: `🔎 Tauche ein in die aufregende Welt von Prisma Games! 🚀 Kombiniere physische und digitale Elemente und erlebe Exit Games wie nie zuvor! 🎮💥 Lasse dich von unseren innovativen Spielen begeistern und entdecke eine völlig neue Art des Spielens. 🌟🔓 Mit Prisma Games wird jeder Raum zu deinem persönlichen Abenteuerspielplatz! 💡🔒 Finde versteckte Hinweise, löse knifflige Rätsel und arbeite im Team, um das ultimative Spielerlebnis zu erreichen. 🕵️‍♀️🔓 Tauche ein in eine fesselnde Geschichte und lasse dich von hochwertigen Materialien und atemberaubenden Grafiken begeistern. 📚🎨 Bereite dich auf Nervenkitzel, Action und jede Menge Spaß vor! 💥🎉 Erlebe die Zukunft des Spielens mit Prisma Games! 🌈🎮 Bist du bereit für das Abenteuer deines Lebens? 🔓💪 Dann schnapp dir deine Freunde und stürzt euch in das Spielerlebnis der Superlative! 🚀💥 Prisma Games - der Kickstart für unvergessliche Gaming-Erlebnisse! 🌟🎉`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
