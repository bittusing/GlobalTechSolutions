/**
 * Codexbit Particle Background - Houdini Paint Worklet
 * Creates animated dot fields and cluster shapes
 */

if (typeof registerPaint !== 'undefined') {
    class AgentParticlesPainter {
        static get inputProperties() {
            return ['--particle-seed', '--particle-density', '--particle-speed'];
        }

        static get inputArguments() {
            return [];
        }

        static get contextOptions() {
            return { alpha: true };
        }

        // Seeded random number generator for consistent results
        seededRandom(seed) {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        }

        paint(ctx, size, properties) {
            const seed = parseInt(properties.get('--particle-seed')) || 42;
            const density = parseFloat(properties.get('--particle-density')) || 0.00015;
            const speed = parseFloat(properties.get('--particle-speed')) || 1;

            const width = size.width;
            const height = size.height;

            // Calculate number of particles based on area and density
            const numParticles = Math.floor(width * height * density);
            const numClusters = 3;

            // Draw small particles
            for (let i = 0; i < numParticles; i++) {
                const randSeed = seed + i;
                const x = this.seededRandom(randSeed) * width;
                const y = this.seededRandom(randSeed + 1000) * height;
                const radius = this.seededRandom(randSeed + 2000) * 1.5 + 0.5;
                const opacity = this.seededRandom(randSeed + 3000) * 0.3 + 0.1;

                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(138, 180, 248, ${opacity})`;
                ctx.fill();
            }

            // Draw larger cluster shapes
            for (let i = 0; i < numClusters; i++) {
                const clusterSeed = seed + i * 10000;
                const cx = this.seededRandom(clusterSeed) * width * 0.8 + width * 0.1;
                const cy = this.seededRandom(clusterSeed + 100) * height * 0.6 + height * 0.2;
                const clusterRadius = this.seededRandom(clusterSeed + 200) * 100 + 50;

                // Create radial gradient for cluster
                const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, clusterRadius);
                gradient.addColorStop(0, 'rgba(138, 180, 248, 0.08)');
                gradient.addColorStop(0.5, 'rgba(138, 180, 248, 0.03)');
                gradient.addColorStop(1, 'rgba(138, 180, 248, 0)');

                ctx.beginPath();
                ctx.arc(cx, cy, clusterRadius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();

                // Add smaller particles in cluster
                const clusterParticles = Math.floor(clusterRadius / 3);
                for (let j = 0; j < clusterParticles; j++) {
                    const pSeed = clusterSeed + j * 100;
                    const angle = this.seededRandom(pSeed) * Math.PI * 2;
                    const distance = this.seededRandom(pSeed + 50) * clusterRadius * 0.8;
                    const px = cx + Math.cos(angle) * distance;
                    const py = cy + Math.sin(angle) * distance;
                    const pRadius = this.seededRandom(pSeed + 99) * 2 + 1;

                    ctx.beginPath();
                    ctx.arc(px, py, pRadius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(138, 180, 248, ${0.2 + this.seededRandom(pSeed + 200) * 0.3})`;
                    ctx.fill();
                }
            }

            // Draw subtle connecting lines between nearby particles
            const connectionDistance = 80;
            const particles = [];

            for (let i = 0; i < Math.min(numParticles, 100); i++) {
                const randSeed = seed + i;
                particles.push({
                    x: this.seededRandom(randSeed) * width,
                    y: this.seededRandom(randSeed + 1000) * height
                });
            }

            ctx.strokeStyle = 'rgba(138, 180, 248, 0.05)';
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = (1 - distance / connectionDistance) * 0.1;
                        ctx.strokeStyle = `rgba(138, 180, 248, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }
    }

    registerPaint('agentParticles', AgentParticlesPainter);
}
