let media_data_json;
let activeEntryManager;

const Modes = {
    COMPRESS: 'compress',
    GROUPING: 'group'
}

let view_mode = Modes.GROUPING;

let canvasDim = {
    'height': 50000, // even compressed mode takes up too much space to render everything
    'width':  1000 // canvas still too narrow, but only when grouped.
};

function preload() {
    media_data_json = loadJSON('res/individual_data.json');
}

function setup() {
    createCanvas(canvasDim.width, canvasDim.height);
    textFont('Consolas'); //fixed width font

    // Create the appropriate entrymanager based on view_mode
    if (view_mode == Modes.GROUPING) activeEntryManager = new GroupedEntryManager(media_data_json.media); // <-- Will add specific entrymanagers again
    if (view_mode == Modes.COMPRESS) activeEntryManager = new CompressedEntryManager(media_data_json.media); // <-- Will add specific entrymanagers again
    
    rectMode(CENTER);
    textAlign(CENTER);
}

function draw() {
    translate(canvasDim.width/2, 0);
    stroke(ColorManager.colors.line);
    strokeWeight(6);
    line(0, 0, 0, canvasDim.height);
    activeEntryManager.render();
}