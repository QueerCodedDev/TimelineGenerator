// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);

        this.popup_text = `Aired: ${this.start}`;
    }

    render_popup(mx) {
        rect(mx, this.bounds.y2, 200, 50);
        fill('black');
        textSize(20);
        textAlign(LEFT, TOP);
        noStroke();
        text(this.popup_text, mx + 5, this.bounds.y2 + 5);
    }
}