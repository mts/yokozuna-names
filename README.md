# yokozuna-names

[![travis build](https://img.shields.io/travis/mts/yokozuna-names.svg?style=flat-square)](https://travis-ci.org/mts/yokozuna-names)
[![codecov coverage](https://img.shields.io/codecov/c/github/codecov/example-python.svg?style=flat-square)](https://codecov.io/github/mts/yokozuna-names)
[![version](https://img.shields.io/npm/v/yokozuna-names.svg?style=flat-square)](http://npm.im/yokozuna-names)
[![downloads](https://img.shields.io/npm/dm/yokozuna-names.svg?style=flat-square)](http://npm-stat.com/charts.html?package=yokozuna-names&from=2018-10-13)
[![MIT License](https://img.shields.io/npm/l/yokozuna-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random Yokozuna (Grand Sumo) names.

![Logo](/logo.png)

## Installation

This package is distributed via npm:

```
npm install yokozuna-names
```

## Usage

```javascript
var names = require('yokozuna-names');
var allNames = names.all;
var randomName = names.random();
var sevenRandomNames = names.random(7);
```

### Project Setup

This project assumes you have [NodeJS v6](http://nodejs.org/) or greater installed. You should
also have [npm v3](https://www.npmjs.com/) or greater installed as well (this comes packaged
with Node 6). You'll also need a recent version of [git](https://git-scm.com/) installed
as well.

1. [Sign up](https://github.com/join) for a GitHub Account (if you don't already have one)
2. [Fork](https://help.github.com/articles/fork-a-repo/) this repo
3. [Clone](https://help.github.com/articles/cloning-a-repository/) your fork
4. In the directory you cloned the repository, run `git fetch --all`
