import { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { filterSearchIndex, getRecentSearches, addRecentSearch } from '../data/searchIndex';

/* ─── Simple dropdown: list of links ────────────────── */
const SIMPLE_DROPDOWNS = {
  about: [
    { label: 'Our Story', href: '/about' },
    { label: 'Technology', href: '/about#features' },
    { label: 'Team', href: '/about#founders-heading' },
    { label: 'Careers', href: '/careers' },
  ],
  merchandise: [
    { label: 'Gift Cards', href: '/merchandise' },
    { label: 'Saree Clips', href: '/merchandise' },
    { label: 'Hair Bands', href: '/merchandise' },
    { label: 'Coffee Mugs', href: '/merchandise' },
    { label: "Women's Caps", href: '/merchandise' },
    { label: "Women's Belts", href: '/merchandise' },
  ],
  social: [
    { label: 'Community', href: '#social-community' },
    { label: 'Events', href: '#social-events' },
    { label: 'Blog', href: '/blog' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Press', href: '#social-press' },
  ],
  products: [
    { label: 'Onliest REX', href: '/products/rex' },
    { label: 'Design Studio', href: '/products/design-studio' },
    { label: 'Fitting Room', href: '/products/fitting-room' },
    { label: 'Onliest Atelier', href: '/products/atelier' },
    { label: 'Onliest HALO', href: '/products/halo' },
  ],
};

/* ─── Mega menu: columns with section title + links ─── */
const MEGA_MENUS = {
  marketplace: {
    columns: [
      {
        title: 'BROWSE',
        links: [
          { label: 'All Designs', href: '/marketplace' },
          { label: 'Trending Now', href: '/marketplace' },
          { label: 'Top Rated', href: '/marketplace' },
          { label: 'New Arrivals', href: '/marketplace' },
        ],
      },
      {
        title: 'COLLECTIONS',
        links: [
          { label: 'Premium Collection', href: '/marketplace' },
          { label: 'Limited Edition', href: '/marketplace' },
          { label: 'Sustainable Fashion', href: '/marketplace' },
        ],
      },
      {
        title: 'DESIGNERS',
        links: [
          { label: 'All Designers', href: '/designers' },
          { label: 'Featured Designers', href: '/marketplace' },
          { label: 'Rising Stars', href: '/marketplace' },
          { label: 'Become a Designer', href: '/marketplace' },
        ],
      },
      {
        title: 'OFFERS',
        links: [
          { label: 'Best Sellers', href: '/marketplace' },
          { label: 'Flash Sales', href: '/marketplace' },
          { label: 'Gift Guide', href: '/marketplace' },
        ],
      },
    ],
    promo: {
      title: 'Exclusive AI Collections',
      subtitle: 'Designer Spotlight',
      image: '/ds-1.png',
      alt: 'Model wearing a premium Onliest saree',
    },
  },
};

const NAV_ITEMS = [
  { id: 'about', label: 'About', type: 'simple' },
  { id: 'marketplace', label: 'Market Place', type: 'mega' },
  { id: 'products', label: 'Products', type: 'simple' },
  { id: 'merchandise', label: 'Merchandise', type: 'simple' },
  { id: 'social', label: 'Social Reach', type: 'simple' },
  { id: 'contact', label: 'Contact Us', type: null },
];

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MagicIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20L17 7l3 3L7 23 4 20Z" />
      <path d="M5 5l1.5 1.5M11 3l.75 2M18 4l-1.25 1.25M8 10l-2 .5" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 7L13.5 15.5 8.5 10.5 2 17" />
      <path d="M16 7h6v6" />
    </svg>
  );
}

const POPULAR_SEARCHES = ['Bridal Sarees', 'Designer Lehengas', 'Festive Wear', 'Indo-Western', 'Party Wear'];

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
    </svg>
  );
}

export default function Header({ hideOnPanels = false }) {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchPos, setSearchPos] = useState({ top: 0, left: 0 });
  const [recentSearches, setRecentSearches] = useState([]);
  const [menuLeft, setMenuLeft] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedId, setMobileExpandedId] = useState(null);
  const navRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchBtnRef = useRef(null);
  const openTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const triggerRefs = useRef({});
  const menuPanelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenId(null);
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setOpenId(null);
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      clearHoverTimers();
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (searchOpen) setRecentSearches(getRecentSearches());
  }, [searchOpen]);

  const searchResults = useMemo(() => filterSearchIndex(searchQuery, 20), [searchQuery]);
  const hasQuery = searchQuery.trim().length > 0;

  useEffect(() => {
    if (!searchOpen) return;
    const btn = searchBtnRef.current;
    const panelW = Math.min(520, window.innerWidth - 32);
    const fallbackTop = 80;
    const fallbackLeft = Math.max(16, (window.innerWidth - panelW) / 2);
    if (!btn || btn.getBoundingClientRect().width === 0) {
      setSearchPos({ top: fallbackTop, left: fallbackLeft });
      return;
    }
    const rect = btn.getBoundingClientRect();
    const desiredLeft = rect.right - panelW;
    const clampedLeft = Math.max(16, Math.min(desiredLeft, window.innerWidth - panelW - 16));
    setSearchPos({ top: rect.bottom + 12, left: clampedLeft });
  }, [searchOpen]);

  useEffect(() => {
    if (!openId) return;
    const navEl = navRef.current;
    const triggerEl = triggerRefs.current[openId];
    if (!navEl || !triggerEl) return;

    const openItem = NAV_ITEMS.find((i) => i.id === openId);
    const navRect = navEl.getBoundingClientRect();
    const triggerRect = triggerEl.getBoundingClientRect();
    // Default: align menu to trigger left (+ small breathing space).
    const baseLeft = Math.max(0, (triggerRect.left - navRect.left) + 10);
    setMenuLeft(baseLeft);

    // Clamp after render so the panel doesn't overflow viewport.
    const raf = requestAnimationFrame(() => {
      const panel = menuPanelRef.current;
      if (!panel) return;
      const panelRect = panel.getBoundingClientRect();

      // Mega menu: center under the trigger (feels more like the reference).
      if (openItem?.type === 'mega') {
        const triggerCenter = triggerRect.left + triggerRect.width / 2;
        const centeredLeft = Math.max(0, (triggerCenter - navRect.left) - (panelRect.width / 2));
        setMenuLeft(centeredLeft);
      }

      // Clamp to viewport (keep a 16px margin).
      const nextRect = panel.getBoundingClientRect();
      const overflowRight = nextRect.right - (window.innerWidth - 16);
      if (overflowRight > 0) {
        setMenuLeft((l) => Math.max(0, l - overflowRight));
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [openId]);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  const handleSearchSubmit = (termOrResult) => {
    const isResult = termOrResult && typeof termOrResult === 'object' && termOrResult.href != null;
    const term = isResult ? termOrResult.label : (termOrResult ?? searchQuery).trim();
    const q = (term || '').trim();
    if (!q && !isResult) {
      setSearchOpen(false);
      return;
    }

    let target;
    if (isResult) {
      target = termOrResult.href;
    } else if (hasQuery && searchResults.length > 0) {
      target = searchResults[0].href;
    } else {
      target = `/marketplace?q=${encodeURIComponent(q)}`;
    }

    addRecentSearch(term || (searchResults[0] && searchResults[0].label));
    setRecentSearches(getRecentSearches());
    setSearchOpen(false);
    setSearchQuery('');
    navigate(target);
  };

  const clearHoverTimers = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleNavItemEnter = (itemId) => {
    clearHoverTimers();
    openTimeoutRef.current = setTimeout(() => setOpenId(itemId), 120);
  };

  const handleNavItemLeave = () => {
    clearHoverTimers();
    closeTimeoutRef.current = setTimeout(() => setOpenId(null), 150);
  };

  return (
    <header
      className={`rex-header${scrolled ? ' rex-header--scrolled' : ''}${hideOnPanels ? ' rex-header--hidden' : ''}`}
      role="banner"
    >
      <div className="rex-header-inner">
        <a href="/" className="rex-header-logo" aria-label="Onliest home">
          <img src="/logo.svg" alt="Onliest" />
        </a>

        <nav ref={navRef} className="rex-header-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rex-header-item"
              onMouseEnter={item.type != null ? () => handleNavItemEnter(item.id) : undefined}
              onMouseLeave={item.type != null ? handleNavItemLeave : undefined}
            >
              {item.type === null ? (
                <a href="/contact" className="rex-header-link">
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  className={`rex-header-link rex-header-trigger${openId === item.id ? ' rex-header-trigger--open' : ''}`}
                  onClick={() => toggle(item.id)}
                  aria-expanded={openId === item.id}
                  aria-haspopup="true"
                    ref={(el) => { if (el) triggerRefs.current[item.id] = el; }}
                >
                  {item.label}
                  <span className="rex-header-chevron" aria-hidden="true">
                    <ChevronDown />
                  </span>
                </button>
              )}
            </div>
          ))}

          {/* All menus start after nav right edge */}
          {openId && (() => {
            const item = NAV_ITEMS.find((i) => i.id === openId);
            if (!item || item.type === null) return null;
            if (item.type === 'simple' && SIMPLE_DROPDOWNS[item.id]) {
              return (
                <div
                  className="rex-header-menu-panel"
                  onMouseEnter={clearHoverTimers}
                  onMouseLeave={handleNavItemLeave}
                  ref={menuPanelRef}
                  style={{ left: `${menuLeft}px` }}
                >
                  <div className="rex-header-dropdown" role="menu">
                    {SIMPLE_DROPDOWNS[item.id].map((link) => (
                      <a key={link.label} href={link.href} className="rex-header-dropdown-link" role="menuitem">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            if (item.type === 'mega' && MEGA_MENUS[item.id]) {
              const data = MEGA_MENUS[item.id];
              return (
                <div
                  className="rex-header-menu-panel rex-header-menu-panel--mega"
                  onMouseEnter={clearHoverTimers}
                  onMouseLeave={handleNavItemLeave}
                  ref={menuPanelRef}
                  style={{ left: `${menuLeft}px` }}
                >
                  <div className="rex-header-megamenu" role="menu">
                    <div className="rex-header-megamenu-grid">
                      {data.columns.map((col) => (
                        <div key={col.title} className="rex-header-megamenu-col">
                          <div className="rex-header-megamenu-title">{col.title}</div>
                          {col.links.map((link) => (
                            <a key={link.label} href={link.href} className="rex-header-megamenu-link" role="menuitem">
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ))}
                      {data.promo && (
                        <div className="rex-header-megamenu-promo">
                          <a href="/marketplace" className="rex-header-megamenu-promo-card">
                            {data.promo.image && (
                              <div className="rex-header-megamenu-promo-media" aria-hidden="true">
                                <img src={data.promo.image} alt={data.promo.alt || ''} />
                              </div>
                            )}
                            <div className="rex-header-megamenu-promo-copy">
                              <span className="rex-header-megamenu-promo-title">{data.promo.title}</span>
                              <span className="rex-header-megamenu-promo-subtitle">{data.promo.subtitle}</span>
                            </div>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })()}
        </nav>

        <div className="rex-header-actions">
          <button
            type="button"
            className="rex-header-hamburger rex-header-icon-btn"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <HamburgerIcon />
          </button>
          <button
            type="button"
            className="rex-header-icon-btn rex-header-search-btn"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            ref={searchBtnRef}
          >
            <SearchIcon />
          </button>
          <button type="button" className="rex-header-icon-btn" aria-label="Profile">
            <ProfileIcon />
          </button>
          <a href="#rex" className="rex-header-cta">
            <MagicIcon />
            <span>Try AI REX</span>
          </a>
        </div>
      </div>

      {/* Mobile menu overlay — portaled to body so it always appears above hero/tabs */}
      {mobileMenuOpen && createPortal(
        <div className="rex-mobile-menu" role="dialog" aria-modal="true" aria-label="Main menu">
          <div
            className="rex-mobile-menu-backdrop"
            onClick={() => { setMobileMenuOpen(false); setMobileExpandedId(null); }}
            aria-hidden="true"
          />
          <div className="rex-mobile-menu-panel">
            <div className="rex-mobile-menu-head">
              <button
                type="button"
                className="rex-mobile-menu-close"
                aria-label="Close menu"
                onClick={() => { setMobileMenuOpen(false); setMobileExpandedId(null); }}
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="rex-mobile-menu-nav" aria-label="Mobile navigation" role="navigation">
              {NAV_ITEMS.map((item) => {
                const hasChildren = item.type === 'simple' && SIMPLE_DROPDOWNS[item.id];
                const hasMega = item.type === 'mega' && MEGA_MENUS[item.id];
                const isExpandable = hasChildren || hasMega;
                const isExpanded = mobileExpandedId === item.id;

                if (item.type === null) {
                  return (
                    <a key={item.id} href="/contact" className="rex-mobile-menu-item" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </a>
                  );
                }

                if (!isExpandable) {
                  return (
                    <a key={item.id} href="#" className="rex-mobile-menu-item" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </a>
                  );
                }

                return (
                  <div key={item.id} className="rex-mobile-menu-accordion">
                    <button
                      type="button"
                      className={`rex-mobile-menu-item rex-mobile-menu-trigger${isExpanded ? ' is-expanded' : ''}`}
                      onClick={() => setMobileExpandedId((id) => (id === item.id ? null : item.id))}
                      aria-expanded={isExpanded}
                    >
                      <span>{item.label}</span>
                      <span className="rex-mobile-menu-accordion-icon" aria-hidden="true">
                        {isExpanded ? <MinusIcon /> : <PlusIcon />}
                      </span>
                    </button>
                    <div className={`rex-mobile-menu-sub${isExpanded ? ' is-open' : ''}`}>
                      {hasChildren &&
                        SIMPLE_DROPDOWNS[item.id].map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            className="rex-mobile-menu-sub-link"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </a>
                        ))}
                      {hasMega &&
                        MEGA_MENUS[item.id].columns.map((col) =>
                          col.links.map((link) => (
                            <a
                              key={`${col.title}-${link.label}`}
                              href={link.href}
                              className="rex-mobile-menu-sub-link"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.label}
                            </a>
                          ))
                        )}
                    </div>
                  </div>
                );
              })}
            </nav>

            <a
              href="#rex"
              className="rex-mobile-menu-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MagicIcon />
              <span>AI Rex</span>
            </a>

            <div className="rex-mobile-menu-help">
              <h3 className="rex-mobile-menu-help-title">Need Help?</h3>
              <p className="rex-mobile-menu-help-address">123 Fashion World, Los Angeles, USA</p>
              <a href="https://maps.google.com/?q=123+Fashion+World+Los+Angeles" className="rex-mobile-menu-help-map" target="_blank" rel="noopener noreferrer">
                Open in Maps
              </a>
              <p className="rex-mobile-menu-help-contact">
                <a href="mailto:info@onliestworld.com">info@onliestworld.com</a>
              </p>
              <p className="rex-mobile-menu-help-contact">
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </p>
            </div>

            <div className="rex-mobile-menu-footer">
              <div className="rex-mobile-menu-select-wrap">
                <span className="rex-mobile-menu-select-label">USD $</span>
                <span className="rex-mobile-menu-select-arrow" aria-hidden="true">▼</span>
              </div>
              <div className="rex-mobile-menu-select-wrap">
                <span className="rex-mobile-menu-select-label">English</span>
                <span className="rex-mobile-menu-select-arrow" aria-hidden="true">▼</span>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Search overlay — portaled so it’s visible on mobile and above everything */}
      {searchOpen && createPortal(
        <div
          className="rex-search-overlay"
          role="dialog"
          aria-label="Search designs and collections"
        >
          <div className="rex-search-backdrop" onClick={() => setSearchOpen(false)} aria-hidden="true" />
          <div className="rex-search-panel" style={{ top: `${searchPos.top}px`, left: `${searchPos.left}px` }}>
            <button
              type="button"
              className="rex-search-close"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
            <form
              role="search"
              className="rex-search-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchSubmit();
              }}
            >
              <div className="rex-search-input-wrap">
                <SearchIcon />
                <input
                  ref={searchInputRef}
                  type="search"
                  className="rex-search-input"
                  placeholder="Search designs, collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search"
                />
              </div>
            </form>
            {hasQuery ? (
              <div className="rex-search-section">
                <div className="rex-search-section-title">
                  <SearchIcon />
                  <span>Results</span>
                </div>
                {searchResults.length > 0 ? (
                  <ul className="rex-search-recent" role="listbox">
                    {searchResults.map((item) => (
                      <li key={`${item.type}-${item.label}-${item.href}`}>
                        <button
                          type="button"
                          className="rex-search-recent-item"
                          onClick={() => handleSearchSubmit(item)}
                          role="option"
                        >
                          <span className="rex-search-result-label">{item.label}</span>
                          <span className="rex-search-result-type">{item.type}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="rex-search-no-results">No matches. Try a different term or search the marketplace.</p>
                )}
                <div className="rex-search-section rex-search-fallback">
                  <button
                    type="button"
                    className="rex-search-chip"
                    onClick={() => {
                      const q = searchQuery.trim();
                      if (q) {
                        addRecentSearch(q);
                        setRecentSearches(getRecentSearches());
                        setSearchOpen(false);
                        setSearchQuery('');
                        navigate(`/marketplace?q=${encodeURIComponent(q)}`);
                      }
                    }}
                  >
                    Search marketplace for “{searchQuery.trim()}”
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="rex-search-section">
                  <div className="rex-search-section-title">
                    <ClockIcon />
                    <span>Recent Searches</span>
                  </div>
                  <ul className="rex-search-recent">
                    {recentSearches.length > 0 ? (
                      recentSearches.map((term) => (
                        <li key={term}>
                          <button type="button" className="rex-search-recent-item" onClick={() => handleSearchSubmit(term)}>
                            {term}
                          </button>
                        </li>
                      ))
                    ) : (
                      <li className="rex-search-recent-empty">No recent searches</li>
                    )}
                  </ul>
                </div>
                <div className="rex-search-section">
                  <div className="rex-search-section-title">
                    <TrendIcon />
                    <span>Popular Searches</span>
                  </div>
                  <div className="rex-search-popular">
                    {POPULAR_SEARCHES.map((term) => (
                      <button key={term} type="button" className="rex-search-chip" onClick={() => handleSearchSubmit(term)}>
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
