import { useEffect } from 'react';

/**
 * Draws slow gold constellation particles on a fixed canvas.
 * @param {React.RefObject} canvasRef   - ref to the <canvas> element
 * @param {React.RefObject} colorRef    - ref to { r, g, b } — mutated live by theme toggle
 */
export default function useConstellationParticles(canvasRef, colorRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx    = canvas.getContext('2d');
    const COUNT  = 44;
    const MAX_D  = 130;
    const MAX_S  = 0.07;
    let W, H, pts = [], animId;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function spawn() {
      pts = [];
      for (let i = 0; i < COUNT; i++) {
        pts.push({
          x:  Math.random() * W,
          y:  Math.random() * H,
          r:  Math.random() * 1.2 + 0.25,
          vx: (Math.random() - 0.5) * MAX_S,
          vy: (Math.random() - 0.5) * MAX_S,
          op: Math.random() * 0.22 + 0.06,
        });
      }
    }

    function tick() {
      const G = colorRef.current;
      ctx.clearRect(0, 0, W, H);

      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_D) {
            const a = (1 - d / MAX_D) * 0.10;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${G.r},${G.g},${G.b},${a})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        }
      }

      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${G.r},${G.g},${G.b},${p.op})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(tick);
    }

    const onResize = () => { resize(); spawn(); };
    window.addEventListener('resize', onResize);
    resize();
    spawn();
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []); // runs once on mount
}
