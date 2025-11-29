
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.wideness;
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.width, this.height);
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.wideness;
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        eltDuTableau.paint(ctx);
    });
};

Drawing.prototype.updateShapeList = function() {
    var shapeList = document.getElementById("shapeList");
    shapeList.innerHTML = "";

    this.getForms().forEach(function(forme, index) {
        var li = document.createElement("li");

        if (forme instanceof Rectangle) {
            li.textContent = "Rectangle(" + Math.round(forme.getInitX()) + ", " + Math.round(forme.getInitY()) + ", " + Math.round(forme.getFinalX()) + ", " + Math.round(forme.getFinalY()) + ")";
        } else if (forme instanceof Line) {
            li.textContent = "Line(" + Math.round(forme.getInitX()) + ", " + Math.round(forme.getInitY()) + ", " + Math.round(forme.getFinalX()) + ", " + Math.round(forme.getFinalY()) + ")";
        }

        shapeList.appendChild(li);
    });
};