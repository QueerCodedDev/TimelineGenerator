class MediaEntry {
    constructor(data) {
        this.name     = data.name;
        this.universe = data.universe;
        this.air_date = data.air_date;
        this.color    = ColorManager.colors[this.universe];
        this.view     = createDiv(`${this.name}<br>${this.air_date}`).hide();
    }

    render() {
        this.view.show();
    }
}