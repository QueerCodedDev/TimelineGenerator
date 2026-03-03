// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.header = `${this.title}\n${this.air_date}`;
    }
}