import Effect from "./effect.js";



class Application {

    constructor() {
        const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        this.effect = new Effect(canvas)
        this.effect.handleParticles(ctx);
        // requestAnimationFrame(this.render.bind(this))
    }



    render(ts) {

    }




}

window.addEventListener("DOMContentLoaded", function () {
    this.window.application = new Application();
})