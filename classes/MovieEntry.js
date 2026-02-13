// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);
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