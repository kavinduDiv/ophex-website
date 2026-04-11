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

    const isMobile = window.innerWidth < 768;
    // 30fps on mobile (~33ms), 60fps on desktop (~16ms)
    const frameBudget = isMobile ? 33 : 16;
    // Max particles: 12 on mobile, 40 on desktop
    const maxParticles = isMobile ? 12 : 40;
    // Connection distance: skip entirely on mobile
    const connectionDist = isMobile ? 0 : 130;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const mobile = window.innerWidth < 768;
      const max = mobile ? 12 : Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / 18000),
        40
      );
      const particles: Particle[] = [];
      for (let i = 0; i < max; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.4 + 0.15,
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
        p.x += p.speedX;
        p.y += p.speedY;
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

    resizeCanvas();
    createParticles();
    animationRef.current = requestAnimationFrame(drawParticles);

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
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
