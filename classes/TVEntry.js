/**
This is a class specifically for Timeline Entries that are for TV Shows
*/
class TVEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.season  = data.season;
        this.episode = data.episode;
        this.title   = data.title;
    }

    format_entry() {

    }

    render() {
        textAlign(CENTER);

        let x = 0;
        let y = 100;
        let main_font_size = 15;
        let s1 = `${this.season}.${this.episode} ${this.title}\n${this.air_date}`;
        let s2 = `${this.name}`;
        
        textSize(main_font_size)
        strokeWeight(5);
        rect(x, y, textWidth(s1)+main_font_size, textAscent()*4, main_font_size);
        text(s1, x, y);
        textSize(10)
        text(s2, x, y-main_font_size);

        translate(0, textAscent()*8)
    }
}
