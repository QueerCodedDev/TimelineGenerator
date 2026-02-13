class MediaEntry {
    constructor(data) {
        this.name       = data.name;
        this.universe   = data.universe;
        this.air_date   = data.start;
        this.bounds     = this.calc_bounds();
        this.fill_color = ColorManager.colors[this.universe];
    }

    render(){};

    calc_bounds(){};
}