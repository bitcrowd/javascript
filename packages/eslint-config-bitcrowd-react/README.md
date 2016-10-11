# eslint-config-bitcrowd-react

[![npm version](https://badge.fury.io/js/eslint-config-bitcrowd-react.svg)](http://badge.fury.io/js/eslint-config-bitcrowd-react)

This package provides Bitcrowd's `.eslintrc` as an extensible shared config.

It is derived from [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) and follows Airbnb's version numbering so it is easier to relate to the documentation and code from which we derive.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-bitcrowd-react

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=eslint-config-bitcrowd-react;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-bitcrowd-react eslint@^3.3.1 eslint-plugin-jsx-a11y@^2.1.0 eslint-plugin-import@^1.13.0 eslint-plugin-react@^6.1.0
  ```

2. Add `"extends": "bitcrowd-react"` to your `.eslintrc`

See [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our `.eslintrc`?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
