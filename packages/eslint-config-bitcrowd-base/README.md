# eslint-config-bitcrowd-base

[![npm version](https://badge.fury.io/js/eslint-config-bitcrowd-base.svg)](http://badge.fury.io/js/eslint-config-bitcrowd-base)

This package provides Bitcrowd's base JS `.eslintrc` as an extensible shared config.

It is derived from [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and follows Airbnb's version numbering so it is easier to relate to the documentation and code from which we derive.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-bitcrowd-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=eslint-config-bitcrowd-base;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-bitcrowd-base eslint@^3.3.1 eslint-plugin-import@^1.13.0
  ```

2. Add `"extends": "bitcrowd-base"` to your `.eslintrc`

### eslint-config-bitcrowd-base/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=eslint-config-bitcrowd-base;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev eslint-config-bitcrowd-base eslint@^3.3.1 eslint-plugin-import@^1.13.0
  ```

2. Add `"extends": "bitcrowd-base/legacy"` to your `.eslintrc`

See [Bitcrowd's overarching ESLint config](https://npmjs.com/eslint-config-bitcrowd), [Airbnb's Javascript styleguide](https://github.com/airbnb/javascript), and the [ESLint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our `.eslintrc`?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
