import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Contact Us — Onliest LLC';
const PAGE_DESCRIPTION =
  'Get in touch with Onliest LLC for product questions, demo requests, partnerships, or support. Drop us a line and we will respond shortly.';

export default function PageContact() {
  const [formStatus, setFormStatus] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you — we’ve received your message.');
  };

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story" id="main-content" role="main">
        {/* Hero: centered title + full-width map */}
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="contact-heading">
          <div className="rex-page-container rex-page-container--wide">
            <h1 id="contact-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Contact Us
            </h1>
            <div className="rex-page-hero-media">
              <figure>
                <iframe
                  title="Onliest studio location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.813060649456!2d-73.9942936845933!3d40.71596097933143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27b4f1c2df%3A0x9d8f8b6ac3e3b0f5!2s27%20Division%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="420"
                  style={{ border: 0, width: '100%' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </figure>
            </div>
          </div>
        </header>

        {/* Contact content: info left, form right */}
        <section className="rex-page-section rex-page-section--contact" aria-labelledby="contact-info-heading">
          <div className="rex-page-container rex-page-container--wide">
            <div className="rex-page-contact-grid">
              <div className="rex-page-contact-info">
                <h2 id="contact-info-heading" className="rex-page-section-title">
                  Drop Us a Line
                </h2>
                <p className="rex-page-section-sub">
                  Have a question about Onliest, need help with a demo, or want to talk about partnerships? Reach out
                  and our team will respond as soon as possible.
                </p>

                <div className="rex-page-contact-rows">
                  <div className="rex-page-contact-row">
                    <h3>Email address</h3>
                    <a href="mailto:hello@onliest.com">hello@onliest.com</a>
                  </div>
                  <div className="rex-page-contact-row">
                    <h3>Phone number</h3>
                    <a href="tel:+18002345234">+1 800 234 5234</a>
                  </div>
                  <div className="rex-page-contact-row">
                    <h3>How to find us</h3>
                    <p>
                      27 Division St, New York<br />
                      NY 10002, United States
                    </p>
                  </div>
                  <div className="rex-page-contact-row">
                    <h3>Social</h3>
                    <div className="rex-page-contact-social">
                      <a href="#" aria-label="Visit Onliest on Facebook">
                        <img src="/fb.svg" alt="" className="rex-page-contact-social-icon" />
                      </a>
                      <a href="#" aria-label="Visit Onliest on Instagram">
                        <img src="/insta.svg" alt="" className="rex-page-contact-social-icon" />
                      </a>
                      <a href="#" aria-label="Visit Onliest on LinkedIn">
                        <img src="/in.svg" alt="" className="rex-page-contact-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rex-page-contact-form-card">
                <h2 className="rex-page-section-title">Send a Message</h2>
                <form className="rex-page-contact-form" onSubmit={handleSubmit}>
                  <div className="rex-page-contact-row-inline">
                    <label>
                      <span>Name*</span>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your full name"
                      />
                    </label>
                    <label>
                      <span>E‑mail*</span>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email address"
                      />
                    </label>
                  </div>
                  <label>
                    <span>Message*</span>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Tell us what you’d like to discuss"
                    />
                  </label>
                  <button type="submit" className="rex-btn rex-btn-primary rex-page-contact-submit">
                    Submit request
                  </button>
                  {formStatus && <p className="rex-page-contact-status" aria-live="polite">{formStatus}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

