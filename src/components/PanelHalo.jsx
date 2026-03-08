import SceneHalo from './scenes/SceneHalo';

export default function PanelHalo({ isActive }) {
  return (
    <div
      className={`rex-panel rex-panel-halo${isActive ? ' active' : ''}`}
      id="panel-halo"
      role="tabpanel"
      aria-labelledby="tab-halo"
      aria-hidden={!isActive}
    >
      <main className="rex-main halo-main">
        <SceneHalo isActive={isActive} />
      </main>
    </div>
  );
}
