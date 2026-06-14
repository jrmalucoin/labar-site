import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Labar Informática | Sucesso em Soluções",

  description:
    "Automações para WhatsApp, Inteligência Artificial, N8N, Evolution API, desenvolvimento web e soluções empresariais.",

  keywords: [
    "n8n",
    "whatsapp",
    "chatbot",
    "ia",
    "evolution api",
    "automação",
    "inteligência artificial",
    "rio de janeiro",
  ],

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}