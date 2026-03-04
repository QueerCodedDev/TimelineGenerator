// Might be able to totally combine Movie and TV Entries at some point,
// but priority is elsewhere currently.

class Entry {
    constructor(data) {
        this.name     = data.name;
        this.universe = data.universe;
        this.title    = data.title;
        this.air_date = data.air_date;
        this.listing  = `${data.title}`;
        
        if (data.season) {
            this.season  = data.season;
            this.episode = data.episode;
            this.listing = `${this.season}.${this.episode} ${this.title}`;
        }

        this.header = `${this.listing}\n${data.air_date}`;
        this.color  = ColorManager.colors[this.universe];

        this.dims;

        // Vars for previous and next entries.
        // Mostly this is for knowing if entries need to be rendered side-by-side
        this.prev;
        this.next;

        // Vars for keeping track of how many entries are before and after this entry
        this.before = 0;
        this.after  = 0;

        this.compressed = false;
    }

    buddy(a, b) {
        if (b == null) return false;
        if (VIEW_MODE == Modes.GROUPING) return a.air_date == b.air_date;
        if (VIEW_MODE == Modes.COMPRESS) return a.name == b.name;
    }

    grouped() {
        if (this.buddy(this, this.next)) return true;
        if (this.buddy(this, this.prev)) return true;

        return false;
    }
}