# Data Validation Library

A simple JavaScript library for validating data inputs.

## Installation

You can install the library via npm:

```bash
npm install data-validator
```

## Usage

### Basic Example

```javascript
const validate = require('data-validator');

const data = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};

const rules = {
  name: 'string',
  age: 'number',
  email: 'email'
};

const errors = validate(data, rules);

if (Object.keys(errors).length === 0) {
  console.log('Data is valid!');
} else {
  console.error('Validation errors:', errors);
}
```

## Available Validators

- `string`: Validates that the value is a string.
- `number`: Validates that the value is a number.
- `integer`: Validates that the value is an integer.
- `array`: Validates that the value is an array.
- `object`: Validates that the value is an object.
- `boolean`: Validates that the value is a boolean.
- `email`: Validates that the value is a valid email address.
- `minLength`: Validates that the string value has a minimum length.
- `maxLength`: Validates that the string value has a maximum length.
- `minValue`: Validates that the number value is greater than or equal to a minimum value.
- `maxValue`: Validates that the number value is less than or equal to a maximum value.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
