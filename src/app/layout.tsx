import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sobooster.online';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SOBooster — Boostez vos réseaux sociaux au Burkina Faso',
    template: '%s — SOBooster',
  },
  description:
    'Achetez des followers, likes, vues et commentaires pour Instagram, TikTok, YouTube, Facebook et +10 réseaux sociaux. Paiement par Orange Money et Moov Money. Livraison rapide au Burkina Faso et en Afrique de l\'Ouest.',
  keywords: [
    'acheter followers',
    'acheter likes',
    'acheter vues',
    'boost réseaux sociaux',
    'followers instagram',
    'likes tiktok',
    'vues youtube',
    'followers facebook',
    'booster réseaux sociaux',
    'SMM panel Afrique',
    'SMM Burkina Faso',
    'Mobile Money paiement',
    'Orange Money',
    'Moov Money',
    'SOBooster',
    'réseaux sociaux Burkina',
    'acheter abonnés',
    'boost instagram',
    'boost tiktok',
    'boost youtube',
  ],
  authors: [{ name: 'SOBooster', url: SITE_URL }],
  creator: 'SOBooster',
  publisher: 'SOBooster',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BF',
    url: SITE_URL,
    siteName: 'SOBooster',
    title: 'SOBooster — Boostez vos réseaux sociaux au Burkina Faso',
    description:
      'Followers, likes, vues, commentaires — boostez votre présence sur Instagram, TikTok, YouTube et +10 réseaux. Paiement Mobile Money, résultats immédiats.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SOBooster — Boostez vos réseaux sociaux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOBooster — Boostez vos réseaux sociaux',
    description:
      'Achetez des followers, likes et vues pour Instagram, TikTok, YouTube. Paiement Mobile Money au Burkina Faso.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/SOBooster-logo.png',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'SOBooster',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/SOBooster-logo.png`,
        },
        description:
          'Plateforme de boost de réseaux sociaux #1 en Afrique de l\'Ouest. Followers, likes, vues pour Instagram, TikTok, YouTube et plus.',
        areaServed: {
          '@type': 'Country',
          name: 'Burkina Faso',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'contact@sobooster.online',
          contactType: 'customer service',
          availableLanguage: 'French',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'SOBooster',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'fr-BF',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Comment fonctionne SOBooster ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Choisissez un service (followers, likes, vues), payez par Orange Money ou Moov Money, et recevez vos résultats en quelques minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quels réseaux sociaux sont supportés ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SOBooster supporte Instagram, TikTok, YouTube, Facebook, Twitter/X, Telegram, Spotify, Snapchat, LinkedIn, Discord et bien d\'autres.',
            },
          },
          {
            '@type': 'Question',
            name: 'Comment payer sur SOBooster ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vous pouvez payer par Orange Money ou Moov Money. Rechargez votre portefeuille SOBooster et commandez instantanément.',
            },
          },
          {
            '@type': 'Question',
            name: 'Est-ce que SOBooster est disponible au Burkina Faso ?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Oui, SOBooster est conçu pour le Burkina Faso et l\'Afrique de l\'Ouest avec paiement en FCFA via Mobile Money.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
