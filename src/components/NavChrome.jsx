import { useState, useEffect, useRef } from 'react';

const TABS = [
  { id: 'rex',     label: 'Onliest REX'     },
  { id: 'studio',  label: 'Design Studio' },
  { id: 'fitting', label: 'Fitting Room'  },
  { id: 'atelier', label: 'Onliest Atelier' },
  { id: 'halo',    label: 'Onliest HALO'    },
];

const LANGS = [
  { code: 'en', label: 'EN' }, { code: 'hi', label: 'HI' },
  { code: 'te', label: 'TE' }, { code: 'ta', label: 'TA' },
  { code: 'kn', label: 'KN' }, { code: 'ml', label: 'ML' },
  { code: 'mr', label: 'MR' }, { code: 'gu', label: 'GU' },
  { code: 'de', label: 'DE' }, { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
];

export default function NavChrome({
  activeTab, onTabChange,
  theme, onThemeToggle,
  activeLang, onLangChange,
}) {
  const tabRefs        = useRef({});
  const [indStyle, setIndStyle] = useState({ left: 0, width: 0 });
  const [langOpen, setLangOpen] = useState(false);

  /* Update sliding indicator whenever the active tab changes */
  function updateIndicator() {
    const el = tabRefs.current[activeTab];
    if (!el) return;
    const { offsetLeft, offsetWidth } = el;
    const inset = offsetWidth * 0.18;
    setIndStyle({ left: offsetLeft + inset, width: offsetWidth - inset * 2 });
  }

  useEffect(updateIndicator, [activeTab]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeTab]);

  /* Close language menu on outside click */
  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [langOpen]);

  return (
    <nav className="rex-chrome" role="tablist" aria-label="Onliest sections">

      {/* Language selector (left) */}
      <div className="rex-lang-wrap" id="rexLangWrap">
        <button
          className="rex-lang-btn"
          id="rexLangBtn"
          aria-haspopup="listbox"
          aria-expanded={langOpen}
          aria-label="Select language"
          onClick={e => { e.stopPropagation(); setLangOpen(o => !o); }}
        >
          <span id="rexLangCurrent">{activeLang.toUpperCase()}</span>
          <span className="rex-lang-caret" aria-hidden="true">&#8964;</span>
        </button>

        {langOpen && (
          <ul
            className="rex-lang-menu"
            id="rexLangMenu"
            role="listbox"
            aria-label="Languages"
          >
            {LANGS.map(l => (
              <li
                key={l.code}
                role="option"
                data-lang={l.code}
                aria-selected={activeLang === l.code}
                onClick={e => {
                  e.stopPropagation();
                  onLangChange(l.code);
                  setLangOpen(false);
                }}
              >
                {l.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tab buttons */}
      {TABS.map(tab => (
        <button
          key={tab.id}
          ref={el => { tabRefs.current[tab.id] = el; }}
          className={`rex-tab${activeTab === tab.id ? ' active' : ''}`}
          role="tab"
          id={`tab-${tab.id}`}
          aria-selected={activeTab === tab.id}
          aria-controls={`panel-${tab.id}`}
          data-tab={tab.id}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}

      {/* Sliding gold underline indicator */}
      <span
        className="rex-tab-indicator"
        id="rexTabIndicator"
        aria-hidden="true"
        style={{ left: indStyle.left, width: indStyle.width }}
      />

      {/* Light / dark toggle */}
      <button
        className="rex-theme-toggle"
        id="rexThemeToggle"
        aria-label="Toggle light / dark mode"
        aria-pressed={theme === 'light'}
        onClick={onThemeToggle}
      >
        <span className="rex-tt-dark"  aria-hidden="true">&#9790;</span>
        <span className="rex-tt-light" aria-hidden="true">&#9788;</span>
      </button>
    </nav>
  );
}
