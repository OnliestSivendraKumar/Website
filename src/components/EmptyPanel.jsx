export default function EmptyPanel({ id, tabId, isActive, title, sub }) {
  return (
    <div
      className={`rex-panel${isActive ? ' active' : ''}`}
      id={id}
      role="tabpanel"
      aria-labelledby={`tab-${tabId}`}
      aria-hidden={!isActive}
    >
      <div className="rex-empty">
        <span className="rex-empty-mark" aria-hidden="true">&#9671;</span>
        <p className="rex-empty-over">Coming Soon</p>
        <h2 className="rex-empty-h">{title}</h2>
        <p className="rex-empty-sub">{sub}</p>
      </div>
    </div>
  );
}
