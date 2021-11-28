import filter from "../src/filter";

describe("filter", () => {
  test.skip("should return barney object when filter by active == true", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const predicate = ({ active }) => active
    const output = { user: "barney", active: true }
    expect(filter(users, predicate)).toEqual(output);
  });

  test.skip("should return fred object when filter by active == false", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const predicate = ({ active }) => !active
    const output = { user: "fred", active: false }
    expect(filter(users, predicate)).toEqual(output);
  });
});
