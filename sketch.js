let timeline_row_height = 100;
let timeline_row_length = 365;
let canvas_width;
let canvas_height;
let episode_data_json;
let ActiveEntryManager;

function preload() {
    episode_data_json = loadJSON('res/shows_data.json')
}

function setup() {
    ActiveEntryManager = new EntryManager(episode_data_json.media)

    canvas_height = timeline_row_height * ActiveEntryManager.universe_count;
    canvas_width  = timeline_row_length * ActiveEntryManager.total_duration;
    
    createCanvas(canvas_width, canvas_height);
}

function draw() {
    background('black');
    setup_timeline_background(ActiveEntryManager);

    ActiveEntryManager.render_entries();
}