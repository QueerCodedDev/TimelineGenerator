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
        let titleDIV = createDiv(`${this.season}.${this.episode} ${this.title}`);
        let nameDIV  = createDiv(`${this.name}`);
        let airDIV   = createDiv(`${this.air_date}`);
        this.view.child(titleDIV);
        this.view.child(nameDIV);
        this.view.child(airDIV);
    }
}
