class Shape{
    constructor(text,textColor,shapeColor){
    this.shapeColor = shapeColor;
    this.text = text;
    this.textColor = textColor;
}
}

class Square extends Shape{
    render(){
        return  `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}"/>`
    }
    textRender(){
        if (this.text.length>3){
            throw new Error("Text should be less than 3 Characters")
        }
        return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}/text>`
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`
    }
    textRender(){
        if (this.text.length>3){
            throw new Error("Text should be less than 3 Characters")
        }
        return `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}/text>`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
    }
    textRender(){
        if (this.text.length>3){
            throw new Error("Text should be less than 3 Characters")
        }
        return `<text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = {Triangle, Circle, Square}



/*
Square
`
        <svg version="1.1" width="300" height="200" xmlns="http>//www.w3.org/2000/svg">
            <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}/text>
        </svg>`
Circle
`
        <svg version="1.1" width="300" height="200" xmlns="http>//www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`

Triangle

`
        <svg version="1.1" width="300" height="200" xmlns="http>//www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
            <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
        */