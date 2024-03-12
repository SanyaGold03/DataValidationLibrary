// data-validator.js

const validators = {
    string: (value) => typeof value === 'string',
    number: (value) => typeof value === 'number' && !isNaN(value),
    integer: (value) => Number.isInteger(value),
    array: (value) => Array.isArray(value),
    object: (value) => typeof value === 'object' && value !== null && !Array.isArray(value),
    boolean: (value) => typeof value === 'boolean',
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    minLength: (value, length) => typeof value === 'string' && value.length >= length,
    maxLength: (value, length) => typeof value === 'string' && value.length <= length,
    minValue: (value, min) => typeof value === 'number' && value >= min,
    maxValue: (value, max) => typeof value === 'number' && value <= max,
  };
  
  function validate(data, rules) {
    const errors = {};
  
    for (const key in rules) {
      const rule = rules[key];
      const value = data[key];
      const validator = validators[rule];
  
      if (typeof validator !== 'function') {
        throw new Error(`Validator for rule '${rule}' not found.`);
      }
  
      if (!validator(value, rules[rule])) {
        errors[key] = `Validation failed for rule '${rule}'.`;
      }
    }
  
    return errors;
  }
  
  module.exports = validate;
  