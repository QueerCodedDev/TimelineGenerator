// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.header = `${this.name}\n${this.air_date}`;
    }
}