class MediaEntry {
    constructor(data) {
        this.name      = data.name;
        this.universe  = data.universe;
        this.air_date  = data.air_date;
        this.color     = ColorManager.colors[this.universe];
        this.point     = 25;
        this.weight    = 5;
        this.header    = '';
        this.dims;
    }

    formatEntry() {
        textSize(this.point);

        return {
            'x': 0,
            'y': 100,
            'w': textWidth(this.header) + this.point,
            'h': textAscent() * 4
        };
    }

    render() {
        this.renderRect();
        textSize(this.point);
        fill(this.color);
        stroke('black');
        strokeWeight(2);
        text(this.header, this.dims.x, this.dims.y);
        this.renderSubtext();

        translate(0, this.dims.h * 2);
    }

    renderRect() {
        strokeWeight(this.weight);
        stroke(this.color);
        fill(100, 100, 100);
        rect(
            this.dims.x, 
            this.dims.y, 
            this.dims.w, 
            this.dims.h, 
            this.point
        );
    }

    renderSubtext() {}
}