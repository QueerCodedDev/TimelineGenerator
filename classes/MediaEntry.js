class MediaEntry {
    constructor(data) {
        this.name       = data.name;
        this.universe   = data.universe;
        this.start      = data.start;
        this.end        = data.end;
        this.fill_color = ColorManager.colors[this.universe];
        this.bounds;
    }

    calc_bounds(start) {
        let bounds = {
            'x1': 0,
            'y1': 0,
            'x2': 0,
            'y2': 0,
            'length': 0,
            'height': 0,
        }

        bounds.x1 = calc_dist_as_days(start, this.start);
        bounds.y1 = activeEntryManager.universe_tags.indexOf(this.universe) * timeline_row_height;
        bounds.x2 = calc_dist_as_days(bounds.x1, this.end);
        bounds.y2 = bounds.y1 + timeline_row_height;
        bounds.length = bounds.x2 - bounds.x1;
        bounds.height = bounds.y2 - bounds.y1;

        console.log(this.name + '|||' + bounds)

        this.bounds = bounds;
    }
}