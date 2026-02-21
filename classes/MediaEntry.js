class MediaEntry {
    constructor(data) {
        this.name      = data.name;
        this.universe  = data.universe;
        this.air_date  = data.air_date;
        this.color     = ColorManager.colors[this.universe];
        this.point     = 25;
        this.weight    = 5;
        this.pos       = {
            'x': 0,
            'y': 100,

        };
        this.header;
    }

    render() {
        this.renderRect();
        textSize(this.point);
        fill(this.color);
        stroke('black');
        strokeWeight(2);
        text(this.header, this.pos.x, this.pos.y);
        this.renderSubtext();
        
        translate(0, rect_hig * 2);
    }

    renderRect() {
        strokeWeight(this.weight);
        let rect_wid = textWidth(this.header) + this.point;
        let rect_hig = textAscent() * 4;
        stroke(this.color);
        fill(100, 100, 100);
        rect(this.pos.x, this.pos.y, rect_wid, rect_hig, this.point);
    }

    renderSubtext() {}
}