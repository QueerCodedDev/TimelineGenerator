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

        fill(255);
        textSize(25);
        textWrap(WORD);
        textAlign(LEFT, CENTER);
        stroke('black');
        strokeWeight(2);
        text(this.name, this.bounds.x1 + 25, this.bounds.y1 + timeline_row_height / 2, this.render_length);
    };
}