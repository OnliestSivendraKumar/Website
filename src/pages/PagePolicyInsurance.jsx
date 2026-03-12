import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Insurance — Onliest';
const PAGE_DESCRIPTION = 'Information about shipment protection, coverage, and insurance options for Onliest orders.';

export default function PagePolicyInsurance() {
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
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="insurance-heading">
          <div className="rex-page-container rex-page-container--narrow">
            <h1 id="insurance-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Insurance
            </h1>
          </div>
        </header>

        <section className="rex-page-section" aria-label="Insurance details">
          <div className="rex-page-container rex-page-container--narrow">
            <p className="rex-page-section-sub">
              To give you added peace of mind, some orders may be covered by shipment insurance or optional protection
              add‑ons. This page explains the intention behind that coverage.
            </p>

            <h2 className="rex-page-section-title">What Shipment Insurance Covers</h2>
            <ul className="rex-page-list">
              <li>Loss of a parcel after it has been handed to the carrier.</li>
              <li>Significant damage in transit that makes the items unusable.</li>
              <li>In some cases, confirmed theft during delivery (subject to investigation).</li>
            </ul>
            <p>
              Exact coverage will depend on the final insurance partner and the country where your order is delivered.
            </p>

            <h2 className="rex-page-section-title">How to File a Claim</h2>
            <ol className="rex-page-list rex-page-list--numbered">
              <li>Contact our support team as soon as you notice an issue with your delivery.</li>
              <li>Share your order ID, tracking number, and clear photos (for damaged items).</li>
              <li>
                We&apos;ll guide you through any additional information needed by the carrier or insurance provider.
              </li>
              <li>We&apos;ll then coordinate next steps, which may include replacement, store credit, or refund.</li>
            </ol>

            <h2 className="rex-page-section-title">Exclusions</h2>
            <p>
              As with most insurance products, there may be exclusions such as normal wear and tear, minor packaging
              imperfections, or delays outside the carrier&apos;s control. The final live policy will describe all
              exclusions in detail.
            </p>

            <h2 className="rex-page-section-title">Final Policy Details</h2>
            <p>
              Before launch, we&apos;ll update this page with the confirmed insurance provider, coverage limits, and any
              fees or opt‑in requirements so you can see exactly how your orders are protected in transit.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

