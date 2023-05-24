const {Triangle, Circle, Square} = require('./shapes')

class SVG{
    constructor(){
        this.ShapeEl='';
        this.TextEl='';
    }
    render(){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http>//www.w3.org/2000/svg">${this.ShapeEl}${this.TextEl}</svg>
        `
    }
    setShape(shape){
        this.ShapeEl = shape.render();
    }
    setText(shape){
        this.TextEl = shape.textRender();
    }
}

module.exports = SVG;