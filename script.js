import Effect from "./effect.js";

class Application {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');

        this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        this.gradient.addColorStop(0, "white");
        this.gradient.addColorStop(0.5, "magenta");
        this.gradient.addColorStop(1, "blue");

        this.ctx.fillStyle = this.gradient;
        this.ctx.strokeStyle = "white";

        this.effect = new Effect(this.canvas);
        requestAnimationFrame(this.render.bind(this));
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
        this.effect.handleParticles(this.ctx);
        requestAnimationFrame(this.render.bind(this));
    }
}

window.addEventListener("DOMContentLoaded", () => {
    window.application = new Application();
});
