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
        // ctx.strokeStyle = "white";
        // ctx.lineWidth=5;
        this.effect = new Effect(this.canvas)
        this.effect.handleParticles(this.ctx);




        requestAnimationFrame(this.render.bind(this))
    }



    render(ts) {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 

        this.effect.handleParticles(this.ctx);
        requestAnimationFrame(this.render.bind(this))

    }




}

/**
 * 
 * window.onload not using because there may be cases in which it can occur more than once therefore that's
 * avoided and DOMContentLoaded is more reliable
 */

window.addEventListener("DOMContentLoaded", function () {
    this.window.application = new Application();
})