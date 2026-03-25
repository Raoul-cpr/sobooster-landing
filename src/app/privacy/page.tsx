import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité de SOBooster. Découvrez comment nous protégeons vos données personnelles au Burkina Faso.',
  alternates: { canonical: '/privacy' },
};

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.sobooster.online';

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Politique de confidentialité</h1>
        <p className="mt-2 text-sm text-gray-400">Dernière mise à jour : 21 mars 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-gray-600">
          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">1. Introduction</h2>
            <p>
              SOBooster (&laquo; nous &raquo;, &laquo; notre &raquo;, &laquo; la Plateforme &raquo;) est une plateforme de services de marketing sur les réseaux sociaux exploitée depuis le Burkina Faso. Nous nous engageons à protéger la vie privée de nos utilisateurs (&laquo; vous &raquo;). La présente politique décrit les données que nous collectons, comment nous les utilisons et les droits dont vous disposez.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">2. Données collectées</h2>
            <p className="mb-2">Nous collectons les catégories de données suivantes :</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li><strong>Données d&apos;inscription :</strong> nom, prénom, adresse email, mot de passe (stocké sous forme chiffrée).</li>
              <li><strong>Données de paiement :</strong> numéro de téléphone Mobile Money, opérateur (Orange Money / Moov Money). Nous ne stockons jamais votre code secret ou PIN.</li>
              <li><strong>Données de commande :</strong> services commandés, liens de réseaux sociaux fournis, montants, historique de transactions.</li>
              <li><strong>Données techniques :</strong> adresse IP, type de navigateur, système d&apos;exploitation, pages consultées, collectées automatiquement lors de votre navigation.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">3. Utilisation des données</h2>
            <p className="mb-2">Vos données sont utilisées pour :</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Créer et gérer votre compte utilisateur.</li>
              <li>Traiter vos recharges de solde et vos commandes de services.</li>
              <li>Vous envoyer des communications liées à votre compte (codes de vérification, confirmations de commande, notifications de statut).</li>
              <li>Assurer la sécurité de la plateforme et prévenir les fraudes.</li>
              <li>Améliorer nos services et l&apos;expérience utilisateur.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">4. Partage des données</h2>
            <p className="mb-2">Nous ne vendons jamais vos données personnelles. Nous partageons certaines données uniquement avec :</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li><strong>Prestataires de paiement :</strong> Ligdicash, pour le traitement des paiements Mobile Money. Seuls votre numéro de téléphone et le montant de la transaction sont transmis.</li>
              <li><strong>Fournisseurs de services SMM :</strong> les liens de réseaux sociaux que vous fournissez et la quantité commandée sont transmis à nos fournisseurs pour exécuter vos commandes. Aucune donnée personnelle n&apos;est partagée.</li>
              <li><strong>Obligations légales :</strong> nous pouvons divulguer vos données si la loi l&apos;exige ou sur demande d&apos;une autorité compétente.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">5. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données : chiffrement des mots de passe (bcrypt), communications sécurisées (HTTPS), accès restreint aux données en interne. Cependant, aucun système n&apos;est infaillible et nous ne pouvons garantir une sécurité absolue.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">6. Conservation des données</h2>
            <p>
              Vos données de compte sont conservées tant que votre compte est actif. Les données de transaction sont conservées pendant une durée de 5 ans conformément aux obligations comptables et fiscales en vigueur au Burkina Faso. Vous pouvez demander la suppression de votre compte à tout moment en nous contactant.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">7. Vos droits</h2>
            <p className="mb-2">Vous disposez des droits suivants :</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li><strong>Accès :</strong> obtenir une copie des données personnelles que nous détenons sur vous.</li>
              <li><strong>Rectification :</strong> corriger des données inexactes ou incomplètes.</li>
              <li><strong>Suppression :</strong> demander la suppression de votre compte et de vos données personnelles.</li>
              <li><strong>Opposition :</strong> vous opposer à certains traitements de vos données.</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous à l&apos;adresse : <a href="mailto:contact@sobooster.online" className="font-medium text-blue-600 hover:text-blue-500">contact@sobooster.online</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">8. Cookies</h2>
            <p>
              Nous utilisons des cookies techniques strictement nécessaires au fonctionnement de la plateforme (authentification, session). Nous n&apos;utilisons pas de cookies publicitaires ou de tracking tiers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">9. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prennent effet dès leur publication sur cette page. Nous vous informerons des changements importants par email ou via une notification sur la plateforme.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-gray-900">10. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter à :<br />
              <a href="mailto:contact@sobooster.online" className="font-medium text-blue-600 hover:text-blue-500">contact@sobooster.online</a>
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
            <Link href="/privacy" className="text-xs font-medium text-gray-600">Confidentialité</Link>
            <Link href="/terms" className="text-xs font-medium text-gray-400 hover:text-gray-600">CGU</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
