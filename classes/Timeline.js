class Timeline {
    constructor(dataJSON) {
        this.dataEM   = new DataEntryManager(dataJSON.media);
        this.compEM   = new CompressedEntryManager(this.dataEM);
    }

    render() {
        stroke(Renderer.grey);
        strokeWeight(Renderer.rectWeight);
        line(0, 0, 0, canvasH)
        this.compEM.render();
    }
}