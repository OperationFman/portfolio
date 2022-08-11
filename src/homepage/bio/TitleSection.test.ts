import { timeWorked } from "./TitleSection";

describe("Title Section", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers;
  });

  it("displays correct temporal since career started", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("July 1, 2024 08:59:59"));

    const result = timeWorked();

    expect(result).toEqual({
      years: 2,
      months: 10,
      days: 28,
      hours: 23,
      minutes: 59,
      seconds: 59,
    });
  });
});
