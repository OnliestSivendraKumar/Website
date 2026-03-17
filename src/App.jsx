import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageWelcome from './pages/PageWelcome';
import PageContact from './pages/PageContact';
import PageCareers from './pages/PageCareers';
import PageBlog from './pages/PageBlog';
import PageBlogDetail from './pages/PageBlogDetail';
import PageReviews from './pages/PageReviews';
import PageFaq from './pages/PageFaq';
import PageMarketplace from './pages/PageMarketplace';
import PageMerchandise from './pages/PageMerchandise';
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
import PageMerchandiseDetail from './pages/PageMerchandiseDetail';
import PageDesigners from './pages/PageDesigners';
import PageDesignerDetail from './pages/PageDesignerDetail';
import PageFibreFoundations from './pages/PageFibreFoundations';
import PageFabricConstruction from './pages/PageFabricConstruction';
import PageColorTheory from './pages/PageColorTheory';
import PageSaree from './pages/PageSaree';
import PageBodyCompatibility from './pages/PageBodyCompatibility';
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
        <Route path="/marketplace" element={<PageMarketplace />} />
        <Route path="/education/fibre-foundations" element={<PageFibreFoundations />} />
        <Route path="/education/fabric-construction" element={<PageFabricConstruction />} />
        <Route path="/education/color-theory" element={<PageColorTheory />} />
        <Route path="/education/saree" element={<PageSaree />} />
        <Route path="/education/body-compatibility" element={<PageBodyCompatibility />} />
        <Route path="/designers" element={<PageDesigners />} />
        <Route path="/designers/:id" element={<PageDesignerDetail />} />
        <Route path="/merchandise" element={<PageMerchandise />} />
        <Route path="/merchandise/:id" element={<PageMerchandiseDetail />} />
        <Route path="/contact" element={<PageContact />} />
        <Route path="/careers" element={<PageCareers />} />
        <Route path="/blog" element={<PageBlog />} />
        <Route path="/blog/:id" element={<PageBlogDetail />} />
        <Route path="/reviews" element={<PageReviews />} />
        <Route path="/faq" element={<PageFaq />} />
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
