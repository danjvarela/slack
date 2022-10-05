import {isEmpty, isNotEmpty} from "./index";

describe("Utils", () => {
  // test("isEmpty", () => {
  //   return expect(1).toBe(1);
  // });

  describe("Sample", () => {
    test("1 should be 1", () => {
      return expect(1).toBe(1);
    });
  });

  describe("isEmpty", () => {
    test("should return true if array is empty", () => {
      const mockArray = [];

      expect(isEmpty(mockArray)).toBeTruthy();
    });

    test("should return true if string is empty", () => {
      const mockString = "";

      expect(isEmpty(mockString)).toBeTruthy();
    });
  });

  describe("isNotEmpty", () => {
    test("should return true if array is not empty", () => {
      const mockArray = [1, 2, 3];

      expect(isNotEmpty(mockArray)).toBeTruthy();
    });

    test("should return false if array is empty", () => {
      const mockArray = [];

      expect(isNotEmpty(mockArray)).toBeFalsy();
    });
  });
});
