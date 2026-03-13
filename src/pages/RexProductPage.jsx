import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import NavChrome from '../components/NavChrome';
import PanelRex from '../components/PanelRex';
import PanelStudio from '../components/PanelStudio';
import PanelFitting from '../components/PanelFitting';
import PanelAtelier from '../components/PanelAtelier';
import PanelHalo from '../components/PanelHalo';
import Footer from '../components/Footer';

export default function RexProductPage({ initialTab = 'rex', activeLang, showTabs = false }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    if (showTabs) {
      setActiveTab(tab);
      return;
    }
    const routeMap = {
      rex: '/products/rex',
      studio: '/products/design-studio',
      fitting: '/products/fitting-room',
      atelier: '/products/atelier',
      halo: '/products/halo',
    };
    const path = routeMap[tab];
    if (path) navigate(path);
  };

  const currentTab = showTabs ? activeTab : initialTab;

  let panelContent = null;
  if (currentTab === 'rex') {
    panelContent = <PanelRex isActive activeLang={activeLang} onTabChange={handleTabChange} />;
  } else if (currentTab === 'studio') {
    panelContent = <PanelStudio isActive />;
  } else if (currentTab === 'fitting') {
    panelContent = <PanelFitting isActive onTabChange={handleTabChange} />;
  } else if (currentTab === 'atelier') {
    panelContent = <PanelAtelier isActive />;
  } else if (currentTab === 'halo') {
    panelContent = <PanelHalo isActive />;
  }

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story" role="main">
        <section className="rex-tabs-section rex-tabs-section--product" aria-label="Onliest experiences">
          {showTabs && (
            <div className="rex-chrome-wrap">
              <NavChrome activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
          )}
          <div className="rex-panels">
            {showTabs ? (
              <>
                <PanelRex isActive={activeTab === 'rex'} activeLang={activeLang} onTabChange={handleTabChange} />
                <PanelStudio isActive={activeTab === 'studio'} />
                <PanelFitting isActive={activeTab === 'fitting'} onTabChange={handleTabChange} />
                <PanelAtelier isActive={activeTab === 'atelier'} />
                <PanelHalo isActive={activeTab === 'halo'} />
              </>
            ) : (
              panelContent
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

