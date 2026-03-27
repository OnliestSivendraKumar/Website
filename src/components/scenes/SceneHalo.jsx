/* Onliest HALO — Carousel with 6 category slides (slide 0 = greeting), hero image + message bubbles per slide */
import { useState, useEffect, useRef } from 'react';

const HALO_GREETING = 'Hi, How may I help you today?';

/** Icons for HALO carousel tabs */
function HaloTabIcon({ name }) {
  const c = { width: 16, height: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'play') return <svg {...c} viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>;
  if (name === 'chat') return <svg {...c} viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
  if (name === 'globe') return <svg {...c} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
  if (name === 'package') return <svg {...c} viewBox="0 0 24 24"><path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
  if (name === 'help') return <svg {...c} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
  if (name === 'palette') return <svg {...c} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="9" cy="9" r="1.5"/><circle cx="15" cy="9" r="1.5"/><circle cx="9" cy="15" r="1.5"/><circle cx="15" cy="15" r="1.5"/><path d="M12 7v2m0 6v2M7 12h2m6 0h2"/></svg>;
  return null;
}

const CAROUSEL_SLIDES = [
  {
    id: 'welcome',
    label: 'Welcome',
    tabLabel: 'Get Started',
    icon: 'play',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774517203/chat-0_jsc4zx.png',
    desc: 'Your AI Design Companion — ask anything, get instant answers.',
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
    tabLabel: 'Chat with Us',
    icon: 'chat',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774517237/chat-1_bqmy1d.png',
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
    id: 'multilang',
    label: 'Multi-Language',
    tabLabel: 'Language Support',
    icon: 'globe',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774517321/chat-4_dpowvb.png',
    desc: 'Chat in Telugu, Hindi, English and more — your language, your comfort.',
    messages: [
      { id: 'u1', type: 'user', text: 'Can I change the language?' },
      { id: 'a1', type: 'agent', text: 'Yes, you can switch the chat language anytime.' },
      { id: 'u2', type: 'user', text: 'Do you support Telugu?' },
      { id: 'a2', type: 'agent', text: 'Yes! We support Telugu, Hindi, and English.' },
      { id: 'u3', type: 'user', text: 'Please switch to Telugu.' },
      { id: 'a3', type: 'agent', text: 'Done! I\'ll continue helping you in Telugu.' },
    ],
    chips: ['Telugu', 'Hindi', 'English'],
  },
  {
    id: 'order-status',
    label: 'Order Status',
    tabLabel: 'Track Order',
    icon: 'package',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774517342/chat-5_cizmwk.png',
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
  {
    id: 'conversational',
    label: 'Conversational Help',
    tabLabel: 'Get Support',
    icon: 'help',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774517294/chat-3_hfitgp.png',
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
    id: 'fashion-guidance',
    label: 'Fashion Guidance',
    tabLabel: 'Style Help',
    icon: 'palette',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774517269/chat-2_ujducy.png',
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
      aria-label="Onliest HALO — Your AI Design Companion"
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
        <h2 className="halo-hero-title">Onliest Halo - Your AI Design Companion.</h2>
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
        </div>

        {/* Carousel tabs — full-width row outside narrow container, all 6 fit inline, no scrollbar */}
        <div className="halo-tabs-wrap" role="tablist" aria-label="Category tabs">
          {CAROUSEL_SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={currentSlide === i}
              aria-label={`${s.tabLabel || s.label}`}
              className={`halo-carousel-tab${currentSlide === i ? ' active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            >
              <span className="halo-carousel-tab-icon" aria-hidden="true">
                <HaloTabIcon name={s.icon} />
              </span>
              <span>{s.tabLabel || s.label}</span>
            </button>
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

      {/* Greeting loader — visible while speech plays, fades out after */}
      <div className={`halo-loader${isSpeaking ? ' visible' : ''}`} aria-hidden="true">
        <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517445/loader_r4rlzh.png" alt="" className="halo-loader-img" />
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
                  <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774527087/chatbot_jfiuji.png" alt="" className="halo-bubble-agent-img" />
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
                  <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774527088/chatfemale_gmvjtu.png" alt="" className="halo-bubble-user-img" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
