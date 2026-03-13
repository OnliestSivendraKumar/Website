export default function Footer() {
  return (
    <footer className="rex-footer" aria-label="Site footer">
      <div className="rex-footer-top">
        <div className="rex-footer-col rex-footer-col--brand">
          <div className="rex-footer-logo-row">
            <img src="/logo.svg" alt="Onliest" className="rex-footer-logo" />
            <p className="rex-footer-tagline">
              AI-powered fashion platform blending Indian tradition.
            </p>
          </div>

          <ul className="rex-footer-contact" aria-label="Contact details">
            <li>
              <span className="rex-footer-contact-label">Email</span>
              <a href="mailto:info@onliestworld.com">info@onliestworld.com</a>
            </li>
            <li>
              <span className="rex-footer-contact-label">Phone</span>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </li>
            <li>
              <span className="rex-footer-contact-label">Address</span>
              <span>123 Fashion World, Los Angeles, USA</span>
            </li>
          </ul>
        </div>

        <div className="rex-footer-col">
          <h3>About Us</h3>
          <a href="#">How we work</a>
          <a href="#">How to customise</a>
          <a href="#">Our Philosophy</a>
          <a href="#">Testimonials</a>
          <a href="#">Our Designers</a>
          <a href="#">Reviews and Ratings</a>
          <a href="/about">Who we are</a>
        </div>

        <div className="rex-footer-col">
          <h3>Product</h3>
          <a href="/marketplace">Marketplace</a>
          <a href="#">Design a style</a>
          <a href="#">Customise existing design</a>
          <a href="#">Quality check procedures</a>
          <a href="#">Look and feel yourself</a>
          <a href="#">Trending Style</a>
          <a href="#">Gift Card</a>
        </div>

        <div className="rex-footer-col">
          <h3>Our Policies</h3>
          <a href="/policies/return">Return Policy</a>
          <a href="/policies/shipping">Shipping Policy</a>
          <a href="/policies/legal">Legal Disclosures</a>
          <a href="/policies/terms">Terms and Conditions</a>
          <a href="/policies/security-privacy">Security and Privacy</a>
          <a href="/policies/insurance">Insurance</a>
        </div>

        <div className="rex-footer-col">
          <h3>Contact Us</h3>
          <a href="#">Reach out to us</a>
          <a href="#">Locate Us</a>
          <a href="/faq">FAQ&apos;s</a>
          <a href="/careers">Careers</a>
          <div className="rex-footer-help-wrap">
            <img src="/bot.svg" alt="" className="rex-footer-bot-logo" aria-hidden="true" />
            <span className="rex-footer-help">How can AI REX help you?</span>
          </div>
        </div>
      </div>

      <div className="rex-footer-bottom">
        <div className="rex-footer-social">
          <span>Follow us:</span>
          <button type="button" aria-label="Onliest on Facebook">
            <img src="/fb.svg" alt="" className="rex-footer-social-icon" />
          </button>
          <button type="button" aria-label="Onliest on Instagram">
            <img src="/insta.svg" alt="" className="rex-footer-social-icon" />
          </button>
          <button type="button" aria-label="Onliest on LinkedIn">
            <img src="/in.svg" alt="" className="rex-footer-social-icon" />
          </button>
        </div>

        <div className="rex-footer-copy">
          © 2026 Onliest Design Studio. All rights reserved. · USPTO Registered Trademark
        </div>

        <div className="rex-footer-badges">
          <span className="rex-footer-pill">SSL Secure</span>
          <span className="rex-footer-pill">24/7 Support</span>
          <span className="rex-footer-pill">50+ Countries</span>
        </div>
      </div>
    </footer>
  );
}

