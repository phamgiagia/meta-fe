import { fetchAPI, submitAPI, createDateFromString, seededRandom } from "./api";

describe("seededRandom", () => {
  it("should return consistent random numbers for the same seed", () => {
    const random1 = seededRandom(1234);
    const random2 = seededRandom(1234);
    const sequence1 = [random1(), random1(), random1()];
    const sequence2 = [random2(), random2(), random2()];
    expect(sequence1).toEqual(sequence2);  // Consistent random sequence for the same seed
  });

  it("should return different random numbers for different seeds", () => {
    const random1 = seededRandom(1234);
    const random2 = seededRandom(5678);
    expect(random1()).not.toBe(random2());  // Different random numbers for different seeds
  });
});

describe("fetchAPI", () => {
  it("should generate available times based on the date", () => {
    const mockDate = new Date("2025-01-09");
    const availableTimes = fetchAPI(mockDate);
    expect(availableTimes).toBeInstanceOf(Array);
    expect(availableTimes.length).toBeGreaterThan(0);  // Should have some available times
    expect(availableTimes.every(time => typeof time === 'string')).toBe(true);  // Ensure all times are strings
  });

  it("should generate times for hours between 17 and 23", () => {
    const mockDate = new Date("2025-01-09");
    const availableTimes = fetchAPI(mockDate);
    const validTimes = availableTimes.every(time => {
      const hour = parseInt(time.split(":")[0], 10);
      return hour >= 17 && hour <= 23;
    });
    expect(validTimes).toBe(true);  // All times should be between 17 and 23 hours
  });
});

describe("submitAPI", () => {
  it("should return true for valid form data", () => {
    const formData = { name: "John Doe", date: new Date().toISOString(), time: "18:00", guests: 5, occasion: "Birthday" };  // Example form data
    const result = submitAPI(formData);
    expect(result).toBe(true);  // The function always returns true
  });
});

describe("createDateFromString", () => {
  it("should correctly create a Date object from a time string", () => {
    const timeString = "18:30";
    const result = createDateFromString(timeString);
    expect(result).toBeInstanceOf(Date);  // Should be a Date object
    expect(result.getHours()).toBe(18);  // Should have the correct hour
    expect(result.getMinutes()).toBe(30);  // Should have the correct minutes
  });

  it("should set seconds and milliseconds to 0", () => {
    const timeString = "18:30";
    const result = createDateFromString(timeString);
    expect(result.getSeconds()).toBe(0);  // Should have seconds set to 0
    expect(result.getMilliseconds()).toBe(0);  // Should have milliseconds set to 0
  });
});
