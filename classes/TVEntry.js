class TVEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.episodes;
        this.seasons;
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
}