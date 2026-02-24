// Might be able to totally combine Movie and TV Entries at some point,
// but priority is elsewhere currently.

class MediaEntry {
    constructor(data) {
        this.name      = data.name;
        this.universe  = data.universe;
        this.air_date  = data.air_date;
        this.color     = ColorManager.colors[this.universe];
        this.point     = 25;
        this.weight    = 5;
        this.header    = '';
        this.dims;

        // Vars for previous and next entries.
        // Mostly this is for knowing if entries need to be rendered side-by-side
        this.prev;
        this.next;
    }

    formatEntry(prev, next) {
        // Make sure text size is set before calculating dimensions
        textSize(this.point);

        // Calculate dimensions
        this.dims = {
            'x': 0,
            'y': 100,
            'w': textWidth(this.header) + this.point,
            'h': textAscent() * 4
        };

        // Set pointers for previous and next Entries
        this.prev = prev;
        this.next = next;
    }

    buddy(a, b) {
        if (b == null) return false;
        return a.air_date == b.air_date;
    }

    needsRepositioning() {
        if (this.buddy(this, this.next)) return true;
        if (this.buddy(this, this.prev)) return true;

        return false;
    }

    reposition() {
        let before = 0;
        let after  = 0;
        let group  = 0;

        let curr = this;
        while (this.buddy(curr, curr.prev)) {
            before++;
            curr = curr.prev;
        }

        curr = this;
        while (this.buddy(curr, curr.next)) {
            after++;
            curr = curr.next;
        }

        group = before + 1 + after;

        if (before == 0 && after == 1) { // JUST left of center
            this.dims.x = (this.dims.w / -2) - 10;
        } else if (before == 1 && after == 0) { // JUST right of center
            this.dims.x = (this.dims.w / 2) + 10;
        } else if (before < after) { // Generally left of center;
            let offset  = (after - before + 1) / 2;
            this.dims.x = offset * (entryManager.entry_stats.max_w / -group / 2);
        } else if (before > after) { // Generally right of center;
            let offset  = (before - after + 1) / 2;
            this.dims.x = offset * (entryManager.entry_stats.max_w / group / 2);
        } else {} //center;
    }

    render() {
        if (this.needsRepositioning()) {
            this.reposition();
        }

        this.renderRect();

        textSize(this.point);
        fill('white');
        stroke('black');
        strokeWeight(2);

        text(this.header, this.dims.x, this.dims.y);
        this.renderSubtext();

        if (!this.buddy(this, this.next)) translate(0, this.dims.h * 2);
    }

    renderRect() {
        strokeWeight(this.weight);
        stroke(this.color);
        fill('black');
        rect(
            this.dims.x, 
            this.dims.y, 
            this.dims.w, 
            this.dims.h, 
            this.point
        );
    }

    renderSubtext() {}
}