import { useEffect } from 'react';

/**
 * Draws tech-constellation particles inside the blouse card canvas.
 * Self-sizes by reading offsetWidth/offsetHeight each frame.
 * @param {React.RefObject} canvasRef - ref to the card <canvas>
 */
export default function useCardParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx    = canvas.getContext('2d');
    const G      = { r: 198, g: 167, b: 94 };
    const COUNT  = 32;
    const MAX_D  = 100;
    const MAX_S  = 0.18;
    let W = 0, H = 0, pts = [], animId;

    function spawn(w, h) {
      pts = [];
      for (let i = 0; i < COUNT; i++) {
        pts.push({
          x:  Math.random() * w,
          y:  Math.random() * h,
          r:  Math.random() * 1.6 + 0.6,
          vx: (Math.random() - 0.5) * MAX_S,
          vy: (Math.random() - 0.5) * MAX_S,
          op: Math.random() * 0.50 + 0.25,
        });
      }
    }

    function tick() {
      animId = requestAnimationFrame(tick);

      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      if (cw < 4 || ch < 4) return;

      if (cw !== W || ch !== H) {
        W = canvas.width  = cw;
        H = canvas.height = ch;
        spawn(W, H);
      }

      ctx.clearRect(0, 0, W, H);

      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < MAX_D) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${G.r},${G.g},${G.b},${(1 - d / MAX_D) * 0.28})`;
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
    }

    tick();
    return () => cancelAnimationFrame(animId);
  }, []);
}
