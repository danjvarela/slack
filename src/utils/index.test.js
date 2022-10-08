import {isEmpty} from ".";

describe("utils", () => {
  describe("isEmpty", () => {
    it("should return true if an empty array is passed", () => {
      expect(isEmpty([])).toEqual(true);
    });

    it("should return false if a number or boolean is passed", () => {
      expect(isEmpty(1)).toEqual(false);
      expect(isEmpty(false)).toEqual(false);
    });

    it("should return true if an empty object is passed", () => {
      expect(isEmpty({})).toEqual(true);
    });

    it("should return true if an empty string is passed", () => {
      expect(isEmpty("")).toEqual(true);
    });

    it("should return true if a string consisting of only whitespaces is passed", () => {
      expect(isEmpty("  \n\n")).toEqual(true);
    });

    it("should return true if null or undefined is passed", () => {
      expect(isEmpty(undefined)).toEqual(true);
      expect(isEmpty(null)).toEqual(true);
    });
  });
});
