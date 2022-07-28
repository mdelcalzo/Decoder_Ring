const substitution = require("../src/substitution").substitution;
const expect = require("chai").expect;

describe("substitution() submission tests written by ME!", () => {
  describe("error handling", () =>{
    it("Should return false if substitution alphabet is missing.", () => {
      const actual = substitution("thinkful"); 
      const expected = false;
      expect(actual).to.eql(expected);
      });
    it("Should return false if substitution alphabet is not exactly 26 characters.", () => {
      const actual = substitution("thinkful", "short");
      const expected = false;
      expect(actual).to.eql(expected);
      });
    it("Should return false if substitution alphabet does not contain unique characters.", () => {
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
      const expected = false;
      expect(actual).to.eql(expected);
      });});
  describe("encoding", () => {
    it("Should encode a message by using the substitution alphabet", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "jrufscpw";
      expect(actual).to.eql(expected);
    });
    it("Should work with any kind of key with special characters", () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      const expected = "y&ii$r&";
      expect(actual).to.eql(expected);
    })
    it("All spaces are maintained.", () => {
      const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); 
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.eql(expected);
      });
    it("Ignores capital letters", () => {
      const actual = substitution("YOU ARE AN EXCELLENT SPY", "xoyqmcgrukswaflnthdjpzibev", true); 
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.eql(expected);
      });});
  describe("decoding", () => {
    it("Should decode a message by using the substitution alphabet", () => {
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "thinkful";
      expect(actual).to.eql(expected);
    });
    it("Should work with any kind of key with special characters", () => {
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
      const expected = "message";
      expect(actual).to.eql(expected);
    })
    it("All spaces are maintained.", () => {
      const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false); 
      const expected = "you are an excellent spy";
      expect(actual).to.eql(expected);
      });
    it("Ignores capital letters", () => {
      const actual = substitution("ELP XHM XF MBYMWWMFJ DNE", "xoyqmcgrukswaflnthdjpzibev", false); 
      const expected = "you are an excellent spy";
      expect(actual).to.eql(expected);
      });});
});
