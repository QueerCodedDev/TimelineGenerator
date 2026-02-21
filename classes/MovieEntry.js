// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.heading = `${this.name}\n${this.air_date}`;
    }
}