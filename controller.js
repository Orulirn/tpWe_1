
var editingMode = { rect: 0, line: 1 };

class Pencil{

    constructor(ctx, drawing, canvas){
        this.ctx = ctx;
        this.drawing = drawing;
        this.canvas = canvas;
        this.currEditingMode = editingMode.line;
        this.currLineWidth = 5;
        this.currColour = '#000000';
        this.currentShape = 0;
        this.DnD = new DnD(canvas, this);
    }

    

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.


	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

    onInteractionStart(DnD){
        switch(this.currEditingMode){
            case 0:
                this.currentShape = new Rectangle(DnD.x_init,DnD.y_init,0,0,this.currColour,this.currLineWidth);
            case 1:
                this.currentShape = new Line(DnD.x_init,DnD.y_init,DnD.x_init,DnD.y_init,this.currColour,this.currLineWidth);
        }
    }

    onInteractionUpdate(DnD){
        switch(this.currEditingMode){
            case 0:
                this.currentShape.width = DnD.x_final-DnD.x_init;
                this.currentShape.height = DnD.y_final-DnD.y_init;
            case 1:
                this.currentShape.point2 = [DnD.x_final, DnD.y_final];
        }
        this.drawing.paint(ctx)
        this.currentShape.paint(ctx)

    }

    onInteractionEnd(DnD){
        switch(this.currEditingMode){
            case 0:
                this.currentShape.width = DnD.x_final-DnD.x_init;
                this.currentShape.height = DnD.y_final-DnD.y_init;
            case 1:
                this.currentShape.point2 = [DnD.x_final, DnD.y_final];
        }
        drawing.addForme(this.currentShape,this.ctx);
        this.currentShape=0;
    }
};


