const { expect } = require('chai');
const { title } = require('./index');

describe('mocha', () => {
  it('should run test', () => {
    expect(true).to.be.true;
  });
});

describe('title', () => {
  it('should be string', () => {
    expect(title('Welcome All!!!')).to.be.a('string');
  });
  it('should be A', () => {
    expect(title('a')).to.equal('A');
  });
  it('should be Welcome', () => {
    expect(title('welcome')).to.equal('Welcome');
  });
  it('should be Welcome All!!!', () => {
    expect(title('welcome all!!!')).to.equal('Welcome All!!!');
  });
});
