let project_scale_multiplier = 2;
let timeline_row_height = 100;
let timeline_row_length = 365;
let starting_year = 2004;
let total_years_spanned_cieling = 25;
let canvas_width;
let canvas_height;
let series_data_json;
let series_data_arr;
let entry_manager;

function preload() {
    // only for use with server
    // series_data_json = loadJSON('res/series_data.json');
    // for testing without server
    
    series_data_json = {
    "media": [
        {"universe": "lib", "show": "The Librarian: Quest for the Spear",            "start": "12-05-2004", "end": "12-05-2005"},
        {"universe": "spn", "show": "Supernatural",                                  "start": "09-13-2005", "end": "11-19-2020"},
        {"universe": "psy", "show": "Psych",                                         "start": "07-07-2006", "end": "03-26-2014"},
        {"universe": "lib", "show": "The Librarian: Return to King Solomon's Mines", "start": "12-03-2006", "end": "12-03-2007"},
        {"universe": "men", "show": "The Mentalist",                                 "start": "09-23-2008", "end": "02-18-2015"},
        {"universe": "lev", "show": "Leverage",                                      "start": "12-07-2008", "end": "12-25-2012"},
        {"universe": "lib", "show": "The Librarian: Curse of the Judas Chalice",     "start": "12-07-2008", "end": "12-07-2009"},
        {"universe": "lib", "show": "The Librarians",                                "start": "12-07-2014", "end": "02-07-2018"},
        {"universe": "psy", "show": "Psych: The Movie",                              "start": "12-07-2017", "end": "12-07-2018"},
        {"universe": "psy", "show": "Psych: Lassie Come Home",                       "start": "07-15-2020", "end": "07-15-2021"},
        {"universe": "lev", "show": "Leverage: Redemption",                          "start": "07-09-2021", "end": "06-05-2025"},
        {"universe": "psy", "show": "Psych: This Is Gus",                            "start": "11-18-2021", "end": "11-18-2022"},
        {"universe": "lib", "show": "The Librarians: Next Chapter",                  "start": "05-25-2025", "end": "08-04-2025"}
    ]
}
}

function setup() {
    series_data_arr = series_data_json.media;
    canvas_height = timeline_row_height * series_data_arr.length;
    canvas_width = timeline_row_length * total_years_spanned_cieling;

    createCanvas(canvas_width, canvas_height);

    entry_manager = new EntryManager(series_data_arr, starting_year);
}

function draw() {
    background('black');
    setup_timeline_background();

    entry_manager.render_entries();

    noLoop();
}