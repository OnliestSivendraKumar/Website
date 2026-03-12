import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Legal Disclosures — Onliest';
const PAGE_DESCRIPTION = 'Regulatory and legal disclosures related to Onliest services, trademarks, and compliance.';

export default function PagePolicyLegal() {
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
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="legal-disclosures-heading">
          <div className="rex-page-container rex-page-container--narrow">
            <h1 id="legal-disclosures-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Legal Disclosures
            </h1>
          </div>
        </header>

        <section className="rex-page-section" aria-label="Legal disclosures">
          <div className="rex-page-container rex-page-container--narrow">
            <p className="rex-page-section-sub">
              This page highlights key legal information about Onliest as a brand and digital platform. The final,
              binding legal notices will be included in your official customer agreements and any jurisdiction‑specific
              documents.
            </p>

            <h2 className="rex-page-section-title">Brand and Ownership</h2>
            <ul className="rex-page-list">
              <li>Onliest and associated visual marks are intended to be protected as trademarks.</li>
              <li>
                Designs, imagery, copy, and interface elements on this website are protected by copyright and other
                intellectual‑property laws.
              </li>
              <li>Unauthorised reproduction or commercial use of these assets is not permitted.</li>
            </ul>

            <h2 className="rex-page-section-title">Regulatory Statements</h2>
            <p>
              Depending on how and where Onliest operates, local regulations may require specific disclosures or
              registrations (for example, company registration numbers, VAT IDs, or trade licences). These details will
              appear:
            </p>
            <ul className="rex-page-list">
              <li>In your order confirmation e‑mails and invoices.</li>
              <li>Within the live Terms and Conditions and Privacy Policy.</li>
              <li>On product packaging or documentation where required by law.</li>
            </ul>

            <h2 className="rex-page-section-title">Use of Website Content</h2>
            <p>
              Content on this site is provided for personal, non‑commercial use while you explore the Onliest
              experience. Any broader use, including copying for commercial projects or automated scraping, will require
              express written permission.
            </p>

            <h2 className="rex-page-section-title">Future Updates</h2>
            <p>
              As the product moves from prototype to production, this section will be updated with the final company
              details, registrations, and any other mandatory legal disclosures based on the markets we serve.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

