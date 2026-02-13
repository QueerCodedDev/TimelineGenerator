class TVEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.episodes;
        this.seasons;
        this.popup_text = `Start: ${this.start}\nEnd:   ${this.end}`;
    }
}