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
              {bullets.map((item) => (
                <li key={item.label} className="rex-section-callout-item">
                  <div className="rex-section-callout-item-icon" aria-hidden="true" />
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

