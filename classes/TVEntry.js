class TVEntry extends MediaEntry {
    constructor(data) {
        super(data);
        this.episodes = data.episodes;
        this.seasons  = this.split_episodes_to_seasons();
        this.popup_text = `Start: ${this.start}\nEnd:   ${this.end}`;
        this.ascent_modifier = 2;
    }

    split_episodes_to_seasons() {
        let temp_seasons = [[]];
        let curr_season  = 1;

        for (let e of this.episodes) {
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
            s_data.push(
                {
                    'season': ts[0].season,
                    'start': ts[0].air_date,
                    'end': ts[end].air_date,
                    'episodes': ts
                }
            );
        }

        return s_data;
    }
}