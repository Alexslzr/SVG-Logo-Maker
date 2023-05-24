const {Triangle, Circle, Square} = require('./shapes')

describe('Red Triangle', () => {
    test('should render a red Triangle with ASL initials in white', () => {
      const expectedShape=`
        <svg version="1.1" width="300" height="200" xmlns="http>//www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="red"/>
            <text x="150" y="145" font-size="60" text-anchor="middle" fill="white">ASL</text>
        </svg>`;

      const shape = new Triangle('ASL','white','red');
      expect(shape.render()).toEqual(expectedShape);
    });
  });

  describe('Green Circle', () => {
    test('should render a Green Circle with WRX initials in orange', () => {
      const expectedShape=`
        <svg version="1.1" width="300" height="200" xmlns="http>//www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="green"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="orange">WRX</text>
        </svg>`;

      const shape = new Circle('WRX','orange','green');
      expect(shape.render()).toEqual(expectedShape);
    });
  });

  describe('Cyan Square', () => {
    test('should render a Cyan Square with LO initials in white', () => {
      const expectedShape=`
        <svg version="1.1" width="300" height="200" xmlns="http>//www.w3.org/2000/svg">
            <rect x="90" y="40" width="120" height="120" fill="cyan"/>
            <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">LO/text>
        </svg>`;
      const shape = new Square('LO','white','cyan');
      expect(shape.render()).toEqual(expectedShape);
    });
  });

  
  