class MediaEntry {
    constructor(data) {
        this.name      = data.name;
        this.universe  = data.universe;
        this.air_date  = data.air_date;
        this.color     = ColorManager.colors[this.universe];
        this.point     = 15;
        this.weight    = 5;
        this.pos       = {
            'x': 0,
            'y': 100,

        };
    }
}