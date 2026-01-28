export class Entry {
    constructor(data) {
        this.name  = data['show'];
        this.start = data['start'];
        this.end   = data['end'];

        this.render_length = this.calc_entry_length();

            console.log('[\'The One With Blocks For Letters\' is looking at you from `Entry.js`]');
    }

    render(x, y) {
        // rect(x, y, length, height)
        rect(x, y, this.render_length, timeline_row_height);
    }

    calc_entry_length() {
        return calc_dist_as_days(this.start, this.end)
    }

}