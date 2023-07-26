# Description

This is a demonstration to publish npm package publicly and use it.

1. [https://github.com/DonzTea/react-widget](react-widget) (this repo) demonstrating how to publish a react component as public npm package.
2. [https://github.com/DonzTea/react-use-widget](react-use-widget) repo demonstrating how to use published npm package.

## Installation

1. `git clone git@github.com:DonzTea/react-widget.git`
2. `git clone git@github.com:DonzTea/react-use-widget.git`

## Test NPM Package Locally

1. on react-widget, set `"name": "project-name"` in `package.json`
2. on react-widget, set `"main": "./src/index.tsx"` in `package.json`
3. on react-widget, run `npm link`
4. on react-use-widget, run `npm link <project-name>`
5. on react-use-widget, import the package then use it
6. on react-use-widget, run `npm unlink --no-save <project-name>`
7. on react-widget, run `npm unlink --no-save <project-name>`

## Publish NPM Package

1. on react-widget, run `npm login`
2. on react-widget, remove `"private": true` from `package.json`
3. on react-widget, run `npm publish`

## Publish Scoped NPM Package

1. on react-widget, run `npm login`
2. on react-widget, remove `"private": true` from `package.json`
3. on react-widget, change `"name": "project-name"` in `package.json` to `"name": “@username/project-name"`
4. on react-widget, run `npm publish --access=public`
