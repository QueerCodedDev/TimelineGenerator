function setup() {
    createCanvas(400,400);
    example = loadJSON('res/series_data.json');
    console.log(example)
    console.log(example.length())
}

function draw() {
  background(255,0,0);
}