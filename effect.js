import Particle from "./particle.js";

class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
if(window.innerWidth <= 600) {
    this.numberOfParticles = 60;
} else {
    this.numberOfParticles = 600;
}
        this.createParticles();
    }

    createParticles() {
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this));
        }
        console.log(this.particles);
    }

    handleParticles(context) {
        this.connectParticles(context);

        for (let particle of this.particles) {
            particle.draw(context);
            particle.update();
        }
    }

    connectParticles(context) {
        const maxDistance = 100;

        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.hypot(dx, dy);

                if (distance < maxDistance) {
                    context.save();

                    const opacity = 1.1 - (distance / maxDistance);
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(this.particles[i].x, this.particles[i].y);
                    context.lineTo(this.particles[j].x, this.particles[j].y);
                    context.stroke();

                    context.restore();
                }
            }
        }
    }
}

export default Effect;
