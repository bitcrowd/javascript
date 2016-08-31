# eslint-config-bitcrowd-angular

[![npm version](https://badge.fury.io/js/eslint-config-bitcrowd-angular.svg)](http://badge.fury.io/js/eslint-config-bitcrowd-angular)

This package provides Bitcrowd's angular JS `.eslintrc` as an extensible shared config.

It is derived from [eslint-config-bitcrowd-base](https://github.com/bitcrowd/javascript/tree/master/packages/eslint-config-bitcrowd-base) and follows bitcrowd's version numbering so it is easier to relate to the documentation and code from which we derive.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-bitcrowd-angular

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Ensure packages are installed with correct version numbers by running:
  ```sh
  (
    export PKG=eslint-config-bitcrowd-angular;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

  Which produces and runs a command like:

  ```sh
    npm install --save-dev eslint-config-bitcrowd-angular eslint@^3.3.1 eslint-plugin-import@^1.13.0 eslint-plugin-angular eslint-config-angular
  ```

2. Add `"extends": "bitcrowd-angular"` to your `.eslintrc`

### eslint-config-bitcrowd-angular/legacy

Follow all steps as above except adding `"extends": "bitcrowd-angular/legacy"` to your `.eslintrc`

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our `.eslintrc`?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
