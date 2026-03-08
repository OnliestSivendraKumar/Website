import { useState, useEffect, useRef } from 'react';
import NavChrome    from './components/NavChrome';
import PanelRex     from './components/PanelRex';
import PanelFitting from './components/PanelFitting';
import PanelAtelier from './components/PanelAtelier';
import PanelHalo    from './components/PanelHalo';
import EmptyPanel   from './components/EmptyPanel';
import useConstellationParticles from './hooks/useConstellationParticles';

export default function App() {
  /* ── Theme ── */
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('rexTheme') || 'dark'; } catch { return 'dark'; }
  });

  /* ── Language ── */
  const [activeLang, setActiveLang] = useState(() => {
    try { return localStorage.getItem('rexLang') || 'en'; } catch { return 'en'; }
  });

  /* ── Active tab ── */
  const [activeTab, setActiveTab] = useState('rex');

  /* ── Particle colour (mutated live — no re-render needed) ── */
  const particleColorRef = useRef({ r: 198, g: 167, b: 94 });

  /* ── Constellation canvas ── */
  const canvasRef = useRef(null);
  useConstellationParticles(canvasRef, particleColorRef);

  /* ── Apply theme to <body> + swap particle colour ── */
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    const col = theme === 'light'
      ? { r: 120, g: 82, b: 28 }
      : { r: 198, g: 167, b: 94 };
    Object.assign(particleColorRef.current, col);
    try { localStorage.setItem('rexTheme', theme); } catch {}
  }, [theme]);

  /* ── Persist language ── */
  useEffect(() => {
    try { localStorage.setItem('rexLang', activeLang); } catch {}
  }, [activeLang]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      {/* Constellation canvas — truly fixed, always behind everything */}
      <canvas
        ref={canvasRef}
        id="rexCanvas"
        className="rex-canvas"
        aria-hidden="true"
      />

      {/* Tab bar */}
      <NavChrome
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme={theme}
        onThemeToggle={toggleTheme}
        activeLang={activeLang}
        onLangChange={setActiveLang}
      />

      {/* All panels */}
      <div className="rex-panels">
        <PanelRex
          isActive={activeTab === 'rex'}
          activeLang={activeLang}
          onTabChange={setActiveTab}
        />

        <EmptyPanel
          id="panel-studio"
          tabId="studio"
          isActive={activeTab === 'studio'}
          title="Design Studio"
          sub={<>Compose your couture.<br />Fabric, silhouette, embroidery — all in one canvas.</>}
        />

        <PanelFitting
          isActive={activeTab === 'fitting'}
          onTabChange={setActiveTab}
        />

        <PanelAtelier isActive={activeTab === 'atelier'} />

        <PanelHalo isActive={activeTab === 'halo'} />
      </div>
    </>
  );
}
