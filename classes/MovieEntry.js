// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);
    }

    // calc_bounds(start) {
    //     let bounds = {
    //         'x1': 0,
    //         'y1': 0,
    //         'x2': 0,
    //         'y2': 0,
    //         'length': 0,
    //         'height': 0,
    //     }

    //     bounds.x1 = calc_dist_as_days(start, this.start);
    //     bounds.y1 = activeEntryManager.universe_tags.indexOf(this.universe);
    //     bounds.x2 = calc_dist_as_days(bounds.x1, this.end);
    //     bounds.y2 = bounds.y1 + timeline_row_height;
    //     bounds.length = bounds.x2 - bounds.x1;
    //     bounds.height = bounds.y2 - bounds.y1;

    //     console.log(bounds)

    //     return bounds;
    // }
    
    render() {
        fill(this.fill_color);
        rect(
            this.bounds.x1,
            this.bounds.y1,
            this.bounds.length,
            this.bounds.height
        )
    };
}