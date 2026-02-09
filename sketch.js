let timeline_row_height = 100;
let timeline_row_length = 365;
let canvas_width;
let canvas_height;
let series_data_json;
let episode_data_json;
let ActiveEntryManager;

let TIMELINE_OPTIONS = {
    'SERIES': 'series',
    'EPISODE': 'episode'
} 

let TIMELINE_CHOICE = TIMELINE_OPTIONS.EPISODE;

function preload() {
    series_data_json = loadJSON('res/series_data.json');
    episode_data_json = loadJSON('res/shows_data.json')
}

function setup() {
    EntryManager = new EntryManager(series_data_json.media, episode_data_json.media)

    canvas_height = timeline_row_height * ActiveEntryManager.entries_arr.length;
    canvas_width  = timeline_row_length * ActiveEntryManager.total_duration;
    
    createCanvas(canvas_width, canvas_height);
}

function draw() {
    background('black');
    setup_timeline_background(ActiveEntryManager);

    ActiveEntryManager.render_entries();

    noLoop();
}