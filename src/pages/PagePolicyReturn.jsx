import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Return Policy — Onliest';
const PAGE_DESCRIPTION = 'Learn how returns and exchanges work at Onliest, including eligibility, timelines, and process details.';

export default function PagePolicyReturn() {
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
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="return-policy-heading">
          <div className="rex-page-container rex-page-container--narrow">
            <h1 id="return-policy-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Return Policy
            </h1>
          </div>
        </header>

        <section className="rex-page-section" aria-label="Return policy details">
          <div className="rex-page-container rex-page-container--narrow">
            <p className="rex-page-section-sub">
              We want you to feel confident ordering from Onliest. This overview explains when you can return or
              exchange an item, how to start a request, and what to expect once we receive your parcel.
            </p>

            <h2 className="rex-page-section-title">Eligibility</h2>
            <ul className="rex-page-list">
              <li>Items must be unworn, unwashed, and in their original condition.</li>
              <li>All tags, labels, and accessories need to be attached and included.</li>
              <li>Returns must be requested within a limited window after delivery (final window to be confirmed).</li>
              <li>
                Custom, personalised, or made‑to‑measure pieces may be eligible only for limited returns or alterations.
              </li>
            </ul>

            <h2 className="rex-page-section-title">How to Start a Return</h2>
            <ol className="rex-page-list rex-page-list--numbered">
              <li>Locate your order confirmation e‑mail and note your order ID.</li>
              <li>Contact our support team using the details on the Contact page or in your order e‑mail.</li>
              <li>Tell us which item you&apos;d like to return and the reason.</li>
              <li>
                We&apos;ll share the next steps, including return address, packing instructions, and any labels if
                available in your region.
              </li>
            </ol>

            <h2 className="rex-page-section-title">Refunds and Exchanges</h2>
            <p>
              Once your parcel reaches our studio, we&apos;ll inspect the items and confirm whether they meet the
              eligibility criteria above. Approved returns may be refunded to your original payment method or issued as
              store credit. Where possible, we may also offer size exchanges or adjustments instead of a full return.
            </p>
            <p>
              Exact timelines for inspection and refund processing can vary based on your payment provider and location.
              When the live policy is finalised, this section will include concrete timeframes.
            </p>

            <h2 className="rex-page-section-title">Questions</h2>
            <p>
              If you&apos;re unsure whether your order is eligible for return, please reach out before shipping anything
              back. Our team can guide you through options like alterations, fitting support, or style recommendations.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

