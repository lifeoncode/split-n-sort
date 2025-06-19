# Split 'n Sort

Split 'n Sort is a simple application that takes a single word and returns a version of that word sorted alphabetically. side note - the returned word's likely gonna be gibberish, not a real word🙃

### 🧭 Table of Contents

- [🧮 How it works](#-how-it-works)
- [📦️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🧪 Environment Variables](#-environment-variables)
- [👨‍🔬 Testing](#-testing)
- [📖 API Documentation](#-api-documentation)
- [📄 License](#-license)

### 🧮 How it works

The application takes a single word and splits it into individual characters, sorts the characters alphabetically, and returns them as a word. Here's an example:

- The word received -> "money"
- The word is split into an array of characters -> ["m", "o", "n", "e", "y"]
- The array of characters is sorted alphabetically -> ["e", "m", "n", "o", "y"]
- The sorted array is then turned into a string -> "emnoy"
- Which becomes the returned response word

### 📦️ Tech Stack

- **Language:** TypeScript
- **Runtime:** Node.js
- **Framework:** Express
- **Testing** Jest + Supertest
- **Hosting:** Render

### 🚀 Getting Started

To run this application in your local environment, you're gonna need a few things first:

- A terminal, obviously😌
- Node.js v18+
- npm

Clone the Repository

```
git clone https://github.com/lifeoncode/split-n-sort
cd split-n-sort
npm install
```

Start the Server

```
npm run dev
```

Server will run on http://localhost:4000

### 🧪 Environment Variables

See [.env.example](.env.example) for all available variables and instructions.

### 👨‍🔬 Testing

This is a pretty small application and testing's probably not necessary, but I thought I'd just do it anyway. Split -n Sort uses [Jest](https://jestjs.io/) and [Supertest](https://github.com/ladjs/supertest) for testing.

To run tests locally:

```
npm run test
```

Tests cover:

- Helper functions
- Status endpoint
- Word endpoint
- Error handling

### 🤖 Continuous Integration (CI)

All tests are automatically run on every push or pull request to the main branch. Have a look at the [.github/workflows/ci.yml](.github/workflows/ci.yml) for steps included in this process.

### 📖 API Documentation

There's only 2 endpoints.

```
GET https://split-n-sort.onrender.com/api/status
```

Checks application status

```
POST https://split-n-sort.onrender.com/api/word
```

Performs split and sorting on a given word

### 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
