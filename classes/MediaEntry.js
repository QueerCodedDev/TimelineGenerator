class MediaEntry {
    constructor(data) {
        this.name       = data.name;
        this.universe   = data.universe;
        this.start      = data.start;
        this.end        = data.end;
        this.fill_color = ColorManager.colors[this.universe];
        this.bounds;
    }

    render() {
        fill(this.fill_color);
        rect(
            this.bounds.x1,
            this.bounds.y1,
            this.bounds.length,
            this.bounds.height
        )
    };

    calc_bounds(start){};
}