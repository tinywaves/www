---
slug: javascript-this
title: JavaScript 的 this 指向
authors: [dzh]
tags: [JavaScript]
---

<!-- truncate -->

在`浏览器环境`下，全局下的 this 绑定`window`，在`Node 环境`下，全局下的 this 绑定一个空对象`{}`。

# 在普通函数中 this 的绑定规则

this 是`动态绑定`的，即在`函数运行时`才能确定 this 的指向，与 this`出现的位置没有关系`，因此在`编译时不能确定 this 的指向`。

## Ⅰ 默认绑定

**独立的函数调用**可以理解成函数没有被绑定到某个对象上进行调用。在严格模式下，this 为`undefined`；在非严格模式下，浏览器环境中的 this 绑定为`window`，Node 环境中的 this 绑定为`global`。

```javascript
// 案例一
function foo() {
  console.log(this); // window
}
foo();

// 案例二
function foo1() {
  console.log(this); // window
}
function foo2() {
  console.log(this); // window
  foo1();
}
function foo3() {
  console.log(this); // window
  foo2();
}
foo3();

// 案例三
var obj = {
  foo: function () {
    console.log(this);
  }
};
var bar = obj.foo;
bar(); // window

// 案例四
function foo() {
  console.log(this);
}
var obj = {
  foo: foo
};
var bar = obj.foo;
bar(); // window

// 案例五
function foo() {
  function bar() {
    console.log(this);
  }
  return bar;
}
var fn = foo();
fn(); // window

// 案例六
('use strict');
function foo() {
  console.log(this);
}
foo(); // undefined
```

## Ⅱ 隐式绑定

通过**某个对象发起**的函数调用。

```javascript
// 案例一
function foo() {
  console.log(this);
}
var obj = {
  foo: foo
};
obj.foo(); // obj对象

// 案例二
var obj = {
  name: 'ZDH',
  action: function () {
    console.log(this.name + '在执行action');
  }
};
obj.action(); // ZDH在执行action

// 案例三
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this);
  }
};
var obj2 = {
  name: 'obj2',
  bar: obj1.foo
};
obj2.bar(); // obj2对象
```

## Ⅲ 显示绑定

### 通过 call 或者 apply 绑定 this 对象

call 和 apply 在执行函数时可以明确指定需要绑定的 this。

```javascript
function foo() {
  console.log(this);
}
var obj = {};
foo.call(); // window
foo.apply(); // window
foo.call(obj); // obj对象
foo.apply(obj); // obj对象

// call 和 apply 的区别
function sum(num1, num2, num3) {
  console.log(num1 + num2 + num3, this);
}
sum.call('call', 20, 30, 40); // 90 [String: 'call'](包装类对象)
sum.apply('apply', [20, 30, 40]); // 90 [String: 'apply'](包装类对象)
```

### 通过 bind 绑定 this 对象

返回一个新的函数，该函数总是显示地绑定到一个对象上。

```javascript
function foo() {
  console.log(this);
}
var newFoo = foo.bind('bind');
newFoo(); // String{'bind'}

var bar = foo;
console.log(bar === foo); // true
console.log(newFoo === foo); // false
```

## Ⅳ new 绑定

1. 创建一个全新的对象
2. 该对象会被执行`prototype`连接
3. 该对象会绑定到函数调用的`this`上
4. 如果函数没有返回其他对象则返回该对象

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var obj1 = new Person('test1', 1);
console.log(obj1.name, obj1.age); // test1 1
var obj2 = new Person('test2', 2);
console.log(obj2.name, obj2.age); // test2 2
```

# 某些特殊函数中的 this 绑定

## setTimeout

```javascript
// setTimeout 在内部进行函数回调时采用的是独立函数调用，在严格模式下也是 window
setTimeout(function () {
  console.log(this); // window
}, 1000);
```

## 事件监听点击

```javascript
const app = document.querySelector('.app');
app.onclick = function () {
  console.log(this); // <div class="app"></div>
};
app.addEventListener('click', function () {
  console.log(this); // <div class="app"></div>
});
```

## 数组高阶函数（forEach/map/filter/find...）

```javascript
var list = ['a', 'b', 'c'];
list.forEach(function () {
  console.log(this); // window
});
list.forEach(function () {
  console.log(this); // String{'test'}
}, 'test');
```

# 规则优先级

`new 绑定 > 显示绑定(apply/call/bind) > 隐式绑定 > 默认绑定`。

1. 默认绑定的优先级最低，因为存在其他规则时，就会通过其他规则的方式来绑定 this
2. 显示绑定优先级高于隐式绑定

```javascript
var obj = {
  foo: function () {
    console.log(this);
  }
};
obj.foo(); // obj对象

// call/apply 的显示绑定高于隐式绑定
obj.foo.apply('apply'); // String{'apply'}
obj.foo.call('call'); // String{'call'}
// bind 的优先级高于隐式绑定
var bar = obj.foo.bind('bind');
bar(); // String{'bind'}

function test() {
  console.log(this);
}
var object = {
  foo: foo.bind('bind')
};
obj.foo(); // object对象
```

3. new 绑定优先级高于隐式绑定

```javascript
var obj = {
  foo: function () {
    console.log(this);
  }
};
new obj.foo(); // foo{}
```

4. new 绑定优先级高于 bind，new 绑定和 call、apply 不允许同时使用，所以不存在优先级高低

```javascript
function foo() {
  console.log(this);
}
var bar = foo.bind('bind');
new bar(); // foo{}
```

5. bind 绑定优先级高于 apply/call

```javascript
function foo() {
  console.log(this);
}
const f = foo.bind('bind');
f.apply('apply'); // [String: 'bind']
f.call('call'); // [String: 'bind']
```

# 特殊绑定

## 忽略显示绑定

```javascript
function foo() {
  console.log(this);
}
foo.apply('apply'); // String{'apply'}
foo.apply({}); // {}

// 当传入null/undefined 时自动使用默认绑定规则，但是在严格模式下并非绑定 undefined，而是 null/undefined
foo.apply(null); // window
foo.apply(undefined); // window
var bar = foo.bind(null);
bar(); // window
```

## 间接函数引用

```javascript
// 使用默认绑定规则
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this);
  }
};
var obj2 = {
  name: 'obj2'
};
// obj2.bar = obj1.foo
// obj2.bar() // obj2对象
(obj2.bar = obj1.foo)(); // window
```

# 箭头函数中 this 的绑定

箭头函数不绑定 this，根据外层作用域来确定 this 的指向。

```javascript
var foo = () => {
  console.log(this);
};
foo(); // window
var obj = { foo: foo };
obj.foo(); // window
foo.call('call'); // window
```
