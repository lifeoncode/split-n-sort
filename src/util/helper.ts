const ENVIRONMENT = process.env.NODE_ENV;

/**
 * @func isDev
 *
 * @description
 * Checks if application is running in development environment.
 *
 * @returns {Boolean}
 */
export const isDev = (): boolean => {
  return ENVIRONMENT === "development";
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
  return ENVIRONMENT === "production";
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
