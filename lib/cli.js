const inquirer = require('inquirer')
const fs = require('fs')
const {Triangle, Circle, Square} = require('./shapes')
const SVG = require('./svg')

class CLI{
    constructor(){
    this.title = '',
    this.task= [];
    }
    run() {
        return inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'text',
                        message: 'please enter initials, No more than 3 characters',
                    },
                    {
                        type: 'input',
                        name: 'textColor',
                        message: 'please enter color for the title',
                        default: 'can be also in Hexadecimal'
                    },
                    {
                        type: 'list',
                        name: 'shape',
                        message: 'please choose the shape of your Logo',
                        choices: ['circle', 'triangle', 'square']
                    },
                    {
                        type: 'input',
                        name: 'shapeColor',
                        message: 'please enter color for the shape (the background)',
                        default: 'can be also in Hexadecimal'
                    },
                ]).then(({text,textColor,shape,shapeColor}) =>{
                    let data;
                    let form;
                    if(shape === 'circle'){
                        form = new Circle(text,textColor,shapeColor)
                    }
                    if(shape === 'square'){
                        form = new Square(text,textColor,shapeColor)
                    }
                    if(shape === 'triangle'){
                        form = new Triangle(text,textColor,shapeColor)    
                    }
                    form.render()
                    form.textRender()

                    let svg;
                    svg = new SVG();
                    svg.setShape(form);
                    svg.setText(form);
                    data = svg.render() 
                    
                    fs.writeFile('Logo.svg', data, (err) =>
                    err ? console.log(err) : console.log('Successfully created Your Logo!')
                    );
                })
                .catch((error)=>{
                    console.log(error);
                    console.log("There is an error.")
                })
    }
}

module.exports = CLI;
