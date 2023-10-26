import Particle from "./particle.js";

class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 200;
        this.createParticles();
    }

    createParticles() {
        [...Array(this.numberOfParticles)].forEach(() => {
            this.particles.push(new Particle(this))
        });
        console.log(this.particles);
    }

    handleParticles(context) {
        this.particles.forEach(particle => {
            particle.draw(context);
            particle.update()
        })
    }
}


export default Effect;