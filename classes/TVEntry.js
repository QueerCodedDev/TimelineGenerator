/**
This is a class specifically for Timeline Entries that are for TV Shows
*/
class TVEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.season  = data.season;
        this.episode = data.episode;
        this.title   = data.title;
        this._point  = 20;
        this.listing = `${this.season}.${this.episode} ${this.title}`;
        this.header  = `${this.listing}\n${this.air_date}`;
    }

    renderSubtext() {
        bigCanvas.textSize(this._point);
        bigCanvas.noStroke();
        bigCanvas.fill(this.color);
        bigCanvas.text(this.name, this.dims.x, this.dims.y-this.point);
    }
}
