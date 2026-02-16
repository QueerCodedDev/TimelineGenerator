class MediaEntry {
    constructor(data) {
        this.name     = data.name;
        this.universe = data.universe;
        this.air_date = data.air_date;
        this.color    = ColorManager.colors[this.universe];
        this.view     = createDiv().addClass('view').attribute('border', `2px solid 'black'`);
    }
}