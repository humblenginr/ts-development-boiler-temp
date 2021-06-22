/**
 * @packageDocumentation A small library for common math functions
 */

/**
 * Calculate the average of three numbers
 *
 * @param a - first number
 * @param b - second number
 * @param c - third number
 *
 * @public
 */
export const avg = (a: number, b: number, c: number): number =>
  sum3(a, b, c) / 3;

/**
 * Calculate the sum of three numbers
 *
 * @param a - first number
 * @param b - second number
 * @param c - third number
 *
 * @beta
 */
export const sum3 = (a: number, b: number, c: number): number =>
  sum2(a, sum2(b, c));

/**
 * Calculate the sum of two numbers
 *
 * @param a - first number
 * @param b - second number
 *
 * @internal
 */
export const sum2 = (a: number, b: number): number => a + b;
