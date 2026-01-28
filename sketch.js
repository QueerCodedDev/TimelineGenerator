function setup() {
    createCanvas(400,400);
    example = loadJSON('res/series_data.json').parse();
    console.log(example)
    console.log(example.length())
}

function draw() {
  background(255,50,0);
}