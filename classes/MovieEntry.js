// is movie entry if episodes == null

class MovieEntry extends MediaEntry {
    constructor(data) {
        super(data);

        this.popup_text = `Aired: ${this.start}`;
    }

    render_popup(mx) {
        fill(this.fill_color);
        rect(mx, this.bounds.y2, textWidth(this.popup_text), textAscent(this.popup_text));
        fill('black');
        textSize(20);
        textAlign(LEFT, TOP);
        noStroke();
        text(this.popup_text, mx + 5, this.bounds.y2 + 5);
    }
}