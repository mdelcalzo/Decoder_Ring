const polybius = require("../src/polybius").polybius;
const expect = require("chai").expect;

describe("polybius() submission tests written by ME!", () => {
  describe("encoding", () => {
    it("Should encode message by translating each letter to it's number pairs.", () => {
      const actual = polybius("thinkful");
      const expected = "4432423352125413";
      expect(actual).to.eql(expected);
    });
    it("Should translate 'i' and 'j' to '42'.", () => {
      const actual = polybius("ijij");
      const expected = "42424242";
      expect(actual).to.eql(expected);
    });
    it("Output should be a string.", () => {
      const actual = polybius("thinkful"); 
      const expected = "4432423352125413";
      expect(actual).to.be.a("string");
      expect(actual).to.eql(expected);
    });  
    it("Spaces should be maintained.", () => {
      const actual = polybius("hello world"); 
      const expected = "3251131343 2543241341";
      expect(actual).to.eql(expected);
      });
    it("Ignores capital letters", () => {
      const actual = polybius("HELLO WORLD"); 
      const expected = "3251131343 2543241341";
      expect(actual).to.eql(expected);
      });});
  describe("decoding", () => {
    it("Should decode message by translating each number pair to it's letter.", () => {
      const actual = polybius("44513444", false);
      const expected = "test";
      expect(actual).to.eql(expected);
    });
    it("Should translate '42' to both 'i' and 'j'.", () => {
      const actual = polybius("4432423352125413", false);
      const expected = "th(i/j)nkful";
      expect(actual).to.eql(expected);
    });
    it("Output should be a string.", () => {
      const actual = polybius("4432423352125413", false); 
      const expected = "th(i/j)nkful";
      expect(actual).to.be.a("string");
      expect(actual).to.eql(expected);
    });  
    it("Spaces should be maintained.", () => {
      const actual = polybius("3251131343 2543241341", false); 
      const expected = "hello world";
      expect(actual).to.eql(expected);
      });
    it("Should return false if the length of the input numbers is odd.", () => {
      const actual = polybius("443242335212541", false);
      const expected = false;
      expect(actual).to.eql(expected);
    });});
});