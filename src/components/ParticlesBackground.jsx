import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const particleCount = 40;
    const particles = [];

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * window.innerHeight;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = window.innerHeight + 10;
        this.size = Math.random() * 2 + 1;
        this.speedY = Math.random() * 0.8 + 0.3;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        if (this.y < -10) {
          this.reset();
        }

        if (this.x < -10 || this.x > window.innerWidth + 10) {
          this.x = Math.random() * window.innerWidth;
        }
      }

      draw(context) {
        context.save();
        context.globalAlpha = this.opacity;
        context.fillStyle = '#00d4ff';
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas size
    resizeCanvas();

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation cycle
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Event listeners
    window.addEventListener('resize', resizeCanvas);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <div className="particles" id="particles"><canvas ref={canvasRef} style={{ display: 'block' }} /></div>;
};

export default ParticlesBackground;
