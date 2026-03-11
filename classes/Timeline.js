class Timeline {
    constructor(dataJSON) {
        // Configure rect render and text render settings
        rectMode(CENTER);
        textAlign(CENTER);
        this.dataEM = new DataEntryManager(dataJSON.media);
        this.compEM = new CompressedEntryManager(this.dataEM);

        
        this.scrollInc = 500;
        this.scrollAmt = 0;
    }

    autoScroll() {
        if (!Renderer.scroll) return;
        if (this.scrollAmt <= -this.scrollInc) translate(0, this.scrollAmt);
        this.scrollAmt -= this.scrollInc;
    }

    render() {
        this.autoScroll();
        stroke(Renderer.grey);
        strokeWeight(Renderer.rectWeight);
        line(0, 0, 0, canvasH * 2); // *2 is larger than what is needed, but its fine
        this.compEM.render();
    }
}