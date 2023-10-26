class Particle {
    constructor(effect) {

        this.effect = effect;
        this.radius = 15;

        /**
         * Because we need the whole circle, therefore diameter = 2 * radius, so we need the radius
         */
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);

    }


    draw(ctx) {
        ctx.fillStyle = `hsl(${this.x * 0.5}, 100%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    update() {
        this.x++;
    }

}

export default Particle;