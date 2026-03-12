import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Security and Privacy — Onliest';
const PAGE_DESCRIPTION = 'Understand how Onliest protects your data and respects your privacy across our experiences.';

export default function PagePolicySecurityPrivacy() {
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
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="security-privacy-heading">
          <div className="rex-page-container rex-page-container--narrow">
            <h1 id="security-privacy-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Security and Privacy
            </h1>
          </div>
        </header>

        <section className="rex-page-section" aria-label="Security and privacy details">
          <div className="rex-page-container rex-page-container--narrow">
            <p className="rex-page-section-sub">
              Your data and your designs are important. This page outlines how we plan to protect your information and
              respect your privacy across the Onliest experience.
            </p>

            <h2 className="rex-page-section-title">What We May Collect</h2>
            <ul className="rex-page-list">
              <li>Basic contact details such as your name, e‑mail address, and phone number.</li>
              <li>Shipping and billing addresses needed to fulfil your orders.</li>
              <li>Design choices, style preferences, and fitting information you share with us.</li>
              <li>Technical data such as device type, browser, and approximate location for analytics.</li>
            </ul>

            <h2 className="rex-page-section-title">How We Use Your Information</h2>
            <ul className="rex-page-list">
              <li>To process orders, arrange delivery, and provide customer support.</li>
              <li>To personalise recommendations and future designs.</li>
              <li>To maintain and improve the performance and security of our website.</li>
              <li>To send service‑related messages such as order updates and critical notices.</li>
            </ul>

            <h2 className="rex-page-section-title">Security Practices</h2>
            <p>
              We treat your personal data and design files with care. Access to customer information is restricted to
              authorised team members, and we use industry‑standard safeguards such as encrypted connections where
              appropriate to protect data in transit.
            </p>

            <h2 className="rex-page-section-title">Your Choices</h2>
            <p>
              In the final product, you&apos;ll be able to manage certain preferences directly from your account, such
              as marketing communications or saved measurements. You can also contact us if you have questions about the
              information we hold about you.
            </p>

            <h2 className="rex-page-section-title">Future Privacy Policy</h2>
            <p>
              When the production policy is finalised, this page will link to the full Privacy Policy and describe in
              detail what we collect, how we use it, how long we keep it, and the rights available to you under
              applicable law.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

