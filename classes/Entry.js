
class Entry {
    constructor(data) {
        this.uni   = data.universe;
        this.name  = data.show;
        this.start = data.start;
        this.end   = data.end;

        this.fill_color    = this.determine_entry_color();
        this.render_length = this.calc_entry_length();

    }

    render(x, y) {
        // function variable placement reference: rect(x, y, length, height)
        fill(this.fill_color);
        noStroke();
        rect(x, y, this.render_length, timeline_row_height);

        fill(255);
        textSize(25);
        textWrap(WORD);
        textAlign(LEFT, CENTER);
        
        strokeWeight(2);
        text(this.name, x + 25, y + timeline_row_height / 2, this.render_length);
    }

    determine_entry_color() {
        switch(this.uni) {
            case 'lib':
                return color(245, 211,  39);
            case 'lev':
                return color( 39, 176, 245);
            case 'spn':
                return color(194,  35, 189);
            case 'psy':
                return color( 35, 194,  39);
            case 'men':
                return color(194,  40,  35);
            default:
                return color(255, 255, 255);
        }
    }

    calc_entry_length() {
        return calc_dist_as_days(this.start, this.end)
    }

}
