import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Conditions générales d'utilisation de SOBooster. Règles d'utilisation de notre plateforme de boost de réseaux sociaux.",
  alternates: { canonical: '/terms' },
};

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.sobooster.online';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass border-b border-gray-100">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/SOBooster-logo.png" alt="SOBooster" width={1536} height={1024} className="h-20 w-auto -my-4" />
          </Link>
          <a
            href={`${APP_URL}/register`}
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Commencer
          </a>
        </div>
      </nav>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Conditions générales d&apos;utilisation</h1>
        <p className="mt-2 text-sm text-gray-400">Dernière mise à jour : 21 mars 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-600">
          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">1. Objet</h2>
            <p>
              Les présentes conditions générales d&apos;utilisation (ci-après &laquo; CGU &raquo;) régissent l&apos;accès et l&apos;utilisation de la plateforme SOBooster, accessible à l&apos;adresse sobooster.online et app.sobooster.online. En créant un compte ou en utilisant nos services, vous acceptez sans réserve les présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">2. Description des services</h2>
            <p>
              SOBooster est une plateforme de services de marketing sur les réseaux sociaux (SMM). Nous proposons des services d&apos;acquisition de followers, likes, vues, commentaires et autres interactions sur différentes plateformes sociales (Instagram, TikTok, YouTube, Facebook, Twitter/X, etc.).
            </p>
            <p className="mt-2">
              Les services sont fournis par des prestataires tiers spécialisés. SOBooster agit en qualité d&apos;intermédiaire entre vous et ces prestataires.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">3. Inscription et compte</h2>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>L&apos;inscription est gratuite et ouverte à toute personne physique âgée d&apos;au moins 18 ans ou disposant de l&apos;autorisation d&apos;un représentant légal.</li>
              <li>Vous devez fournir des informations exactes et à jour lors de votre inscription.</li>
              <li>Vous êtes responsable de la confidentialité de vos identifiants de connexion. Toute activité réalisée depuis votre compte est présumée effectuée par vous.</li>
              <li>Nous nous réservons le droit de suspendre ou supprimer tout compte en cas de non-respect des présentes CGU.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">4. Portefeuille et paiements</h2>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Pour passer une commande, vous devez au préalable recharger votre portefeuille via Mobile Money (Orange Money ou Moov Money).</li>
              <li>Les recharges sont soumises à des frais de transfert de 2,5 %, clairement affichés avant confirmation.</li>
              <li>Le solde du portefeuille n&apos;est pas remboursable en espèces. Il est utilisable uniquement pour commander des services sur la plateforme.</li>
              <li>En cas d&apos;annulation d&apos;une commande par le prestataire, le montant est automatiquement recrédité sur votre portefeuille.</li>
              <li>Les prix sont affichés en Francs CFA (XOF) et peuvent être modifiés à tout moment sans préavis.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">5. Commandes et livraison</h2>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Chaque commande est traitée après débit de votre portefeuille. Une commande validée ne peut pas être annulée par l&apos;utilisateur.</li>
              <li>Les délais de livraison varient selon le type de service et le volume commandé. Les délais indiqués sont estimatifs et non contractuels.</li>
              <li>Une légère variation du nombre livré par rapport à la quantité commandée est possible et considérée comme normale dans le secteur SMM.</li>
              <li>Certains services incluent une garantie de rechargement automatique (indiqué sur la fiche service). Pour les autres, une baisse naturelle avec le temps est possible.</li>
              <li>Vous devez fournir des liens valides et des comptes publics. Aucun remboursement ne sera effectué si la commande échoue en raison d&apos;un profil privé ou d&apos;un lien invalide.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">6. Obligations de l&apos;utilisateur</h2>
            <p className="mb-2">En utilisant SOBooster, vous vous engagez à :</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Ne pas utiliser la plateforme à des fins illégales ou contraires aux conditions d&apos;utilisation des réseaux sociaux concernés.</li>
              <li>Ne pas tenter de contourner les systèmes de sécurité de la plateforme.</li>
              <li>Ne pas créer plusieurs comptes pour bénéficier abusivement de promotions.</li>
              <li>Ne pas revendre les services achetés sur SOBooster sans autorisation.</li>
              <li>Accepter que l&apos;utilisation de services SMM puisse comporter des risques vis-à-vis des politiques des réseaux sociaux (suspension de compte, suppression de contenu). SOBooster ne saurait être tenu responsable des actions prises par les plateformes sociales.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">7. Limitation de responsabilité</h2>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>SOBooster agit en tant qu&apos;intermédiaire et ne garantit pas les résultats des services fournis par les prestataires tiers.</li>
              <li>Nous ne sommes pas responsables des interruptions de service dues à des causes extérieures (pannes réseau, maintenance des réseaux sociaux, indisponibilité des prestataires de paiement).</li>
              <li>Notre responsabilité est limitée au montant de la commande concernée.</li>
              <li>Nous ne sommes pas responsables des conséquences de l&apos;utilisation de services SMM sur vos comptes de réseaux sociaux.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">8. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments de la plateforme (logo, design, textes, code source) sont la propriété exclusive de SOBooster. Toute reproduction, représentation ou exploitation non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">9. Réclamations et support</h2>
            <p>
              Pour toute réclamation concernant une commande ou votre compte, contactez notre support à l&apos;adresse <a href="mailto:contact@sobooster.online" className="font-medium text-blue-600 hover:text-blue-500">contact@sobooster.online</a>. Nous nous engageons à traiter votre demande dans un délai raisonnable.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">10. Modification des CGU</h2>
            <p>
              Nous nous réservons le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur cette page. La poursuite de l&apos;utilisation de la plateforme après modification vaut acceptation des nouvelles conditions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">11. Droit applicable et litiges</h2>
            <p>
              Les présentes CGU sont régies par le droit en vigueur au Burkina Faso. En cas de litige, les parties s&apos;efforceront de trouver une solution amiable. À défaut, les tribunaux compétents de Ouagadougou seront saisis.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">12. Contact</h2>
            <p>
              Pour toute question relative aux présentes CGU :<br />
              <strong>SOBooster</strong><br />
              Email : <a href="mailto:contact@sobooster.online" className="font-medium text-blue-600 hover:text-blue-500">contact@sobooster.online</a><br />
              Ouagadougou, Burkina Faso
            </p>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
          <Image src="/SOBooster-logo.png" alt="SOBooster" width={1536} height={1024} className="h-16 w-auto -my-2" />
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} SOBooster. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs font-medium text-gray-400 hover:text-gray-600">Confidentialité</Link>
            <Link href="/terms" className="text-xs font-medium text-gray-600">CGU</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
