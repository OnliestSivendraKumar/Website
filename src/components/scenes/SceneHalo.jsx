/* Onliest HALO — Center hero + concentric halo arcs, chat bubbles pop in one by one */
import { useState, useEffect, useRef } from 'react';

const HALO_GREETING = 'Hi, How may I help you today?';

const CHAT_MESSAGES = [
  { id: 'a1', type: 'agent', text: 'Hi Debra! You can return your purchase within 7 days.' },
  { id: 'u1', type: 'user', text: 'How much time do I have for my order return?' },
  { id: 'a2', type: 'agent', text: 'From the day you receive it, you have 7 days. Need a different size or style?' },
  { id: 'u2', type: 'user', text: "That's what I needed! Thx" },
  { id: 'u3', type: 'user', text: 'What blouse would go with the ivory saree I bought?' },
  { id: 'a3', type: 'agent', text: 'I’d suggest a soft gold or champagne blouse — want a few options sent to your inbox?' },
];

const QUICK_QUESTIONS = [
  'Return policy',
  'Style suggestions',
  'Order tracking',
  'Size guide',
];

const BUBBLE_DELAY_MS = 1000;
const INITIAL_DELAY_MS = 600;

export default function SceneHalo({ isActive }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const greetingPlayedRef = useRef(false);

  /* Speak greeting when user opens HALO tab */
  useEffect(() => {
    if (!isActive) {
      greetingPlayedRef.current = false;
      return;
    }
    if (greetingPlayedRef.current) return;
    greetingPlayedRef.current = true;
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(HALO_GREETING);
      u.rate = 0.95;
      u.pitch = 1;
      u.volume = 1;
      window.speechSynthesis.speak(u);
    }
  }, [isActive]);

  useEffect(() => {
    if (!isActive) {
      setVisibleCount(0);
      return;
    }
    setVisibleCount(0);
    const timers = CHAT_MESSAGES.map((_, i) =>
      setTimeout(() => setVisibleCount((c) => c + 1), INITIAL_DELAY_MS + i * BUBBLE_DELAY_MS)
    );
    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <section
      className={`halo-scene${isActive ? ' active' : ''}`}
      aria-label="Onliest HALO — Your AI saree companion"
    >
      {/* Concentric halo arcs behind content */}
      <div className="halo-arcs" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="halo-arc" style={{ '--arc-i': i }} />
        ))}
      </div>

      {/* Left side — accent + tagline */}
      <div className="halo-side halo-side--left" aria-hidden="true">
        <div className="halo-side-line" />
        <p className="halo-side-tagline">Ask anything.</p>
        <span className="halo-side-dot" />
      </div>

      {/* Right side — accent + tagline */}
      <div className="halo-side halo-side--right" aria-hidden="true">
        <div className="halo-side-line" />
        <p className="halo-side-tagline">Instant answers.</p>
        <span className="halo-side-dot" />
      </div>

      {/* Soft ambient glow on far left/right */}
      <div className="halo-ambient halo-ambient--left" aria-hidden="true" />
      <div className="halo-ambient halo-ambient--right" aria-hidden="true" />

      {/* Center hero image — same frame width as rest of app */}
      <div className="halo-hero-wrap">
        <h2 className="halo-hero-title">Your AI saree companion</h2>
        <div className="halo-hero-frame">
          <img
            src="/halo-hero.png"
            alt=""
            className="halo-hero-img"
          />
        </div>
        <div className="halo-questions-bottom" aria-describedby="halo-desc">
          <p id="halo-desc" className="halo-questions-bottom-desc">
            Ask, discover, and compose through conversation.
          </p>
          <p className="halo-questions-bottom-hint">Try asking:</p>
          <div className="halo-quick-questions" role="list">
            {QUICK_QUESTIONS.map((q) => (
              <span key={q} className="halo-quick-chip" role="listitem">{q}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Chat bubbles — one by one */}
      <div className="halo-chat">
        {CHAT_MESSAGES.map((msg, index) => {
          const isVisible = visibleCount > index;
          const isAgent = msg.type === 'agent';
          return (
            <div
              key={msg.id}
              className={`halo-bubble halo-bubble--${msg.type}${isVisible ? ' visible' : ''}`}
              style={{ '--bubble-i': index }}
              role={isVisible ? 'article' : undefined}
              aria-hidden={!isVisible}
            >
              {isAgent && (
                <span className="halo-bubble-agent-avatar" aria-hidden="true">
                  <img src="/chatbot.png" alt="" className="halo-bubble-agent-img" />
                </span>
              )}
              <span className="halo-bubble-text">{msg.text}</span>
              {!isAgent && (
                <span className="halo-bubble-avatar" aria-hidden="true">
                  <img src="/chatfemale.png" alt="" className="halo-bubble-user-img" />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
