
/**
 * Greets someone by name.
 */
export function greet(name) {
  return `Hello, ${name}!`;
}

/**
 * Doubles a number.
 */
export const double = (n) => n * 2;

/**
 * Takes a percentage off a price.
 */
export const applyDiscount = (amount, percent) => {
  return amount - (amount * percent) / 100;
};

/**
 * Formats an amount with a currency.
 */
export const formatPrice = (amount, currency = "EGP") => {
  return `${amount} ${currency}`;
};

/**
 * Applies a function twice to a value.
 */
export function applyTwice(fn, value) {
  return fn(fn(value));
}
