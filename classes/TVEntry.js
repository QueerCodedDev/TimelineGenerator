/**
This is a class specifically for Timeline Entries that are for TV Shows
*/
class TVEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.season  = data.season;
        this.episode = data.episode;
        this.title   = data.title;
        this.listing = `${this.season}.${this.episode} ${this.title}`;
    }

    format_entry() {

    }

    render() {
        textAlign(CENTER);

        let x = 0;
        let y = 100;
        let s1 = `${this.listing}\n${this.air_date}`;
        let s2 = `${this.name}`;
        let rect_wid = textWidth(s1)+this.font_size;
        let rect_hig = textAscent()*4;
        textSize(this.font_size)
        strokeWeight(5);
        rect(x, y, rect_wid, rect_hig, this.font_size);
        text(s1, x, y);
        textSize(10);
        text(s2, x, y-this.font_size);

        translate(0, rect_hig * 2);
    }
}
