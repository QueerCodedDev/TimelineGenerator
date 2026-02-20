// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);
    }

    format_entry() {

    }

    render() {
        textAlign(CENTER);
        textSize(this.point);
        strokeWeight(this.weight);

        let header   = `${this.name}\n${this.air_date}`;
        let rect_wid = textWidth(header) + this.point;
        let rect_hig = textAscent() * 4;
        
        stroke(this.color);
        fill(100,100,100);
        rect(this.pos.x, this.pos.y, rect_wid, rect_hig, this.point);
        stroke('black');
        strokeWeight(2);
        fill(this.color);
        text(header, this.pos.x, this.pos.y);

        translate(0, rect_hig * 2);
    }
}