import Particle from "./particle.js";

class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 600;
        this.createParticles();
    }

    createParticles() {
        [...Array(this.numberOfParticles)].forEach(() => {
            this.particles.push(new Particle(this))
        });
        console.log(this.particles);
    }

    handleParticles(context) {
        this.connectParticles(context);

        this.particles.forEach(particle => {
            particle.draw(context);
            particle.update()
        });
    }

    connectParticles(context) {
        const maxDistance = 100;

        this.particles.forEach((particle1, index) => {
            this.particles.slice(index).forEach((particle2) => {
                const dx = particle1.x - particle2.x;
                const dy = particle1.y - particle2.y;
                const distance = Math.hypot(dx, dy);
                if (distance < maxDistance) {
                    /**
                     * Wrapping with context.save() and restore()
                     * so that we don't apply this alpha property to all elements we
                     * save the contenxt
                     * apply it to our required particles 
                     * and restore it as it as for other particles
                     */
                    context.save();

                    const opacity = 1.1 - (distance / maxDistance); // GRADUAL DECREASE IN OPACITY IS RATIO OF DISTANCE / MAX DISTANCE AND FLIPPED IT SO THAT WHEN RATIO 0.3 which means 30 units apart we get 0.7 or 70% opacity ! 
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(particle1.x, particle1.y);
                    context.lineTo(particle2.x, particle2.y);
                    context.stroke();

                    context.restore();
                }
            })
        })
    }
}


export default Effect;