class MediaEntry {
    constructor(data) {
        this.name     = data.name;
        this.universe = data.universe;
        this.air_date = data.air_date;
        this.color    = ColorManager.colors[this.universe];
        this.view     = createDiv().addClass('entry').attribute('border-color', this.color);
    }
}