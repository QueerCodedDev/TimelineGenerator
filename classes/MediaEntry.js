// Might be able to totally combine Movie and TV Entries at some point,
// but priority is elsewhere currently.

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

        // Vars for previous and next entries.
        // Mostly this is for knowing if entries need to be rendered side-by-side
        this.prev;
        this.next;
    }

    formatEntry(prev, next) {
        textSize(this.point);

        this.dims = {
            'x': 0,
            'y': 100,
            'w': textWidth(this.header) + this.point,
            'h': textAscent() * 4
        };

        this.prev = prev;
        this.next = next;
    }

    render() {
        this.renderRect();

        textSize(this.point);
        fill('white');
        stroke('black');
        strokeWeight(2);

        text(this.header, this.dims.x, this.dims.y);
        this.renderSubtext();

        translate(0, this.dims.h * 2);

        console.log(`Prev: ${this.prev.air_date} | Curr: ${this.air_date} | Next: ${this.next.air_date}`);
    }

    renderRect() {
        strokeWeight(this.weight);
        stroke(this.color);
        fill('black');
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