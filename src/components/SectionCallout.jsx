function BulletIcon({ index }) {
  if (index === 0) {
    // Video / live session
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h8A2.5 2.5 0 0 1 16 7.5v9A2.5 2.5 0 0 1 13.5 19h-8A2.5 2.5 0 0 1 3 16.5v-9Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 10l5-3v10l-5-3v-4Z" fill="currentColor" opacity="0.9" />
      </svg>
    );
  }

  if (index === 1) {
    // Verified / expert
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4l3-3Z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.2 12.2l2.4 2.4L16.2 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Calendar / scheduling
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3v2M17 3v2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4.5 8.5h15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.9" />
      <path d="M6 5h12a2.5 2.5 0 0 1 2.5 2.5v11A2.5 2.5 0 0 1 18 21H6a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 6 5Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 12h3M8 15h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function SectionCallout({
  id,
  eyebrow,
  title,
  subtitle,
  bullets = [],
  cta,
  stats = [],
  image,
}) {
  return (
    <section id={id} className="rex-section-callout">
      <div className="rex-section-callout-inner">
        <div className="rex-section-callout-copy">
          {eyebrow && <p className="rex-section-callout-eyebrow">{eyebrow}</p>}
          {title && <h2 className="rex-section-callout-title">{title}</h2>}
          {subtitle && <p className="rex-section-callout-subtitle">{subtitle}</p>}

          {bullets.length > 0 && (
            <ul className="rex-section-callout-list">
              {bullets.map((item, index) => (
                <li key={item.label} className="rex-section-callout-item">
                  <div className="rex-section-callout-item-icon" aria-hidden="true">
                    <BulletIcon index={index} />
                  </div>
                  <div className="rex-section-callout-item-text">
                    <span className="rex-section-callout-item-label">{item.label}</span>
                    {item.body && (
                      <span className="rex-section-callout-item-body">{item.body}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}

          {cta && (
            <a
              href={cta.href || '#'}
              className="rex-btn rex-btn-primary rex-section-callout-cta"
            >
              {cta.label}
            </a>
          )}

          {stats.length > 0 && (
            <dl className="rex-section-callout-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="rex-section-callout-stat">
                  <dt className="rex-section-callout-stat-value">{stat.value}</dt>
                  <dd className="rex-section-callout-stat-label">{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {image && (
          <div className="rex-section-callout-media">
            <div className="rex-section-callout-media-frame">
              <img
                src={image.src}
                alt={image.alt || ''}
                loading="lazy"
              />
              {image.overlay && (
                <div className="rex-section-callout-media-overlay">
                  <p className="rex-section-callout-media-eyebrow">{image.overlay.eyebrow}</p>
                  <p className="rex-section-callout-media-title">{image.overlay.title}</p>
                  {image.overlay.body && (
                    <p className="rex-section-callout-media-body">{image.overlay.body}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

