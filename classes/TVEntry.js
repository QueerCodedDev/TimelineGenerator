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
}
