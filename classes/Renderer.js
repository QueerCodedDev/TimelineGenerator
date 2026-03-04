class Renderer {
    static point  = 25;
    static _point = 20;
    static weight =  5;

    static render(e) {
        if (e.buddy(e, e.next)) {
            stroke(ColorManager.colors.line);
            strokeWeight(6);
            line(e.dims.x, e.dims.y, e.next.dims.x, e.next.dims.y);
        }
        
        this.renderRect(e);
        this.renderBody(e);
        this.renderName(e);

        if (!e.buddy(e, e.next)) translate(0, e.dims.h * 2);
    }

    static renderBody(e) {
        textSize(this.point);
        fill(ColorManager.colors.white);
        stroke(ColorManager.colors.black);
        strokeWeight(2);
        text(e.header, e.dims.x, e.dims.y);
    }

    static renderRect(e) {
        strokeWeight(this.weight);
        stroke(e.color);
        fill(ColorManager.colors.black);
        rect(
            e.dims.x, 
            e.dims.y, 
            e.dims.w, 
            e.dims.h, 
            this.point
        );
    }

    static renderName(e) {
        textSize(this._point);
        noStroke();
        fill(e.color);
        text(e.name, e.dims.x, e.dims.y-Renderer.point);
    }
}