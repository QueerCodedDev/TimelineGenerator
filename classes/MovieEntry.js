// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);

        this.popup_text = `Aired: ${this.start}`;
    }
}