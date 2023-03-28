import { Roller } from './Roller';

describe("Smoke test", ()=> {
  test("The test scaffold runs successfully.", ()=> {
    expect(true).toBe(true);
  });
})

describe("Roller tests", ()=> {
  test("Roll a valid number and check if the last roll is correct.", () => {
    const roller = new Roller(6);
    const rollValue = 4;
    roller.roll(rollValue);
    expect(roller.last()).toEqual(rollValue);
  });

  test("Roll an invalid number and check if the last roll is still 0.", () => {
    const roller = new Roller(6);
    const invalidRollValue = -1;
    roller.roll(invalidRollValue);
    expect(roller.last()).toEqual(0);
  });

  test("Check if the distribution is updated after rolling the die.", () => {
    const roller = new Roller(6);
    roller.roll(1);
    roller.roll(2);
    roller.roll(3);
    const expectedDistribution = new Map<number, number>();
    expectedDistribution.set(1, 1);
    expectedDistribution.set(2, 1);
    expectedDistribution.set(3, 1);
    expectedDistribution.set(4, 0);
    expectedDistribution.set(5, 0);
    expectedDistribution.set(6, 0);
    expect(roller.distribution()).toEqual(expectedDistribution);
  });

  test("Check if the distribution is correct when rolling the same number multiple times.", () => {
    const roller = new Roller(6);
    roller.roll(1);
    roller.roll(2);
    roller.roll(2);
    roller.roll(3);
    roller.roll(3);
    roller.roll(3);
    const expectedDistribution = new Map<number, number>();
    expectedDistribution.set(1, 1);
    expectedDistribution.set(2, 2);
    expectedDistribution.set(3, 3);
    expectedDistribution.set(4, 0);
    expectedDistribution.set(5, 0);
    expectedDistribution.set(6, 0);
    expect(roller.distribution()).toEqual(expectedDistribution);
  });

  test("Check if the distribution is empty when no rolls have been made.", () => {
    const roller = new Roller(6);
    const expectedDistribution = new Map<number, number>();
    expectedDistribution.set(1, 0);
    expectedDistribution.set(2, 0);
    expectedDistribution.set(3, 0);
    expectedDistribution.set(4, 0);
    expectedDistribution.set(5, 0);
    expectedDistribution.set(6, 0);
    expect(roller.distribution()).toEqual(expectedDistribution);
  });


})


