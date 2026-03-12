import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Shipping Policy — Onliest';
const PAGE_DESCRIPTION = 'Details about shipping options, delivery timelines, tracking, and charges for Onliest orders.';

export default function PagePolicyShipping() {
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
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="shipping-policy-heading">
          <div className="rex-page-container rex-page-container--narrow">
            <h1 id="shipping-policy-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Shipping Policy
            </h1>
          </div>
        </header>

        <section className="rex-page-section" aria-label="Shipping policy details">
          <div className="rex-page-container rex-page-container--narrow">
            <p className="rex-page-section-sub">
              Onliest ships to multiple regions globally. This page explains the types of shipping we offer, how
              timelines are calculated, and what happens after your order leaves our studio.
            </p>

            <h2 className="rex-page-section-title">Shipping Options</h2>
            <ul className="rex-page-list">
              <li>Standard delivery for most ready‑to‑ship items.</li>
              <li>Express or priority options where available in your region.</li>
              <li>Special handling for made‑to‑order and couture pieces.</li>
              <li>Occasional promotional free‑shipping windows, displayed at checkout.</li>
            </ul>

            <h2 className="rex-page-section-title">Timelines</h2>
            <p>
              Delivery time depends on two parts: how long it takes to create or prepare your design, and how long
              shipping carriers need to deliver to your address. At checkout we&apos;ll show an estimated window that
              combines both.
            </p>
            <p>
              Please note that customs clearance, local holidays, or carrier disruptions may extend delivery beyond the
              initial estimate. If that happens, we&apos;ll do our best to keep you informed.
            </p>

            <h2 className="rex-page-section-title">Tracking and Notifications</h2>
            <p>
              Once your order ships, we&apos;ll send an e‑mail with a tracking link whenever the carrier provides one.
              You can use this link to follow your parcel from our studio to your door.
            </p>

            <h2 className="rex-page-section-title">Duties, Taxes, and Fees</h2>
            <p>
              Depending on your country, your order may be subject to import duties, taxes, or handling fees. Where
              possible, we aim to show an estimate of these charges at checkout, or indicate clearly if they will be
              collected by the carrier upon delivery.
            </p>
            <p>
              The final, legally binding details will appear in the live policy and during checkout flow for your
              country.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

