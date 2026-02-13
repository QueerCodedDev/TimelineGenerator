class TVEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.episodes;
        this.seasons;
        this.popup_text = `Start: ${this.start}\nEnd:   ${this.end}`;
    }

    render_popup(mx) {
        fill(this.fill_color);
        rect(mx, this.bounds.y2, textWidth(this.popup_text), textAscent());
        fill('black');
        textSize(20);
        textAlign(LEFT, TOP);
        noStroke();
        text(this.popup_text, mx, this.bounds.y2);
    }
}