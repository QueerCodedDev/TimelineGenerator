/**
This is a class specifically for Timeline Entries that are for TV Shows
*/
class TVEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.season  = data.season;
        this.episode = data.episode;
        this.title   = data.title;
        this._point  = 12;
        this.listing = `${this.season}.${this.episode} ${this.title}`;
    }

    format_entry() {

    }

    render() {
        textAlign(CENTER);
        textSize(this.point);
        strokeWeight(this.weight);

        let header   = `${this.listing}\n${this.air_date}`;
        let rect_wid = textWidth(header) + this.point;
        let rect_hig = textAscent() * 4;
        
        stroke(this.color);
        fill(100,100,100);
        rect(this.pos.x, this.pos.y, rect_wid, rect_hig, this.point);
        stroke(this.color);
        fill('black');
        strokeWeight(2);
        text(header, this.pos.x, this.pos.y);

        textSize(this._point);
        text(this.name, this.pos.x, this.pos.y-this.point);

        translate(0, rect_hig * 2);
    }
}
