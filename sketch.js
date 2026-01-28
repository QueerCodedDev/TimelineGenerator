function setup() {
    createCanvas(400,400);
    let series_data_json = loadJSON('res/series_data.json');
    let series_data_arr = []
    for(let d of series_data_json) {
      series_data_arr.push(d);
    }
    print(series_data_arr);
}

function draw() {
  background(255,50,0);
}