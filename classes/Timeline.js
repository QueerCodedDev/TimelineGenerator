class Timeline {
    constructor(dataJSON) {
        // Configure rect render and text render settings
        rectMode(CENTER);
        textAlign(CENTER);
        textFont(Settings.font);

        // EntryManagers
        this.dataEM  = new DataEntryManager(dataJSON.media);
        this.compEM  = new CompressedEntryManager(this.dataEM.dataEntriesByAirDate);
        this.groupEM = new GroupedEntryManager(this.dataEM.dataEntriesByAirDate);

        // Scroll vars
        this.scrollInc = 500;
        this.scrollAmt = 0;
    }

    autoScroll() {
        // If not set to autoscroll, return
        if (!Settings.scroll) return;

        // If scrolling has already started, continue scolling
        if (this.scrollAmt <= -this.scrollInc) translate(0, this.scrollAmt);

        // Start scrolling
        this.scrollAmt -= this.scrollInc;
    }

    render() {
        // Try to autoscroll
        this.autoScroll();

        // Configure line render settings
        stroke(Settings.grey);
        strokeWeight(Settings.rectWeight);

        // Draw line down the middle of the canvas.
        line(0, 0, 0, Settings.canvasH * 2); // *2 is larger than what is needed, but its fine

        // Tell the CompressedEntryManager to render all it's entries
        // this.compEM.render();

        // Tell the GroupedEntryManager to render all it's entries
        this.groupEM.render();
    }
}