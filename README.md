# Bitcrowd JavaScript Guide

Apart from our development processes and practices, we are employing additional
methods for ensuring high code quality:

1. *Linting* ensures that code is written in a consistent style and conforms to
   pre-defined standards.
2. *Tests* are useful as a design tool, for documenting your code and making
   sure it works correctly. Good tests allow you to change your code's
   structure without breaking its behaviour, during refactorings for instance.
3. *Metrics* help you understand how code changes affect various measurable
   characteristics of your code.

Tool-support has gotten pretty good, so all of these are rather quick to set
up. Where possible checks should be automated and have shareable configs.

## ESLint Configuration

Our ESLint configuration is derived from
[Airbnb's](https://github.com/airbnb/javascript).

It comes in different flavours:

1. [`eslint-config-bitcrowd-base`](packages/eslint-config-bitcrowd-base)
  - provides our base linting configuration for ECMAScript 6+ applications
  - contains alternate config for applications written in ES5 and below
2. [`eslint-config-bitcrowd-react`](packages/eslint-config-bitcrowd-react)
  - for ES6+ linting and additional rules for React applications
3. [`eslint-config-bitcrowd-angular`](packages/eslint-config-bitcrowd-angular)
  - for ES6+ linting and additional rules for Angular applications
  - for ES5 and below linting and additional rules for Angular applications

Install the package which fits your current project and create an `.eslintrc`
file ([example](templates/.eslintrc.json)). We recommend setting `"root": true`
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

## Testing

Your code should have tests.

So far, we've been mostly using
[Jasmine](https://github.com/jasmine/jasmine-npm) which should look rather
familiar if you've used RSpec before and it also has integrations for
[Ruby](https://github.com/jasmine/jasmine-gem) and
[Python](https://github.com/jasmine/jasmine-py). But that is a recommendation
rather than a must.

When you're testing React code, use [Enzyme](https://github.com/airbnb/enzyme).

If you ever need a headless DOM in Node.js take a look at
[jsdom](https://github.com/tmpvar/jsdom).

For a usage sample of Jasmine, Enzyme and jsdom, you can head over to the
Tickety Tick [repo](https://github.com/bitcrowd/tickety-tick).

When using Jasmine, be sure to enable random test execution order which -
unfortunately - is not the default. In `spec/support/jasmine.json`, set:

```json
{
  "random": true
}
```

## Metrics

While *code metrics* should always be taken with a grain of salt, they can
provide rather useful insights into how code changes affect code quality.

Such metrics may be derived from *static analysis* of the source code or even
describe *runtime characteristics* of the software.

A metric we may want to use more often is *code coverage*. A popular tool to
measure code coverage is [istanbuljs/nyc](https://github.com/istanbuljs/nyc).
For an example project that uses `nyc` to measure coverage take a look at
[Tickety Tick](https://github.com/bitcrowd/tickety-tick).

There a services that allow you to push coverage information, create project
badges and keep a "coverage history" for additional insights. They can be
integrated into continuous integration tools and services (e.g. Travis CI).
Two popular services are: [coveralls.io](https://coveralls.io/) and
[codecov.io](https://codecov.io/).

<!-- TODO: Add notes on benchmarking? -->
