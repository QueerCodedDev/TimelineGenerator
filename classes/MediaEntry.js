class MediaEntry {
    constructor(data) {
        this.name       = data.name;
        this.universe   = data.universe;
        this.air_date   = data.start;
        this.fill_color = ColorManager.colors[this.universe];
        this.bounds;
    }

    render(){};

    calc_bounds(start){};
}