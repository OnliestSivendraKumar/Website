/* Shared OASIS Atelier constants */

/* Intro slide: 4 feature cards — each maps to hero image at-1 … at-4 */
export const INTRO_FEATURES = [
  { id: 'expert', title: 'Live Expert Guidance', description: 'Navigate with a pro.', icon: 'expert', image: '/at-1.png' },
  { id: 'cobrowse', title: 'Secure Co-Browsing', description: 'Share your screen safely.', icon: 'cobrowse', image: '/at-2.png' },
  { id: 'video-support', title: 'Video Support', description: 'Talk to a designer live.', icon: 'video', image: '/at-3.png' },
  { id: 'learn', title: 'Learn Faster', description: 'Master tools quickly.', icon: 'learn', image: '/at-4.png' },
];

/* Core features: hero images at-5 … at-10 (Live Video Call tab removed) */
export const ATELIER_FEATURES = [
  { id: 'chat', title: 'In-Meeting Chat', description: 'Share files and notes in real-time.', icon: 'chat', image: '/at-5.png' },
  { id: 'screenshare', title: 'Liveshare', description: 'Share your design studio canvas.', icon: 'screenshare', image: '/at-6.png' },
  { id: 'whiteboard', title: 'Whiteboard', description: 'Sketch and annotate together.', icon: 'pen', image: '/at-7.png' },
];

export function FeatureIcon({ name }) {
  const c = { width: 20, height: 20, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'video') return <svg {...c} viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>;
  if (name === 'share') return <svg {...c} viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>;
  if (name === 'screenshare') return <svg {...c} viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M7 11l5-3 5 3"/></svg>;
  /* Secure Co-Browsing: monitor + lock (distinct from Liveshare’s screenshare) */
  if (name === 'cobrowse') return <svg {...c} viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><rect x="15" y="8" width="5" height="4" rx="1" ry="1"/><path d="M16.5 8V7a1.5 1.5 0 0 1 3 0v1"/></svg>;
  if (name === 'chat') return <svg {...c} viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
  if (name === 'people') return <svg {...c} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
  if (name === 'pen') return <svg {...c} viewBox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>;
  if (name === 'grid') return <svg {...c} viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
  if (name === 'expert') return <svg {...c} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="12" cy="12" r="2"/></svg>;
  if (name === 'learn') return <svg {...c} viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
  return null;
}
