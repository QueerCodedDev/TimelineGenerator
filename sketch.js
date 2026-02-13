let timeline_row_height = 100;
let timeline_row_length = 365;
let canvas_width;
let canvas_height;
let episode_data_json;
let activeEntryManager;

function preload() {
    episode_data_json = loadJSON('res/shows_data.json')
}

function setup() {
    activeEntryManager = new EntryManager(episode_data_json.media)
    activeEntryManager.calculate_entry_bounds();

    canvas_height = timeline_row_height * activeEntryManager.universe_count;
    canvas_width  = timeline_row_length * activeEntryManager.total_duration;
    
    createCanvas(canvas_width, canvas_height);
}

function draw() {
    background('black');
    setup_timeline_background(activeEntryManager);

    activeEntryManager.render_entries();
}