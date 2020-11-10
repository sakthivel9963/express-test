const { expect } = require('chai');

function title(value) {
  const splitValue = value.split(' ');
  const newValue = splitValue
    .map((element) => element[0].toUpperCase() + element.substring(1))
    .join(' ');
  return newValue;
}

expect(title('Welcome All!!!')).to.be.a('string');
expect(title('a')).to.equal('A');
expect(title('welcome')).to.equal('Welcome');
expect(title('welcome all!!!')).to.equal('Welcome All!!!');
