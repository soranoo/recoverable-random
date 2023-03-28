# recoverable-random
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)&nbsp;&nbsp;&nbsp;[![Donation](https://img.shields.io/static/v1?label=Donation&message=❤️&style=social)](https://github.com/soranoo/Donation)

A recoverable number generator that generates pseudorandom integer or floating-point numbers within a given range.

## 🗝️ Features
* Recoverable
* Supports float and integer
* Supports seed
* Supports TypeScript
* Zero dependencies

## 🚀 Getting Started
### Installation
```bash
npm install recoverable-random
```

### Import
```typescript
// ES6
import NumberGenerator from "recoverable-random";

// CommonJS
const NumberGenerator = require("recoverable-random").default;
```

### Usage Example~ 🍀
```typescript
// import the module
import NumberGenerator from "recoverable-random";
// or
const NumberGenerator = require("recoverable-random").default;

// create a generator instance
const generator = new NumberGenerator("seed");

// generate a random integer between 0 and 9
console.log(generator.random(0, 10));
// >>> 6

// generate a random floating-point number between 0 and 9
console.log(generator.random(0, 10, true));
// >>> 1.458055829850764 

// get the state code of the generator
const stateCode = generator.getStateCode();

console.log(generator.random(0, 10));
// >>> 6
console.log(generator.random(0, 10));
// >>> 8

// recover the state of the generator
generator.recoverState(stateCode);

console.log(generator.random(0, 10));
// >>> 6
console.log(generator.random(0, 10));
// >>> 8
```
## 📖 API Reference
### Constructor

#### Creates a new instance of the NumberGenerator class.

```typescript
new NumberGenerator(seed?: number | string)
```

| Parameter | Optional | Type | Default | Description |
|-|-|-|-|-|
| seed | Yes | number \| string | undefined | The seed value of the generator. |

### Methods

#### Generates a pseudorandom number within the specified range.

```typescript
random(min: number, max: number, isFloat?: boolean)
```

| Parameter | Optional | Type | Default | Description |
|-|-|-|-|-|
| min | No | number | - | The minimum value of the range. |
| max | No | number | - | The maximum value of the range. |
| isFloat | Yes | boolean | false | Whether the generated number is a floating-point number. |

| Return Type | Description |
|-|-|
| number | The generated number. |


#### Gets the state code of the generator.

```typescript
getStateCode()
```

| Return Type | Description |
|-|-|
| string | The state code of the generator. |


#### Recovers the state of the generator.

```typescript
recoverState(stateCode: string)
```

| Parameter | Optional | Type | Default | Description |
|-|-|-|-|-|
| stateCode | No | string | - | The state code of the generator. |

## 🤝 Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you want to contribute code, please fork the repository and submit a pull request.

Before you open a pull request, please make sure that you run `npm run dev:test` to make sure the code run as expected.


## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## ☕ Donation
Love the program? Consider a donation to support my work.

[!["Donation"](https://raw.githubusercontent.com/soranoo/Donation/main/resources/image/DonateBtn.png)](https://github.com/soranoo/Donation) <- click me~