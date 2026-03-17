class DataEntry {
    constructor(data) {
        // Get guaranteed data
        this.name     = data.name;
        this.universe = data.universe
        this.title    = data.title;
        this.date     = data.air_date;
        this.dateOBJ  = new Date(data.air_date);
        this.color    = Settings.UNI_COLORS[this.universe]; 

        // Get circumstantial data
        this.season  = data.season  ? data.season  : null;
        this.episode = data.episode ? data.episode : null;
    }
}