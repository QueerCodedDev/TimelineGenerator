class DataEntry {
    constructor(data) {
        // Get guaranteed data
        this.name     = data.name;
        this.universe = data.universe
        this.title    = data.title;
        this.date     = data.air_date;


        // Get circumstantial data
        this.season  = data.season  ? data.season  : null;
        this.episode = data.episode ? data.episode : null;

        //this.color; <-- Unsure if this var will actually be used or not. 
    }
}