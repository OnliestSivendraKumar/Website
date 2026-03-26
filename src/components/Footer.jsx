export default function Footer() {
  return (
    <footer className="rex-footer" aria-label="Site footer">
      <div className="rex-footer-top">
        <div className="rex-footer-col rex-footer-col--brand">
          <div className="rex-footer-logo-row">
            <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774519255/logo_vwktj7.svg" alt="Onliest" className="rex-footer-logo" />
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
          <a href="/about">How we work</a>
          <a href="/products/design-studio">How to customise</a>
          <a href="/about">Our Philosophy</a>
          <a href="/reviews">Testimonials</a>
          <a href="/designers">Our Designers</a>
          <a href="/reviews">Reviews and Ratings</a>
          <a href="/about">Who we are</a>
        </div>

        <div className="rex-footer-col">
          <h3>Products</h3>
          <a href="/products/rex">Onliest REX</a>
          <a href="/products/design-studio">Design Studio</a>
          <a href="/products/fitting-room">Fitting Room</a>
          <a href="/products/atelier">Onliest Atelier</a>
          <a href="/products/halo">Onliest HALO</a>
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
          <a href="/contact">Reach out to us</a>
          {/* <a href="/contact">Locate Us</a> */}
          <a href="/contact#faq">FAQ&apos;s</a>
          <a href="/careers">Careers</a>
          <div className="rex-footer-help-wrap">
            <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774518530/bot_ophkke.svg" alt="" className="rex-footer-bot-logo" aria-hidden="true" />
            <span className="rex-footer-help">How can AI REX help you?</span>
          </div>
        </div>
      </div>

      <div className="rex-footer-bottom">
        <div className="rex-footer-social">
          <span>Follow us:</span>
          <a href="https://www.facebook.com/profile.php?id=100088638623747" target="_blank" rel="noopener noreferrer" aria-label="Onliest on Facebook">
            <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774518572/fb_jf12si.svg" alt="" className="rex-footer-social-icon" />
          </a>
          <a href="https://www.instagram.com/onliestworld/" target="_blank" rel="noopener noreferrer" aria-label="Onliest on Instagram">
            <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774518591/insta_xiuuwz.svg" alt="" className="rex-footer-social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/onliestworld/" target="_blank" rel="noopener noreferrer" aria-label="Onliest on LinkedIn">
            <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774518732/in_yryxfz.svg" alt="" className="rex-footer-social-icon" />
          </a>
          <a href="https://in.pinterest.com/onliestworldpmo" target="_blank" rel="noopener noreferrer" aria-label="Onliest on Pinterest">
            <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774518610/pinterest_oulenr.svg" alt="" className="rex-footer-social-icon" />
          </a>
          <a href="https://x.com/OnliestWorld" target="_blank" rel="noopener noreferrer" aria-label="Onliest on Twitter">
            <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774518618/twitter_ugqahr.svg" alt="" className="rex-footer-social-icon" />
          </a>
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

