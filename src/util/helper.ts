/**
 * @func isDev
 *
 * @description
 * Checks if application is running in development environment.
 *
 * @returns {Boolean}
 */
export const isDev = (): boolean => {
  return process.env.NODE_ENV === "development";
};

/**
 * @func isProd
 *
 * @description
 * Checks if application is running in production environment.
 *
 * @returns {Boolean}
 */
export const isProd = (): boolean => {
  return process.env.NODE_ENV === "production";
};

/**
 * @func isOnlyAlphabetic
 *
 * @description
 * Checks if data contains any non-alphabetic character.
 *
 * @param {String} data - Data to check
 *
 * @returns {Boolean}
 */
export const isOnlyAlphabetic = (data: string): boolean => {
  return /^[a-zA-Z]+$/.test(data.trim());
};

/**
 * @func isTooLong
 *
 * @description
 * Checks if data string is longer than necessary.
 *
 * @param {String} data - Data to check
 *
 * @returns {Boolean}
 */
export const isTooLong = (data: string): boolean => {
  return data.trim().length > 52;
};
