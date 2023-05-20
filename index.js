const inquirer = require('inquirer')
const fs = require('fs')

const settings = [
    {
        type: 'input',
        name: 'title',
        message: 'please enter initials',
        default: 'No more than 3 characters'
    },
    {
        type: 'input',
        name: 'colortitle',
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
        name: 'shapecolor',
        message: 'please enter color for the shape (the background)',
        default: 'can be also in Hexadecimal'
    },
]



function init(){
inquirer
    .prompt(settings)
    .then((answers)=>{
        const logoContent = generateLogo(answers);
        fs.writeFile('logo.svg', logoContent, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
        );
    })

}

init();