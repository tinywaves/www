---
title: "Use Node.js to build a minimalist TS development environment"
publishDate: "24 January 2024"
updatedDate: "25 January 2024"
description: "A blog post documenting using node to start a personal TypeScript development env"
tags: ["TypeScript"]
---

## Install `@types/node`

TS uses the browser environment by default, so you need to install this library to type annotate various properties and methods of node.

```shell
pnpm add typescript -D
pnpm add @types/node -D
```

## Install `ts-node-dev`

Use `ts-node-dev` to implement ts file execution and content change monitoring.

```shell
pnpm add ts-node-dev -D
```

## `package.json`

```json
{
	"devDependencies": {
		"@types/node": "^20.11.5",
		"ts-node-dev": "^2.0.0",
		"typescript": "^5.3.3"
	},
	"scripts": {
		"dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules src/index.ts"
	}
}
```

## `tsconfig.json`

```json
{
	"compilerOptions": {
		"target": "ES2015", // target version of ECMAScript
		"module": "CommonJS", // module system
		"lib": ["ES2015"], // list of library files to be included in the compilation
		"outDir": "./dist" // output directory
	},
	"include": ["./src"] // files to be included in the compilation
}
```

## test

```ts
// src/index.ts
console.log("test");
console.log("test");
```

![ts-env](./images/ts-env.png)
