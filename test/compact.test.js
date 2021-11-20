import compact from '../src/compact';

describe("compact", () => {
    test("should remove falsey value - TC fail", () => {
      const input = [0, 1, false, 2, '', 3];
      const output = [1, 2, 3];

      expect(compact(input)).toEqual(output);
    });

    test("should not remove if no falsey value - TC fail", () => {
        const input = [1, 2, 3];
        const output = [1, 2, 3];
        
        expect(compact(input)).toEqual(output);
      });
});