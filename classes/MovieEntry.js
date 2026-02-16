// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);
    }

    format_entry() {
        let nameDIV = createDiv(`${this.name}`).addClass('name');
        let airDIV  = createDiv(`${this.air_date}`).addClass('air_date');
        this.view.child(nameDIV);
        this.view.child(airDIV);
    }
}