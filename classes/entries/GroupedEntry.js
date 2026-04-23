// NEED TO FIGURE OUT WHY THE ENTRIES ARE NOT BEING GROUPED.
class GroupedEntry {
    constructor(entryEX) {
        // Array of entries to be grouped
        this.entry      = entryEX;
        this.positions  = [];
        this.dimensions = [];

        this.formatEntry();
        //console.log(this.positions);
    }

    formatEntry() {
        let Ld2 = this.entry.length/2;
        for (let e of this.entry) {
            let bodyBounds = this.getBounds(`${e.title}\n${e.date}`);
            let headBounds = this.getBounds(e.name, Settings._point);
            
            // Add the height of the header to the height of the body for total height
            bodyBounds.h += headBounds.h;

            // Push dims of current entry to dimensions array
            this.dimensions.push(
                {
                    'w': (bodyBounds.w > headBounds.w) ? bodyBounds.w : headBounds.w,
                    'h': bodyBounds.h
                }
            );

            // Push empty dict for current entry to positions array
            this.positions.push({'x':0, 'y':0});

            // Add empty item as needed to make positioning easier
            if (this.entry.length%2 == 0) { // Even # of entries
                this.entry.splice(Ld2, 0, {'mid':true});
            }

            this.entry[floor(Ld2)].mid = true; // set mid of middle item to be true

            if (this.entry.indexOf(e) == 0) {
                e.prev = null;
                e.next = this.entry[1];
            } else if (this.IDO(e) == this.entry.length-1) {
                e.prev = this.entry[this.entry.length-2];
            } else {
                e.prev = this.entry[this.IDO(e)-1];
                e.next = this.entry[this.IDO(e)+1];
            }
        }

        // Call setPositions, starting with the middle item
        this.setPositions(this.entry[floor(Ld2)]);
    }

    getBounds(text, point=Settings.point) {
        return Settings.font.textBounds(text, 0, 0, point);
    }

    setPositions(item) {
        let curr = item;
        let curr_pos = this.positions[this.IDO(item)];

        // While next entry
        while (curr.next) {
            let next_ind = this.IDO(curr.prev);
            curr_pos.x += (this.dimensions[next_ind].w/2) + (this.dimensions[this.IDO(item)].w/2);

            curr = curr.next;
        }

        curr = item;

        while (curr.prev) {
            let prev_ind = this.IDO(curr.prev);
            curr_pos.x += (this.dimensions[prev_ind].w/2) + (this.dimensions[this.IDO(item)].w/2);

            curr = curr.prev;
        }
    }

    IDO(i) {
        return this.entry.indexOf(i);
    }

    render() {
        // Add code here to render line to connect entries
        for (let i = 0; i < this.entry.length; i++) {
            this.renderRect(this.entry[i], i);
            textSize(Settings.point);
            fill(Settings.white);
            stroke(Settings.black);
            strokeWeight(Settings.textWeight);

            text(`${this.entry[i].title}\n${this.entry[i].date}`, this.positions[i].x, this.positions[i].y);

            this.renderSubtext(this.entry[i], i);
        }

        translate(0, this.dimensions[0].h * 2);
    }

    renderRect(e, ind) {
        strokeWeight(Settings.textWeight);
        stroke(e.color); // <--- Need to update this so that the color of each item is based on their specific colors
        fill(Settings.black);
        rect(
            this.positions[ind].x, 
            this.positions[ind].y, 
            this.dimensions[ind].w,
            this.dimensions[ind].h, 
            Settings.point
        );
    }

    renderSubtext(e, ind) {
        textSize(Settings._point);
        noStroke();
        fill(Settings.UNI_COLORS[e.universe]);
        text(e.name, this.positions[ind].x, this.positions[ind].y-Settings.point);
    }
}