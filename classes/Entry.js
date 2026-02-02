
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
        rect(x, y, this.render_length, timeline_row_height);
        textSize(25);
        text(this.name, x + 25, y + timeline_row_height / 2);
    }

    determine_entry_color() {
        switch(this.uni) {
            case 'lib':
                this.fill_color = "#F5D327"
                break;
            case 'lev':
                this.fill_color = "#27B0F5"
                break;
            case 'spn':
                this.fill_color = "#C223BD"
                break;
            case 'psy':
                this.fill_color = "#23C227"
                break;
            case 'men':
                this.fill_color = "#C22823"
                break;
            default:
                this.fill_color = "#FFFFFF"
        }
    }

    calc_entry_length() {
        return calc_dist_as_days(this.start, this.end)
    }

}