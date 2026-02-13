class MediaEntry {
    constructor(data) {
        this.name       = data.name;
        this.universe   = data.universe;
        this.start      = data.start;
        this.end        = data.end;
        this.fill_color = ColorManager.colors[this.universe];
        this.bounds;
    }

    render(){};

    calc_bounds(start){};
}