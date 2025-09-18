
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
class DnD{
    constructor(canvas){
        this.x_init = 0;
        this.y_init = 0;
        this.x_final = 0;
        this.y_final = 0;
        this.canvas = canvas;
        this.isPressed = false;

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        this.canvas.addEventListener('mousedown', this.onMouseDown);
        this.canvas.addEventListener('mousemove', this.onMouseMove);
        this.canvas.addEventListener('mouseup', this.onMouseUp);
    }

    onMouseUp(evt){
        if (this.isPressed) {
            var mouseCoord = getMousePosition(this.canvas,evt);
            this.x_final = mouseCoord.x;
            this.y_final = mouseCoord.y;
            this.isPressed = false;
            console.log("mouseUp", mouseCoord);
        }

    }

    onMouseDown(evt){
        var mouseCoord = getMousePosition(this.canvas,evt);
        this.isPressed = true;
        this.x_init = mouseCoord.x;
        this.y_init = mouseCoord.y;
        console.log("mouseDown", mouseCoord);
    }

    onMouseMove(evt){
        if (this.isPressed) {
            var mouseCoord = getMousePosition(this.canvas,evt);
            this.x_final = mouseCoord.x;
            this.y_final = mouseCoord.y;
            console.log("mouseMove", mouseCoord);
        }
    }
}
// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}



