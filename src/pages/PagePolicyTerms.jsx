import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Terms and Conditions — Onliest';
const PAGE_DESCRIPTION = 'Review the terms and conditions that govern use of the Onliest website and services.';

export default function PagePolicyTerms() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) metaDesc.setAttribute('content', PAGE_DESCRIPTION);
    return () => {
      document.title = prevTitle;
      const d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute('content', prevDesc);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="rex-page-inner rex-page-inner--story rex-page-inner--policy" id="main-content" role="main">
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="terms-heading">
          <div className="rex-page-container rex-page-container--narrow">
            <h1 id="terms-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Terms and Conditions
            </h1>
          </div>
        </header>

        <section className="rex-page-section" aria-label="Terms and conditions">
          <div className="rex-page-container rex-page-container--narrow">
            <p className="rex-page-section-sub">
              These Terms and Conditions set the framework for how you can use the Onliest website and services. The
              final, legally binding version will be shared when the product officially launches.
            </p>

            <h2 className="rex-page-section-title">Use of the Website</h2>
            <ul className="rex-page-list">
              <li>You agree to use the site only for lawful purposes.</li>
              <li>You are responsible for keeping your account details secure.</li>
              <li>
                Content, pricing, and availability on the site may change from time to time as we refine the experience.
              </li>
            </ul>

            <h2 className="rex-page-section-title">Orders and Payments</h2>
            <ul className="rex-page-list">
              <li>Placing an order is an offer to purchase a product under these terms.</li>
              <li>
                We reserve the right to accept, reject, or cancel an order, for example in cases of suspected fraud or
                incorrect pricing.
              </li>
              <li>
                Full details on pricing, taxes, and payment methods will appear clearly during checkout in the live
                experience.
              </li>
            </ul>

            <h2 className="rex-page-section-title">Liability and Disclaimers</h2>
            <p>
              The eventual production terms will specify how liability is limited in relation to site availability,
              third‑party services, and products you purchase. At a high level, the site is provided &quot;as is&quot;
              while we continue to improve and refine it.
            </p>

            <h2 className="rex-page-section-title">Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. When that happens, we&apos;ll post the new version on this
              page and, where appropriate, highlight key changes or ask you to re‑accept them before continuing to use
              Onliest.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

