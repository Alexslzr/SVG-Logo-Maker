const SVG = require('./svg')
const {Triangle, Circle, Square} = require('./shapes')

describe('Red Triangle', () => {
    test('should render a red Triangle with ASL in white', () => {
      const expectedShape=`
        <svg version="1.1" width="300" height="200" xmlns="http>//www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="red"/>
            <text x="150" y="145" font-size="60" text-anchor="middle" fill="white">ASL</text>
        </svg>`;
        const shape = new Triangle('ASL','white','red');
        shape.render()
        shape.textRender()
        let svg;
        svg = new SVG();
        svg.setShape(shape);
        svg.setText(shape); 

      expect(svg.render()).toEqual(expectedShape);
    });
  });

  describe('Green Square', () => {
    test('should render a green square with BIO in white', () => {
      const expectedShape=`
        <svg version="1.1" width="300" height="200" xmlns="http>//www.w3.org/2000/svg">
            <rect x="90" y="40" width="120" height="120" fill="green"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">BIO</text>
        </svg>`;
        const shape = new Square('BIO','white','green');
        shape.render()
        shape.textRender()
        let svg;
        svg = new SVG();
        svg.setShape(shape);
        svg.setText(shape); 

      expect(svg.render()).toEqual(expectedShape);
    });
  });

  describe('Blue Circle', () => {
    test('should render a blue Circle with REF in white in Hexadecimal', () => {
      const expectedShape=`
        <svg version="1.1" width="300" height="200" xmlns="http>//www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="#ffffff">REF</text>
        </svg>`;
        const shape = new Circle('REF','#ffffff','blue');
        shape.render()
        shape.textRender()
        let svg;
        svg = new SVG();
        svg.setShape(shape);
        svg.setText(shape); 

      expect(svg.render()).toEqual(expectedShape);
    });
  });