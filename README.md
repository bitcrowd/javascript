# Bitcrowd JavaScript Style Guide

Derived from https://github.com/airbnb/javascript.

## ESLint Configuration

Our ESLint configuration comes in 2 flavours:

1. [`eslint-config-bitcrowd-base`](packages/eslint-config-bitcrowd-base)
  - provides our base linting configuration for ECMAScript 6+ applications
  - contains alternate config for applications written in ES5 and below
2. [`eslint-config-bitcrowd-react`](packages/eslint-config-bitcrowd-react)
  - for ES6+ linting and additional rules for React applications
3. [`eslint-config-bitcrowd-angular`](packages/eslint-config-bitcrowd-angular)
  - for ES6+ linting and additional rules for Angular applications
  - for ES5 and below linting and additional rules for Angular applications

Install the package which fits your current project and create an `.eslintrc`
file ([example](linters/.eslintrc.json)). We recommend setting `"root": true`
so as to avoid system-specific differences in linting behaviour.

In order to adapt the ESLint configuration for parts of the project tree,
you can drop additional `.eslintrc` files into into specific subdirectories.

For instance, in a project that uses Jasmine for testing,
create a `spec/.eslintrc.json` and add the following:

```json
{
  "env": {
    "jasmine": true
  }
}
```

ESLint will pick up this file in addition to the one in the project root via [configuration cascading](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy).
