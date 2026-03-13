import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageWelcome from './pages/PageWelcome';
import PageContact from './pages/PageContact';
import PageBlog from './pages/PageBlog';
import PagePolicyReturn from './pages/PagePolicyReturn';
import PagePolicyShipping from './pages/PagePolicyShipping';
import PagePolicyLegal from './pages/PagePolicyLegal';
import PagePolicyTerms from './pages/PagePolicyTerms';
import PagePolicySecurityPrivacy from './pages/PagePolicySecurityPrivacy';
import PagePolicyInsurance from './pages/PagePolicyInsurance';
import PageProductRex from './pages/PageProductRex';
import PageProductStudio from './pages/PageProductStudio';
import PageProductFitting from './pages/PageProductFitting';
import PageProductAtelier from './pages/PageProductAtelier';
import PageProductHalo from './pages/PageProductHalo';
import useConstellationParticles from './hooks/useConstellationParticles';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('rexTheme') || 'dark'; } catch { return 'dark'; }
  });

  const [activeLang, setActiveLang] = useState(() => {
    try { return localStorage.getItem('rexLang') || 'en'; } catch { return 'en'; }
  });

  const particleColorRef = useRef({ r: 198, g: 167, b: 94 });
  const canvasRef = useRef(null);
  useConstellationParticles(canvasRef, particleColorRef);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    const col = theme === 'light'
      ? { r: 120, g: 82, b: 28 }
      : { r: 198, g: 167, b: 94 };
    Object.assign(particleColorRef.current, col);
    try { localStorage.setItem('rexTheme', theme); } catch {}
  }, [theme]);

  useEffect(() => {
    try { localStorage.setItem('rexLang', activeLang); } catch {}
  }, [activeLang]);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="rexCanvas"
        className="rex-canvas"
        aria-hidden="true"
      />

      <Routes>
        <Route path="/" element={<HomePage activeLang={activeLang} />} />
        <Route path="/about" element={<PageWelcome />} />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/blog" element={<PageBlog />} />
        <Route path="/policies/return" element={<PagePolicyReturn />} />
        <Route path="/policies/shipping" element={<PagePolicyShipping />} />
        <Route path="/policies/legal" element={<PagePolicyLegal />} />
        <Route path="/policies/terms" element={<PagePolicyTerms />} />
        <Route path="/policies/security-privacy" element={<PagePolicySecurityPrivacy />} />
        <Route path="/policies/insurance" element={<PagePolicyInsurance />} />
        <Route path="/products/rex" element={<PageProductRex activeLang={activeLang} />} />
        <Route path="/products/design-studio" element={<PageProductStudio activeLang={activeLang} />} />
        <Route path="/products/fitting-room" element={<PageProductFitting activeLang={activeLang} />} />
        <Route path="/products/atelier" element={<PageProductAtelier activeLang={activeLang} />} />
        <Route path="/products/halo" element={<PageProductHalo activeLang={activeLang} />} />
      </Routes>
    </>
  );
}
