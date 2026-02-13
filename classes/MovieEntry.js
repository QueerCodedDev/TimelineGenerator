// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);
    }

    calc_bounds(start) {
        let bounds = {
            'x1': 0,
            'y1': 0,
            'x2': 0,
            'y2': 0,
            'length': 0,
            'width': 0,
        }

        bounds.x1 = calc_dist_as_days(start, this.air_date);

        console.log(bounds)

        return bounds;
    }
}