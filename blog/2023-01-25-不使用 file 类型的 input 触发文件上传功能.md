---
title: 不使用 file 类型的 input 触发文件上传功能
slug: 不使用 file 类型的 input 触发文件上传功能
authors: tr
tags: [HTML, JavaScript]
---

<!--truncate-->

文件上传功能可以使用 HTML 元素：`<input type="file" />`，可以通过`accept`属性指定选择的文件类型，`directory`属性指定是否可以选择文件夹，`capture`属性指定前置或后置摄像头。总体来讲是可以满足文件上传的基本需求的，但是原生的 input 元素对于 UI 的定制化过于繁琐，具体实现可以参考：[HTML input type=file文件选择表单元素二三事](https://www.zhangxinxu.com/wordpress/2015/11/html-input-type-file/)。

想要实现点击任何类型的元素都触发文件选择功能，可以使用`File System Access API`，功能虽然好用，但是兼容性较差：
- https://caniuse.com/?search=showOpenFilePicker
- https://caniuse.com/?search=showDirectoryPicker

### 打开文件选择

```js
element.addEventListener("click", () => {
  window.showOpenFilePicker();
});
```

### 打开文件夹选择

```js
element.addEventListener("click", () => {
  window.showDirectoryPicker();
});
```

### options

在上述两个方法中可以传入可选参数：`showOpenFilePicker(options)`/`showDirectoryPicker(options)`。

- **multiple**
  - 多选，默认值为 false，表示只能选择一个文件。
- **excludeAcceptAllOption**
  - 默认值是 false，表示是否排除 types 中指定的所有 accept 文件类型。
- **types**
  - 数组，指定可选文件类型。
  - **description**：描述当前类型。
  - **accept**：
