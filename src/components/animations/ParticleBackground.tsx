import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDesktop = window.innerWidth >= 1024;
    // 60fps on desktop (~16ms), throttled logic kept for safety
    const frameBudget = 16;
    // Max particles: 100 on desktop, 0 on mobile/tablet
    const maxParticles = isDesktop ? 120 : 0;
    // Connection distance: desktop only
    const connectionDist = isDesktop ? 150 : 0;

    const mouseRef = { x: -1000, y: -1000 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const desktop = window.innerWidth >= 1024;
      const max = desktop ? 120 : 0;
      const particles: Particle[] = [];
      for (let i = 0; i < max; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      particlesRef.current = particles;
    };

    const drawParticles = (timestamp: number) => {
      animationRef.current = requestAnimationFrame(drawParticles);

      // Throttle frame rate
      if (timestamp - lastFrameTimeRef.current < frameBudget) return;
      lastFrameTimeRef.current = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      particles.forEach((p, index) => {
        // Basic movement
        p.x += p.speedX;
        p.y += p.speedY;

        // Mouse avoidance (Desktop only)
        if (isDesktop) {
          const dx = mouseRef.x - p.x;
          const dy = mouseRef.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            p.x -= dx * 0.03;
            p.y -= dy * 0.03;
          }
        }

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(24, 95%, 53%, ${p.opacity})`;
        ctx.fill();

        // Connection lines — desktop only
        if (connectionDist > 0) {
          for (let j = index + 1; j < particles.length; j++) {
            const other = particles[j];
            const dx = p.x - other.x;
            const dy = p.y - other.y;
            // Fast distance pre-check before sqrt
            if (Math.abs(dx) > connectionDist || Math.abs(dy) > connectionDist) continue;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < connectionDist) {
              ctx.beginPath();
              ctx.strokeStyle = `hsla(24, 95%, 53%, ${0.08 * (1 - dist / connectionDist)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        }
      });
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.x = e.clientX;
      mouseRef.y = e.clientY;
    };

    resizeCanvas();
    createParticles();
    animationRef.current = requestAnimationFrame(drawParticles);

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5, willChange: "auto" }}
    />
  );
};

export default ParticleBackground;
