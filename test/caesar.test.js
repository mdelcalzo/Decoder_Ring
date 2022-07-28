const caesar = require("../src/caesar").caesar;
const expect = require("chai").expect;

describe("caesar() submission tests written by ME!", () => {
  describe("error handling", () => {
    it("Should return false if shift isn't present.", () => {
      const actual = caesar("thinkful"); 
      const expected = false;
      expect(actual).to.eql(expected);
      });
    it("Should return false if shift is equal to 0.", () => {
      const actual = caesar("thinkful", 0);
      const expected = false;
      expect(actual).to.eql(expected);
      });
    it("Should return false if shift greater than 25.", () => {
      const actual = caesar("thinkful", 99);
      const expected = false;
      expect(actual).to.eql(expected);
      });
    it("Should return false if shift is less than -25.", () => {
      const actual = caesar("thinkful", -26);
      const expected = false;
      expect(actual).to.eql(expected);
      });});
  describe("encoding", () => {
    it("Should encode a message by shifting the letters.", () => {
        const actual = caesar("thinkful", 3); 
        const expected = "wklqnixo";
        expect(actual).to.eql(expected);
    });  
    it("Should allow for a negative shift that will shift to the left.", () => {
      const actual = caesar("thinkful", -3); 
      const expected = "qefkhcri";
      expect(actual).to.eql(expected);
    });
    it("If symbol is nonalphabetic, it should be maintained.", () => {
      const actual = caesar("This is a secret message!", 8); 
      const expected = "bpqa qa i amkzmb umaaiom!";
      expect(actual).to.eql(expected);
      });
    it("Ignores capital letters", () => {
      const actual = caesar("THIS IS A SECRET MESSAGE!", 8); 
      const expected = "bpqa qa i amkzmb umaaiom!";
      expect(actual).to.eql(expected);
      });
    it("Wraps around to the beginning or end of the alphabet.", () => {
      const actual = caesar("thinkful", 3); 
      const expected = "wklqnixo";
      expect(actual).to.eql(expected);
    });});
  describe("decoding", () => {
    it("Should decode a message by shifting the letters in the opposite direction.", () => {
        const actual = caesar("wklqnixo", 3, false); 
        const expected = "thinkful";
        expect(actual).to.eql(expected);
    });  
    it("Should allow for a negative shift that will shift to the left.", () => {
      const actual = caesar("qefkhcri", -3, false); 
      const expected = "thinkful";
      expect(actual).to.eql(expected);
    });
    it("If symbol is nonalphabetic, it should be maintained.", () => {
      const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false); 
      const expected = "this is a secret message!";
      expect(actual).to.eql(expected);
      });
    it("Ignores capital letters", () => {    
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false); 
      const expected = "this is a secret message!";
      expect(actual).to.eql(expected);
      });
    it("Wraps around to the beginning or end of the alphabet.", () => {
      const actual = caesar("wklqnixo", 3, false); 
      const expected = "thinkful";
      expect(actual).to.eql(expected);
    });});
});
  
