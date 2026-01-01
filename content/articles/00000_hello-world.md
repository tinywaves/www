---
slug: hello-world
title: Hello World
description: "Welcome to my first blog post. This is a test of MD/MDX rendering."
createdDate: 1970-01-01T00:00:00+00:00
updatedDate: 1970-01-02T00:00:00+00:00
author: Lyle Zheng

tags:
  - Markdown
categories:
  - Technology

draft: false
toc: true
order: 1
keywords:
  - xxx
---

Hello World! This is my first blog post. Below are the Git configuration commands I use:

# heading

## sub-heading

### sub-sub-heading

#### sub-sub-sub-heading

##### sub-sub-sub-sub-heading

This is a paragraph with **bold** text, *italic* text, <u>underlined</u> text, and `inline code`.

- First item in a bulleted list
- Second item in a bulleted list
  - Nested item in a bulleted list
  - Another nested item in a bulleted list

1. First item in a numbered list
2. Second item in a numbered list

> A blockquote to highlight a section of text.

I will try a link: [OpenAI](https://www.openai.com). Seems working.

---

````markdown
```js title="foo.js" caption="caption example" {1,3-4} {8}#del {9}#add hideLineNumbers /tinywaves/
const a = 'Hello';
const b = 'World';
console.log(`${a}, ${b}!`);
console.log(100);

const tinywaves = 'my nickname';

const name = 'Donghui';
const name = 'Lyle';
```
````

The above code block should render like this:

```js title="foo.js" caption="caption example" {1,3-4} {8}#del {9}#add hideLineNumbers /tinywaves/
const a = 'Hello';
const b = 'World';
console.log(`${a}, ${b}!`);
console.log(100);

const tinywaves = 'my nickname';

const name = 'Donghui';
const name = 'Lyle';
```
