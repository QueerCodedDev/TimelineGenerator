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

        // Vars for keeping track of how many entries are before and after this entry
        this.before = 0;
        this.after = 0;
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

        if (this.buddied()) {
            this.determineGroupSize();
        }
    }

    buddy(a, b) {
        // if b is null, no buddy
        if (b == null) return false;

        // if compressed mode, buddy is based on name instead of air_date
        if (this.compressed()) return a.name == b.name;

        // if b is not false, and not compressed mode, buddy is based on air_date
        return a.air_date == b.air_date;
    }

    buddied() {
        if (this.buddy(this, this.next)) return true;
        if (this.buddy(this, this.prev)) return true;

        return false;
    }

    grouped() {
        return entryManager.group;
    }

    compressed() {
        return entryManager.compress;
    }

    determineGroupSize() {
        let curr = this;
        while (this.buddy(curr, curr.prev)) {
            this.before++;
            curr = curr.prev;
        }

        curr = this;
        while (this.buddy(curr, curr.next)) {
            this.after++;
            curr = curr.next;
        }
    }

    reposition() {
        // If there are no buddies, it does not need to be repositioned, so return
        if (!this.buddied()) return;

        if (this.grouped()) {
            if (this.left()) { // JUST left of center
                this.dims.x = (this.dims.w / -2) - 20;
                if (this.next.center()) {
                    this.dims.x += this.next.dims.w / -2;
                }
            } else if (this.right()) { // JUST right of center
                this.dims.x = (this.dims.w /  2) + 20;
                if (this.prev.center()) {
                    this.dims.x += this.prev.dims.w / 2;
                }
            } else if (this.center()) {} //center
        }

        if (this.compressed()) {
            this.dims.h *= this.after;
        }
    }

    left()   { return this.before  < this.after; }
    right()  { return this.before  > this.after; }
    center() { return this.before == this.after; }

    render() {
        if (this.compressed() && this.before > 0) return;
        if (this.grouped() && this.buddy(this, this.next)) {
            stroke(100);
            strokeWeight(6);
            line(this.dims.x, this.dims.y, this.next.dims.x, this.next.dims.y);
        }
        
        this.renderRect();

        textSize(this.point);
        fill('white');
        stroke('black');
        strokeWeight(2);

        text(this.header, this.dims.x, this.dims.y);
        this.renderSubtext();

        if (!this.grouped() || !this.buddy(this, this.next)) translate(0, this.dims.h * 2);
    }

    renderRect() {
        if (!this.buddied() || this.grouped()) {
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
    }

    renderSubtext() {}
}