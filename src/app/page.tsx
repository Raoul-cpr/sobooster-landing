import Image from 'next/image';
import Link from 'next/link';
import { Shield, Clock, Headphones, TrendingUp, Star, ChevronRight, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.sobooster.online';

const stats = [
  { value: '6 000+', label: 'Services disponibles' },
  { value: '10+', label: 'Plateformes supportées' },
  { value: '24/7', label: 'Support disponible' },
  { value: '~2 min', label: 'Pour commander' },
];

const trustBadges = [
  { icon: Shield, label: 'Paiement sécurisé', desc: 'Orange Money & Moov Money, transactions chiffrées' },
  { icon: Clock, label: 'Livraison rapide', desc: 'Vos commandes démarrent en quelques minutes' },
  { icon: Headphones, label: 'Support réactif', desc: 'Une équipe dédiée pour vous accompagner' },
  { icon: TrendingUp, label: 'Résultats garantis', desc: 'Recharge automatique si le compteur baisse' },
];

const platforms = [
  { name: 'Instagram', icon: Instagram, color: 'text-pink-500' },
  { name: 'YouTube', icon: Youtube, color: 'text-red-500' },
  { name: 'Twitter / X', icon: Twitter, color: 'text-sky-500' },
  { name: 'Facebook', icon: Facebook, color: 'text-blue-600' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Navbar ─────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 glass border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2">
            <Image src="/SOBooster-logo.png" alt="SOBooster" width={1536} height={1024} className="h-20 w-auto -my-4" />
          </a>
          <div className="flex items-center gap-3">
            <a
              href={`${APP_URL}/login`}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Connexion
            </a>
            <a
              href={`${APP_URL}/register`}
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Commencer
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-100 opacity-40 blur-3xl" />
          <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-purple-100 opacity-40 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-100 opacity-30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 text-center lg:pb-32 lg:pt-28">
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            <Star className="h-4 w-4 fill-blue-500 text-blue-500" />
            La plateforme #1 en Afrique de l&apos;Ouest
          </div>

          <h1 className="animate-fade-in-up mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl" style={{ animationDelay: '100ms' }}>
            Boostez vos réseaux sociaux{' '}
            <span className="brand-gradient-text">en quelques clics</span>
          </h1>

          <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl" style={{ animationDelay: '200ms' }}>
            Followers, likes, vues, commentaires — tout ce qu&apos;il faut pour faire décoller votre présence en ligne. Paiement par Mobile Money, résultats immédiats.
          </p>

          <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '300ms' }}>
            <a
              href={`${APP_URL}/register`}
              className="group inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Créer mon compte gratuitement
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={`${APP_URL}/services`}
              className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
            >
              Voir les services
            </a>
          </div>

          <div className="animate-fade-in-up mt-14 flex items-center justify-center gap-8" style={{ animationDelay: '400ms' }}>
            {platforms.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-1.5">
                <p.icon className={`h-7 w-7 ${p.color}`} />
                <span className="text-xs font-medium text-gray-400">{p.name}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500">+8</span>
              <span className="text-xs font-medium text-gray-400">autres</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="stagger-children grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-extrabold text-gray-900 lg:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust badges ───────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-20 lg:py-28">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pourquoi choisir <span className="brand-gradient-text">SOBooster</span> ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Une plateforme conçue pour les créateurs et entrepreneurs africains qui veulent dominer les réseaux sociaux.
          </p>
        </div>
        <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="card-hover rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <badge.icon className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900">{badge.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{badge.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ───────────────────────────────────── */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple comme 1, 2, 3
            </h2>
            <p className="mt-4 text-gray-500">Commandez en moins de 2 minutes</p>
          </div>
          <div className="stagger-children grid gap-8 sm:grid-cols-3">
            {[
              { step: '1', title: 'Choisissez un service', desc: 'Parcourez notre catalogue de +6 000 services pour Instagram, TikTok, YouTube et bien plus.' },
              { step: '2', title: 'Payez par Mobile Money', desc: 'Orange Money ou Moov Money — payez en toute sécurité depuis votre téléphone.' },
              { step: '3', title: 'Recevez vos résultats', desc: 'Votre commande démarre automatiquement. Suivez la progression en temps réel.' },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 brand-gradient opacity-5" />
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Prêt à booster votre visibilité ?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-gray-500">
            Rejoignez des milliers de créateurs qui font confiance à SOBooster pour développer leur audience.
          </p>
          <a
            href={`${APP_URL}/register`}
            className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30"
          >
            Commencer maintenant — c&apos;est gratuit
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/SOBooster-logo.png" alt="SOBooster" width={1536} height={1024} className="h-16 w-auto -my-2" />
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SOBooster. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-gray-600">Confidentialité</Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-gray-600">CGU</Link>
            <a href={`${APP_URL}/login`} className="text-xs text-gray-400 hover:text-gray-600">Connexion</a>
            <a href={`${APP_URL}/register`} className="text-xs text-gray-400 hover:text-gray-600">Inscription</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
