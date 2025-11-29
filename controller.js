
var editingMode = { rect: 0, line: 1 };

class Pencil{

    constructor(ctx, drawing, canvas){
        this.ctx = ctx;
        this.drawing = drawing;
        this.canvas = canvas;
        this.currEditingMode = editingMode.line;
        this.currLineWidth = document.getElementById("spinnerWidth").value;
        this.currColour = document.getElementById("colour").value;
        this.currentShape = 0;
        this.DnD = new DnD(canvas, this);

        document.getElementById("butRect").addEventListener("change", (evt) => {
            this.currEditingMode = editingMode.rect;
        })

        document.getElementById("butLine").addEventListener("change", (evt) =>{
            this.currEditingMode = editingMode.line;
        })

        document.getElementById("spinnerWidth").addEventListener("input", (evt) => {
            this.currLineWidth = document.getElementById("spinnerWidth").value
        })

        document.getElementById("colour").addEventListener("input", (evt) => {
            this.currColour = document.getElementById("colour").value;
        })
    }

    

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

    onInteractionStart(DnD){
        switch(this.currEditingMode){
            case 0:
                this.currentShape = new Rectangle(DnD.x_init,DnD.y_init,0,0,this.currColour,this.currLineWidth);
                break;
            case 1:
                this.currentShape = new Line(DnD.x_init,DnD.y_init,DnD.x_init,DnD.y_init,this.currColour,this.currLineWidth);
                break;
        }
    }

    onInteractionUpdate(DnD){
        switch(this.currEditingMode){
            case 0:
                this.currentShape.width = DnD.x_final-DnD.x_init;
                this.currentShape.height = DnD.y_final-DnD.y_init;
                break;
            case 1:
                this.currentShape.point2 = [DnD.x_final, DnD.y_final];
                break;
        }
        this.drawing.paint(this.ctx)
        this.currentShape.paint(this.ctx)

    }

    onInteractionEnd(DnD){
        switch(this.currEditingMode){
            case 0:
                this.currentShape.width = DnD.x_final-DnD.x_init;
                this.currentShape.height = DnD.y_final-DnD.y_init;
                break;
            case 1:
                this.currentShape.point2 = [DnD.x_final, DnD.y_final];
                break;
        }
        this.drawing.addForme(this.currentShape,this.ctx);
        this.drawing.updateShapeList();
        this.currentShape=0;
    }
}


