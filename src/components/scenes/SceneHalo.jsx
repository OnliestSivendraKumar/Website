/* Onliest HALO — Carousel with 6 category slides (slide 0 = greeting), hero image + message bubbles per slide */
import { useState, useEffect, useRef } from 'react';

const HALO_GREETING = 'Hi, How may I help you today?';

const CAROUSEL_SLIDES = [
  {
    id: 'welcome',
    label: 'Welcome',
    image: '/chat-0.png',
    desc: 'Your AI saree companion — ask anything, get instant answers.',
    messages: [
      { id: 'a1', type: 'agent', text: 'Hi! How may I help you today?' },
      { id: 'u1', type: 'user', text: 'I want to explore saree styles.' },
      { id: 'a2', type: 'agent', text: 'Great! I can help you find the perfect saree, blouse design, and styling tips.' },
      { id: 'u2', type: 'user', text: 'That sounds amazing!' },
      { id: 'a3', type: 'agent', text: 'Let\'s get started — tell me the occasion and your favourite colours.' },
      { id: 'u3', type: 'user', text: 'Wedding. I love deep reds and gold.' },
    ],
    chips: ['Saree styles', 'Blouse design', 'Color match'],
  },
  {
    id: 'design-studio',
    label: 'Design Studio',
    image: '/chat-1.png',
    desc: 'Customise neck, sleeves and back styles — design your blouse visually.',
    messages: [
      { id: 'u1', type: 'user', text: 'How can I design my blouse?' },
      { id: 'a1', type: 'agent', text: 'You can start in our Design Studio where you can customize neck, sleeves, and back styles.' },
      { id: 'u2', type: 'user', text: 'Where can I find the design studio?' },
      { id: 'a2', type: 'agent', text: 'Just tap the Design Studio option in the menu and start creating your blouse.' },
      { id: 'u3', type: 'user', text: 'Can I preview my blouse before ordering?' },
      { id: 'a3', type: 'agent', text: 'Yes! You can preview your blouse design and make changes before placing the order.' },
    ],
    chips: ['Customize neck', 'Sleeve styles', 'Preview design'],
  },
  {
    id: 'fashion-guidance',
    label: 'Fashion Guidance',
    image: '/chat-2.png',
    desc: 'Get expert blouse pairings, colour matches and style ideas for any saree.',
    messages: [
      { id: 'u1', type: 'user', text: 'What blouse would go with my ivory saree?' },
      { id: 'a1', type: 'agent', text: 'A soft gold or champagne blouse pairs beautifully with ivory sarees.' },
      { id: 'u2', type: 'user', text: 'That sounds nice. Any other option?' },
      { id: 'a2', type: 'agent', text: 'You could also try a contrast maroon or deep emerald blouse for a bold look.' },
      { id: 'u3', type: 'user', text: 'Can you show some design ideas?' },
      { id: 'a3', type: 'agent', text: 'Sure! I can suggest boat neck, sweetheart neck, or embroidered blouse styles.' },
    ],
    chips: ['Blouse pairing', 'Style ideas', 'Color match'],
  },
  {
    id: 'conversational',
    label: 'Conversational Help',
    image: '/chat-3.png',
    desc: 'Describe your occasion and saree — get personalised recommendations instantly.',
    messages: [
      { id: 'u1', type: 'user', text: 'Hi, I need help choosing a blouse.' },
      { id: 'a1', type: 'agent', text: 'Of course! Tell me about your saree color and occasion.' },
      { id: 'u2', type: 'user', text: "It's a blue saree for a party." },
      { id: 'a2', type: 'agent', text: 'Nice choice! A silver or mirror work blouse would look elegant.' },
      { id: 'u3', type: 'user', text: 'That sounds good.' },
      { id: 'a3', type: 'agent', text: 'Would you like to see some trending blouse designs for party wear?' },
    ],
    chips: ['Occasion help', 'Color advice', 'Trending designs'],
  },
  {
    id: 'multilang',
    label: 'Multi-Language',
    image: '/chat-4.png',
    desc: 'Chat in Telugu, Hindi, English and more — your language, your comfort.',
    messages: [
      { id: 'u1', type: 'user', text: 'Can I change the language?' },
      { id: 'a1', type: 'agent', text: 'Yes, you can switch the chat language anytime.' },
      { id: 'u2', type: 'user', text: 'Do you support Telugu?' },
      { id: 'a2', type: 'agent', text: 'Yes! We support Telugu, Hindi, and English.' },
      { id: 'u3', type: 'user', text: 'Please switch to Telugu.' },
      { id: 'a3', type: 'agent', text: 'Done! I’ll continue helping you in Telugu.' },
    ],
    chips: ['Telugu', 'Hindi', 'English'],
  },
  {
    id: 'order-status',
    label: 'Order Status',
    image: '/chat-5.png',
    desc: 'Track your blouse order in real time — from stitching to delivery at your door.',
    messages: [
      { id: 'u1', type: 'user', text: 'Where is my order?' },
      { id: 'a1', type: 'agent', text: 'Let me check that for you. Could you share your order ID?' },
      { id: 'u2', type: 'user', text: 'My order ID is 45678.' },
      { id: 'a2', type: 'agent', text: 'Thanks! Your blouse is currently in the stitching stage.' },
      { id: 'u3', type: 'user', text: 'When will it be delivered?' },
      { id: 'a3', type: 'agent', text: 'It is expected to be delivered within 3–4 days.' },
    ],
    chips: ['Track order', 'Delivery', 'Order ID'],
  },
];

const BUBBLE_DELAY_MS = 1000;
const INITIAL_DELAY_MS = 600;
const PAUSE_AFTER_BUBBLES_MS = 2500;

export default function SceneHalo({ isActive }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const greetingPlayedRef = useRef(false);

  const slide = CAROUSEL_SLIDES[currentSlide];
  const messages = slide?.messages ?? [];

  /* Speak greeting when user opens HALO tab — show loader until done */
  useEffect(() => {
    if (!isActive) {
      greetingPlayedRef.current = false;
      setIsSpeaking(false);
      return;
    }
    if (greetingPlayedRef.current) return;
    greetingPlayedRef.current = true;
    setIsSpeaking(true);

    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(HALO_GREETING);
      u.rate = 0.95;
      u.pitch = 1.4;
      u.volume = 1;
      u.onend = () => setIsSpeaking(false);
      u.onerror = () => setIsSpeaking(false);
      const setVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        const femaleVoice =
          voices.find(v => /zira|samantha|female|woman|girl/i.test(v.name)) ||
          voices.find(v => v.name.toLowerCase().includes('female')) ||
          voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('f')) ||
          voices.find(v => v.lang.startsWith('en'));
        if (femaleVoice) u.voice = femaleVoice;
        window.speechSynthesis.speak(u);
      };
      const voices = window.speechSynthesis.getVoices();
      if (voices.length) {
        setVoice();
      } else {
        window.speechSynthesis.addEventListener('voiceschanged', setVoice, { once: true });
      }
    } else {
      setIsSpeaking(false);
    }
  }, [isActive]);

  /* Bubbles pop in, then after all done + pause, advance to next slide */
  useEffect(() => {
    if (!isActive || isSpeaking) {
      setVisibleCount(0);
      return;
    }
    setVisibleCount(0);
    const msgs = CAROUSEL_SLIDES[currentSlide]?.messages ?? [];
    const n = msgs.length;

    const bubbleTimers = msgs.map((_, i) =>
      setTimeout(() => setVisibleCount((c) => c + 1), INITIAL_DELAY_MS + i * BUBBLE_DELAY_MS)
    );

    const bubblesDoneMs = INITIAL_DELAY_MS + (n - 1) * BUBBLE_DELAY_MS + PAUSE_AFTER_BUBBLES_MS;
    const advanceTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, bubblesDoneMs);

    return () => {
      bubbleTimers.forEach(clearTimeout);
      clearTimeout(advanceTimer);
    };
  }, [isActive, isSpeaking, currentSlide]);

  return (
    <section
      className={`halo-scene${isActive ? ' active' : ''}`}
      aria-label="Onliest HALO — Your AI saree companion"
    >
      {/* Concentric halo arcs */}
      <div className="halo-arcs" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="halo-arc" style={{ '--arc-i': i }} />
        ))}
      </div>

      {/* Side accents */}
      <div className="halo-side halo-side--left" aria-hidden="true">
        <div className="halo-side-line" />
        <p className="halo-side-tagline">Ask anything.</p>
        <span className="halo-side-dot" />
      </div>
      <div className="halo-side halo-side--right" aria-hidden="true">
        <div className="halo-side-line" />
        <p className="halo-side-tagline">Instant answers.</p>
        <span className="halo-side-dot" />
      </div>

      <div className="halo-ambient halo-ambient--left" aria-hidden="true" />
      <div className="halo-ambient halo-ambient--right" aria-hidden="true" />

      {/* Center hero — image changes with slide */}
      <div className="halo-hero-wrap">
        <h2 className="halo-hero-title">Your AI saree companion</h2>
        <div className="halo-hero-frame">
          <img
            src={slide?.image || '/halo-hero.png'}
            alt=""
            className="halo-hero-img"
            key={currentSlide}
          />
        </div>
        <div className="halo-questions-bottom" aria-describedby="halo-desc">
          <p id="halo-desc" className="halo-questions-bottom-desc">
            {slide?.desc ?? 'Ask, discover, and compose through conversation.'}
          </p>
          <p className="halo-questions-bottom-hint">Try asking:</p>
          <div className="halo-quick-questions" role="list">
            {(slide?.chips ?? ['Return policy', 'Style suggestions', 'Order tracking', 'Size guide']).map((q) => (
              <span key={q} className="halo-quick-chip" role="listitem">{q}</span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="halo-cta-row">
            <button type="button" className="rex-btn rex-btn-primary halo-cta-btn">
              How it works
            </button>
            <button type="button" className="rex-btn rex-btn-primary halo-cta-btn">
              Explore HALO
            </button>
          </div>
        </div>

        {/* Carousel dots — bottom controls */}
        <div className="halo-carousel-dots" role="tablist" aria-label="Category carousel">
          {CAROUSEL_SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={currentSlide === i}
              aria-label={`${s.label} category`}
              className={`halo-carousel-dot${currentSlide === i ? ' active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>
      </div>

      {/* Greeting loader — visible while speech plays, fades out after */}
      <div className={`halo-loader${isSpeaking ? ' visible' : ''}`} aria-hidden="true">
        <img src="/loader.png" alt="" className="halo-loader-img" />
      </div>

      {/* Chat bubbles — split into two aligned columns */}
      <div className="halo-chat" key={currentSlide}>
        {/* Agent column — left */}
        <div className="halo-col halo-col--agent">
          {messages.filter(m => m.type === 'agent').map((msg, idx) => {
            const globalIndex = messages.indexOf(msg);
            const isVisible = visibleCount > globalIndex;
            return (
              <div
                key={`${slide?.id}-${msg.id}`}
                className={`halo-bubble halo-bubble--agent${isVisible ? ' visible' : ''}`}
                style={{ '--bubble-i': globalIndex }}
                role={isVisible ? 'article' : undefined}
                aria-hidden={!isVisible}
              >
                <span className="halo-bubble-agent-avatar" aria-hidden="true">
                  <img src="/chatbot.png" alt="" className="halo-bubble-agent-img" />
                </span>
                <span className="halo-bubble-text">{msg.text}</span>
              </div>
            );
          })}
        </div>
        {/* User column — right */}
        <div className="halo-col halo-col--user">
          {messages.filter(m => m.type === 'user').map((msg, idx) => {
            const globalIndex = messages.indexOf(msg);
            const isVisible = visibleCount > globalIndex;
            return (
              <div
                key={`${slide?.id}-${msg.id}`}
                className={`halo-bubble halo-bubble--user${isVisible ? ' visible' : ''}`}
                style={{ '--bubble-i': globalIndex }}
                role={isVisible ? 'article' : undefined}
                aria-hidden={!isVisible}
              >
                <span className="halo-bubble-text">{msg.text}</span>
                <span className="halo-bubble-avatar" aria-hidden="true">
                  <img src="/chatfemale.png" alt="" className="halo-bubble-user-img" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
