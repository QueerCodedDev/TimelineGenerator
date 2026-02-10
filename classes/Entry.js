
class Entry {
    constructor(data) {
        this.uni   = data.universe;
        this.name  = data.show;
        this.start = data.start;
        this.end   = data.end;
        this.eps   = data.episodes;

        this.fill_color    = this.determine_entry_color();
        this.render_length = this.calc_entry_length(this.start, this.end);
        
        this.seasons = this.get_seasons_data();

    }

    render(x, y) {
        // function variable placement reference: rect(x, y, length, height)
        fill(this.fill_color);
        noStroke();
        rect(x, y, this.render_length, timeline_row_height);

        // Add in lines or something that break up the shows by season for easy viewing of when
        // seasons end and begin.

        fill(255);
        textSize(25);
        textWrap(WORD);
        textAlign(LEFT, CENTER);
        stroke('black');
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

    calc_entry_length(start, end) {
        return calc_dist_as_days(start, end);
    }

    get_seasons_data() {
        if (this.eps == null) return null;
        let temp_seasons = [[]];
        let curr_season  =  1;

        for (let e of this.eps) {
            if (e.season == curr_season) {
                temp_seasons[curr_season-1].push(e);
            } else if (e.season > curr_season) {
                curr_season++;
                temp_seasons.push([e]);
            }
        }

        let s_data = [];
        for (let ts of temp_seasons) {
            let end = ts.length - 1;
            s_data.push({'season': ts[0].season, 'start': ts[0].air_date, 'end': ts[end].air_date});
        }
        console.log(s_data);
        return temp_seasons;
    }
}
