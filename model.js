class Drawing{
    constructor() {
        this.formes = [];
    }
}

class Forme{
    constructor(color,wideness) {
        this.color = color;
        this.wideness = wideness;
    }
    setColor(color){
        this.color = color;
    }
}

class Rectangle extends Forme{
    constructor(initPoint_x,initPoint_y,width,height,color,wideness) {
        super(color,wideness);
        this.width = width;
        this.height = height;
        this.initPoint = [initPoint_x,initPoint_y];
    }

    getInitX(){
        return this.initPoint[0];
    }
    getInitY(){
        return this.initPoint[1];
    }
    getFinalX(){
        return this.initPoint[0]+this.width;
    }
    getFinalY(){
        return this.initPoint[1]+this.height;
    }
}

class Line extends Forme{
    constructor(point1_x,point1_y,point2_x,point2_y,color,wideness) {
        super(color,wideness);
        this.point1 = [point1_x,point1_y];
        this.point2 = [point2_x,point2_y];
    }

    getInitX(){
        return this.point1[0];
    }
    getInitY(){
        return this.point1[1];
    }
    getFinalX(){
        return this.point2[0];
    }
    getFinalY(){
        return this.point2[1];
    }
}


// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
