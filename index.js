const name = "Joe";
const height = 74;
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
const { expect } = require("chai");
const {name, height, message } = require("../index.js");
/*
describe('what-is-a-test',() => {
    describe('name', () => {
        it('returns "susan"', () => {
            expect(name).toEqual('susan')
        })
    })

describe('Height', () => {
    it('is less than40', () => {
        expect(height).toBeLessThan(40)
    })
})    

describe('message', () => {
    it('gives the name and height', () => {
        expect(message).toInclude(name)
        expect(message).toInclude(height)
    })
  })
})
*/

describe("Name", ()=> {
    it('returns "susan"', () => {
        expect(name).lessThanOrEqual("susan");
    });
});
describe("Height", () => {
    it("is less than 40", () => {
        expect(height).toBeLessThan(40);
    });
});
describe("message", () => {
    it("gives the name and height", () => {
        expect(message).toInclude(name);
        expect(message).toInclude(height);
    });
});