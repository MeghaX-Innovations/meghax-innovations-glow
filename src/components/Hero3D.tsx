
import React, { useEffect, useRef } from 'react';

const Hero3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Enhanced particles configuration
    const particleCount = 150;
    const particles: Particle[] = [];
    const colors = ['#0E76BC', '#29ABE2', '#006838', '#B4D235'];
    
    // Mouse tracking for interactive particles
    let mouseX = width / 2;
    let mouseY = height / 2;
    let mouseRadius = 150;
    
    canvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      originalSize: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.size = Math.random() * 5 + 1;
        this.originalSize = this.size;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        // Basic movement
        this.x += this.vx;
        this.y += this.vy;
        
        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouseRadius && distance > 0) {
          // Repel particles when mouse is close
          const angle = Math.atan2(dy, dx);
          const force = (mouseRadius - distance) / mouseRadius;
          this.vx -= Math.cos(angle) * force * 0.5;
          this.vy -= Math.sin(angle) * force * 0.5;
          
          // Grow particles that are being affected by mouse
          this.size = this.originalSize * (1 + force);
        } else {
          // Return to original size when away from mouse
          this.size = this.originalSize;
        }
        
        // Boundary check
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
        
        // Speed limit
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 2) {
          this.vx = (this.vx / speed) * 2;
          this.vy = (this.vy / speed) * 2;
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Draw lines between particles that are close to each other
    const drawLines = (p1: Particle, p2: Particle) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        context.beginPath();
        context.strokeStyle = p1.color;
        context.globalAlpha = 0.2 * (1 - distance / 100);
        context.lineWidth = 0.5;
        context.moveTo(p1.x, p1.y);
        context.lineTo(p2.x, p2.y);
        context.stroke();
      }
    };
    
    // Create 3D-like floating objects
    const createFloatingObject = (x: number, y: number, size: number, color: string) => {
      context.save();
      context.translate(x, y);
      context.rotate(Date.now() * 0.0005);
      
      // Draw a 3D cube-like shape
      context.beginPath();
      context.globalAlpha = 0.7;
      context.fillStyle = color;
      context.fillRect(-size/2, -size/2, size, size);
      
      // Add a highlight side for 3D effect
      context.beginPath();
      context.fillStyle = 'rgba(255, 255, 255, 0.3)';
      context.moveTo(size/2, -size/2);
      context.lineTo(size/2 + size/4, -size/2 + size/4);
      context.lineTo(size/2 + size/4, size/2 + size/4);
      context.lineTo(size/2, size/2);
      context.closePath();
      context.fill();
      
      // Add another side for 3D effect
      context.beginPath();
      context.fillStyle = 'rgba(0, 0, 0, 0.2)';
      context.moveTo(-size/2, size/2);
      context.lineTo(-size/2 + size/4, size/2 + size/4);
      context.lineTo(size/2 + size/4, size/2 + size/4);
      context.lineTo(size/2, size/2);
      context.closePath();
      context.fill();
      
      context.restore();
    };
    
    // Fixed positions for larger 3D objects
    const objects = [
      { x: width * 0.2, y: height * 0.3, size: 60, color: '#0E76BC' },
      { x: width * 0.8, y: height * 0.7, size: 80, color: '#B4D235' },
      { x: width * 0.7, y: height * 0.2, size: 50, color: '#29ABE2' },
      { x: width * 0.3, y: height * 0.6, size: 70, color: '#006838' }
    ];
    
    // Animation loop
    const animate = () => {
      context.clearRect(0, 0, width, height);
      
      // Draw 3D objects first (behind particles)
      objects.forEach((obj, i) => {
        // Make objects float
        const floatY = Math.sin(Date.now() * 0.001 + i) * 15;
        createFloatingObject(obj.x, obj.y + floatY, obj.size, obj.color);
      });
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw(context);
      });
      
      // Draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (j % 5 === 0) { // Only connect some particles to improve performance
            drawLines(particles[i], particles[j]);
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      
      // Update object positions on resize
      objects[0].x = width * 0.2;
      objects[0].y = height * 0.3;
      objects[1].x = width * 0.8;
      objects[1].y = height * 0.7;
      objects[2].x = width * 0.7;
      objects[2].y = height * 0.2;
      objects[3].x = width * 0.3;
      objects[3].y = height * 0.6;
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default Hero3D;
