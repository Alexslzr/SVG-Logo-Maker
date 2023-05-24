const {Triangle, Circle, Square} = require('./shapes')

describe('Red Triangle', () => {
    test('should render a red Triangle', () => {
      const expectedShape=`<polygon points="150, 18 244, 182 56, 182" fill="red"/>`;
      const shape = new Triangle('ASL','white','red');
      expect(shape.render()).toEqual(expectedShape);
    });
  });

  describe('Green Circle', () => {
    test('should render a Green Circle with WRX initials in orange', () => {
      const expectedShape=`<circle cx="150" cy="100" r="80" fill="green"/>`;
      const shape = new Circle('WRX','orange','green');
      expect(shape.render()).toEqual(expectedShape);
    });
  });

  describe('Cyan Square', () => {
    test('should render a Cyan Square with LO initials in white', () => {
      const expectedShape=`<rect x="90" y="40" width="120" height="120" fill="cyan"/>`;
      const shape = new Square('LO','white','cyan');
      expect(shape.render()).toEqual(expectedShape);
    });
  });

  describe('white THY', () => {
    test('should render text for white THY for a triangle', () => {
      const expectedText=`<text x="150" y="145" font-size="60" text-anchor="middle" fill="white">THY</text>`;
      const shape = new Triangle('THY','white','red');
      expect(shape.textRender()).toEqual(expectedText);
    });
  });

  describe('orange XYZ', () => {
    test('should render text for orange XYZ', () => {
      const expectedText=`<text x="150" y="120" font-size="60" text-anchor="middle" fill="orange">XYZ</text>`;
      const shape = new Square('XYZ','orange','yellow');
      expect(shape.textRender()).toEqual(expectedText);
    });
  });

  describe('green XD', () => {
    test('should render text for green XD', () => {
      const expectedText=`<text x="150" y="120" font-size="60" text-anchor="middle" fill="green">XD</text>`;
      const shape = new Circle('XD','green','cyan');
      expect(shape.textRender()).toEqual(expectedText);
    });
  });


  
  