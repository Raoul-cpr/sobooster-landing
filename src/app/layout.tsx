import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'SOBooster — Boostez vos réseaux sociaux',
  description: 'Followers, likes, vues, commentaires — boostez votre présence sur les réseaux sociaux. Paiement par Mobile Money, résultats immédiats.',
  icons: {
    apple: '/SOBooster-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
