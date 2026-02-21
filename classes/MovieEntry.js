// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.heading = `${this.name}\n${this.air_date}`;
        this.dims.w  = textWidth(this.header) + this.point;
        this.dims.h  = textAscent() * 4;
    }
}