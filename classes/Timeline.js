class Timeline {
    constructor(dataJSON) {
        // Configure rect render and text render settings
        rectMode(CENTER);
        textAlign(CENTER);
        this.dataEM   = new DataEntryManager(dataJSON.media);
        this.compEM   = new CompressedEntryManager(this.dataEM);
    }

    render() {
        stroke(Renderer.grey);
        strokeWeight(Renderer.rectWeight);
        line(0, 0, 0, canvasH * 1.5)
        this.compEM.render();
    }
}