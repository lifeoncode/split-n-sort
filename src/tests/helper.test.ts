import { isDev, isOnlyAlphabetic, isProd, isTooLong } from "../util/helper";

describe("Environment Checks", () => {
  const ORIGINAL_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...ORIGINAL_ENV };
  });

  afterAll(() => {
    process.env = ORIGINAL_ENV;
  });

  test('isDev returns true when NODE_ENV is "development"', () => {
    process.env.NODE_ENV = "development";
    expect(isDev()).toBe(true);
    expect(isProd()).toBe(false);
  });

  test('isProd returns true when NODE_ENV is "production"', () => {
    process.env.NODE_ENV = "production";
    expect(isProd()).toBe(true);
    expect(isDev()).toBe(false);
  });
});

describe("isOnlyAlphabetic", () => {
  test("returns true for alphabetic strings", () => {
    expect(isOnlyAlphabetic("nelson")).toBe(true);
    expect(isOnlyAlphabetic("WORLD")).toBe(true);
    expect(isOnlyAlphabetic("NelsonDev")).toBe(true);
  });

  test("returns false for strings with numbers", () => {
    expect(isOnlyAlphabetic("hello123")).toBe(false);
    expect(isOnlyAlphabetic("123")).toBe(false);
  });

  test("returns false for strings with spaces or symbols", () => {
    expect(isOnlyAlphabetic("Nelson development")).toBe(false);
    expect(isOnlyAlphabetic("hello!")).toBe(false);
    expect(isOnlyAlphabetic("hi-there")).toBe(false);
  });

  test("trims input and still works", () => {
    expect(isOnlyAlphabetic("  hello  ")).toBe(true);
    expect(isOnlyAlphabetic("  hey123  ")).toBe(false);
  });

  test("returns false for empty strings", () => {
    expect(isOnlyAlphabetic("")).toBe(false);
    expect(isOnlyAlphabetic("   ")).toBe(false);
  });
});

describe("isTooLong", () => {
  test("returns false for empty string", () => {
    expect(isTooLong("")).toBe(false);
  });

  test("returns false for short strings (< 52 chars)", () => {
    const shortStr = "a".repeat(10);
    expect(isTooLong(shortStr)).toBe(false);
  });

  test("returns false for string exactly 52 characters", () => {
    const exactStr = "x".repeat(52);
    expect(isTooLong(exactStr)).toBe(false);
  });

  test("returns true for string longer than 52 characters", () => {
    const longStr = "y".repeat(53);
    expect(isTooLong(longStr)).toBe(true);
  });
});
