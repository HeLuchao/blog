(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{152:function(n,e,t){"use strict";t.r(e);var o=t(0),a=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"content"},[e("p",[this._v("#前端规范")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('HTML 规范\n1.DOCTYPE 声明\nHTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：\n<!DOCTYPE html>\n2.编码类型\n一般情况下统一使用 “UTF-8” 编码\n<meta charset="UTF-8">\n3.元素及标签闭合\n原始文本元素、RCDATA元素以及常规元素都有一个开始标签来表示开始，一个结束标签来表示结束。\n某些元素的开始和结束标签是可以省略的，如果规定标签不能被省略，那么就绝对不能省略它。\n空元素只有一个开始标签，且不能为空元素设置结束标签。\n外来元素可以有一个开始标签和配对的结束标签，或者只有一个自闭合的开始标签，且后者情况下该元素不能有结束标签。\n4.代码缩进\n统一使用soft tab（4个空格）进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）\n推荐：\n<div>    <h1>我是h1标题</h1>    <p>我是一段文字，我有始有终，浏览器能正确解析</p></div>\n5.HTML代码大小写\nHTML标签名、类名、标签属性和大部分属性值统一用小写\n推荐：\n<div class="demo"></div>\n6.类型属性\n不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含\n推荐：\n<link rel="stylesheet" href="" ><script src=""><\/script>\n7.元素属性\n元素属性值使用双引号语法\n元素属性值可以写上的都写上\n推荐：\n<input type="text">\t<input type="radio" name="name" checked="checked" >\n8.特殊字符引用\n文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。\n在 HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体\n推荐：\n<a href="#">more&gt;&gt;</a>\n9.代码嵌套\n元素嵌套规范，每个块状元素独立一行，内联元素可选\n推荐：\n<div>    <h1></h1>    <p></p></div>\t<p><span></span><span></span></p>\n段落元素与标题元素只能嵌套内联元素\n推荐：\n<h1><span></span></h1><p><span></span><span></span></p>\n10.注释方面\n单行注释\n一般用于简单的描述，如某些状态描述、属性描述等\n注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行\n推荐：\n\x3c!-- Comment Text --\x3e<div>...</div>\n多行注释\n// searchTitle_placeholder(state, value) {//   state.searchTitle_placeholder = value// },\n\n/* searchTitle_placeholder(state, value) {  state.searchTitle_placeholder = value},*/\n11.标准模版\nHTML5\n<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>HTML5标准模版</title></head><body>\t</body></html>\n移动端\n<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" ><meta name="format-detection" content="telephone=no" ><title>移动端HTML模版</title>\t\x3c!-- S DNS预解析 --\x3e<link rel="dns-prefetch" href="">\x3c!-- E DNS预解析 --\x3e \x3c!-- S 线上样式页面片，开发请直接取消注释引用 --\x3e\x3c!-- #include virtual="" --\x3e\x3c!-- E 线上样式页面片 --\x3e\x3c!-- S 本地调试，根据开发模式选择调试方式，请开发删除 --\x3e <link rel="stylesheet" href="css/index.css" >\x3c!-- /本地调试方式 --\x3e<link rel="stylesheet" href="http://srcPath/index.css" >\x3c!-- /开发机调试方式 --\x3e\x3c!-- E 本地调试 --\x3e</head><body></body></html>\nPC端\n<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="keywords" content="your keywords"><meta name="description" content="your description"><meta name="author" content="author,email address"><meta name="robots" content="index,follow"><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"><meta name="renderer" content="ie-stand"><title>PC端HTML模版</title>\x3c!-- S DNS预解析 --\x3e <link rel="dns-prefetch" href="">\x3c!-- E DNS预解析 --\x3e \x3c!-- S 线上样式页面片，开发请直接取消注释引用 --\x3e\x3c!-- #include virtual="" --\x3e\x3c!-- E 线上样式页面片 --\x3e\x3c!-- S 本地调试，根据开发模式选择调试方式，请开发删除 --\x3e <link rel="stylesheet" href="css/index.css" >\x3c!-- /本地调试方式 --\x3e<link rel="stylesheet" href="http://srcPath/index.css" >\x3c!-- /开发机调试方式 --\x3e\x3c!-- E 本地调试 --\x3e</head><body></body></html>\n12.图片格式\n常见的图片格式有 GIF、PNG8、PNG24、JPEG、WEBP，根据图片格式的特性和场景需要选取适合的图片格式。\nPC平台单张的图片的大小不应大于 200KB。\n移动平台单张的图片的大小不应大于 100KB。\n13.图片引入\nHTML 中图片引入不需添加 width、height 属性，alt 属性应该写上\n推荐：\n<img src="" alt="" >\nCSS 中图片引入不需要引号\n.jdc {    background-image: url(icon.png);}\nCSS Sprites VS Data URIs\nCSS Sprites特点\n减少请求数\n加速图片的显示\n维护更新成本大\n更多的内存消耗，特别是大体积或有过多空白的 Sprites 图\n图片渗漏，相邻的不需展示的图片有可能出现在展示元素中，特别是在高清设备移动设备上\nData URIs（base64编码）\n减少请求数\n转换文件体积大，大约比原始的二进制大33%\nIE6 / IE7 不支持\n图片显示相对较慢，需要更多的CPU消耗\nCSS 规范\n1.代码格式化\n统一使用展开格式书写样式\n.jdc{    display: block;    width: 50px;}\n2.代码大小写\n样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。\n/* 推荐 */.jdc{\tdisplay:block;}\t/* 不推荐 */.JDC{\tDISPLAY:BLOCK;}\n3.选择器\n尽量少用通用选择器 *\n不使用 ID 选择器\n不使用无具体语义定义的标签选择器\n/* 推荐 */.jdc {}.jdc li {}.jdc li p{}/* 不推荐 */*{}#jdc {}.jdc div{}\n4.代码缩进\n统一使用soft tab（4个空格）进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）\n.jdc {    width: 100%;    height: 100%;}\n5.分号\n每个属性声明末尾都要加分号；\n.jdc {    width: 100%;    height: 100%;}\n6.代码易读性\n左括号与类名之间一个空格，冒号与属性值之间一个空格\n推荐：\n.jdc {     width: 100%; }\n逗号分隔的取值，逗号之后一个空格\n推荐：\n.jdc {    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;}\n颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0\n推荐：\n.jdc {    color: rgba(255,255,255,.5);}\n属性值十六进制数值能用简写的尽量用简写\n推荐：\n.jdc {    color: #fff;}\n不要为 0 指明单位\n推荐：\n.jdc {    margin: 0 10px;}\n7.代码注释\n单行注释\n注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行\n推荐：\n/* Comment Text */.jdc{}/* Comment Text */.jdc{}\n不推荐：\n/*Comment Text*/.jdc{\tdisplay: block;}.jdc{\tdisplay: block;/*Comment Text*/}\n模块注释\n注释内容第一个字符和最后一个字符都是一个空格字符，/* 与 模块信息描述占一行，多个横线分隔符-与*/占一行，行与行之间相隔两行\n推荐：\n/* Module A---------------------------------------------------------------- */.mod_a {}/* Module B---------------------------------------------------------------- */.mod_b {}\n不推荐：\n/* Module A ---------------------------------------------------- */.mod_a {}/* Module B ---------------------------------------------------- */.mod_b {}\n文件信息注释\n在样式文件编码声明 @charset 语句下面注明页面名称、作者、创建日期等信息\n@charset "UTF-8";/** * @desc File Info * @author Author Name * @date 2015-10-10 */\n8.重置样式\n移动端\n* { -webkit-tap-highlight-color: transparent; outline: 0; margin: 0; padding: 0; vertical-align: baseline; }body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin: 0; padding: 0; vertical-align: baseline; }img { border: 0 none; vertical-align: top; }i, em { font-style: normal; }ol, ul { list-style: none; }input, select, button, h1, h2, h3, h4, h5, h6 { font-size: 100%; font-family: inherit; }table { border-collapse: collapse; border-spacing: 0; }a { text-decoration: none; color: #666; }body { margin: 0 auto; min-width: 320px; max-width: 640px; height: 100%; font-size: 14px; font-family: -apple-system,Helvetica,sans-serif; line-height: 1.5; color: #666; -webkit-text-size-adjust: 100% !important; text-size-adjust: 100% !important; }input[type="text"], textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; }\nPC端\nhtml, body, div, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, ul, li, fieldset, form, label, input, legend, table, caption, tbody, tfoot, thead, tr, th, td, textarea, article, aside, audio, canvas, figure, footer, header, mark, menu, nav, section, time, video { margin: 0; padding: 0; }h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal }article, aside, dialog, figure, footer, header, hgroup, nav, section, blockquote { display: block; }ul, ol { list-style: none; }img { border: 0 none; vertical-align: top; }blockquote, q { quotes: none; }blockquote:before, blockquote:after, q:before, q:after { content: none; }table { border-collapse: collapse; border-spacing: 0; }strong, em, i { font-style: normal; font-weight: normal; }ins { text-decoration: underline; }del { text-decoration: line-through; }mark { background: none; }input::-ms-clear { display: none !important; }body { font: 12px/1.5 \\5FAE\\8F6F\\96C5\\9ED1, \\5B8B\\4F53, "Hiragino Sans GB", STHeiti, "WenQuanYi Micro Hei", "Droid Sans Fallback", SimSun, sans-serif; background: #fff; }a { text-decoration: none; color: #333; }a:hover { text-decoration: underline; }\n9.目录命名\n项目文件夹：projectname\n样式文件夹：css\n脚本文件夹：js\n样式类图片文件夹：img\n10.HTML/CSS文件命名\n确保文件命名总是以字母开头而不是数字，且字母一律小写，以下划线连接且不带其他标点符号，如：\n\x3c!-- HTML --\x3ejdc.htmljdc_list.htmljdc_detail.html\x3c!-- SASS --\x3ejdc.scssjdc_list.scssjdc_detail.scss\n11.ClassName命名\nClassName的命名应该尽量精短、明确，必须以字母开头命名，且全部字母为小写，全部采用驼峰式命名\n推荐：\n<div class="userInfo">\t...\t\t</div>\nJS 规范\n1.类型\n基本类型\n字符串\n数值\n布尔类型\nnull\nundefined\nconst foo = 1let bar = foobar = 9console.log(foo, bar) // 1, 9\n复杂类型\nobject\narray\nfunction\nconst foo = [1, 2, 3]const bar = foobar[0] = 9console.log(foo[0], bar[0]) // 9, 9\n2.引用\nconst 和 let 都是块级作用域，var 是函数级作用域\n对所有引用都使用 const，不要使用 var\n// badvar a = 1var b = 2// goodconst a = 1const b = 2\n如果引用是可变动的，则使用 let\n// badvar count = 1if (count < 10) {  count += 1}// goodlet count = 1if (count < 10) {  count += 1}\n3.对象\n请使用字面量值创建对象\n// badconst a = new Object{}// goodconst a = {}\n别使用保留字作为对象的键值，这样在 IE8 下不会运行\n// badconst a = {  default: {},  // default 是保留字  common: {}}// goodconst a = {  defaults: {},  common: {}}\n请使用对象方法的简写方式\n// badconst item = {  value: 1,  addValue: function (val) {    return item.value + val  }}// goodconst item = {  value: 1,  addValue(val) {    return item.value + val  }}\n请使用对象属性值的简写方式\nconst job = \'FrontEnd\'// badconst item = {  job: job}// goodconst item = {  job}\n对象属性值的简写方式要和声明式的方式分组\nconst job = \'FrontEnd\'const department = \'JDC\'// badconst item = {  sex: \'male\',  job,  age: 25,  department}// goodconst item = {  job,  department,  sex: \'male\',  age: 25}\n4.数组\n请使用字面量值创建数组\n// badconst items = new Array()// goodconst items = []\n向数组中添加元素时，请使用 push 方法\nconst items = []// baditems[items.length] = \'test\'// gooditems.push(\'test\')\n使用拓展运算符 ... 复制数组\n// badconst items = []const itemsCopy = []const len = items.lengthlet i// badfor (i = 0; i < len; i++) {  itemsCopy[i] = items[i]}// gooditemsCopy = [...items]\n使用数组的 map 等方法时，请使用 return 声明，如果是单一声明语句的情况，可省略 return\n// good[1, 2, 3].map(x => {  const y = x + 1  return x * y})// good[1, 2, 3].map(x => x + 1)// badconst flat = {}[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {  const flatten = memo.concat(item)  flat[index] = flatten})// goodconst flat = {}[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {  const flatten = memo.concat(item)  flat[index] = flatten  return flatten})// badinbox.filter((msg) => {  const { subject, author } = msg  if (subject === \'Mockingbird\') {    return author === \'Harper Lee\'  } else {    return false  }})// goodinbox.filter((msg) => {  const { subject, author } = msg  if (subject === \'Mockingbird\') {    return author === \'Harper Lee\'  }  return false})\n5.解构赋值\n当需要使用对象的多个属性时，请使用解构赋值\n// badfunction getFullName (user) {  const firstName = user.firstName  const lastName = user.lastName  return `${firstName} ${lastName}`}// goodfunction getFullName (user) {  const { firstName, lastName } = user  return `${firstName} ${lastName}`}// betterfunction getFullName ({ firstName, lastName }) {  return `${firstName} ${lastName}`}\n当需要使用数组的多个值时，请同样使用解构赋值\nconst arr = [1, 2, 3, 4]// badconst first = arr[0]const second = arr[1]// goodconst [first, second] = arr\n函数需要回传多个值时，请使用对象的解构，而不是数组的解构\n// badfunction doSomething () {  return [top, right, bottom, left]}// 如果是数组解构，那么在调用时就需要考虑数据的顺序const [top, xx, xxx, left] = doSomething()// goodfunction doSomething () {  return { top, right, bottom, left }}// 此时不需要考虑数据的顺序const { top, left } = doSomething()\n6.字符串\n字符串统一使用单引号的形式 \'\'\n// badconst department = "JDC"// goodconst department = \'JDC\'\n字符串太长的时候，请不要使用字符串连接符换行 \\，而是使用 +\nconst str = \'凹凸实验室 凹凸实验室 凹凸实验室\' +  \'凹凸实验室 凹凸实验室 凹凸实验室\' +  \'凹凸实验室 凹凸实验室\'\n程序化生成字符串时，请使用模板字符串\nconst test = \'test\'// badconst str = [\'a\', \'b\', test].join()// badconst str = \'a\' + \'b\' + test// goodconst str = `ab${test}`\n7.函数\n请使用函数声明，而不是函数表达式\n// badconst foo = function () {  // do something}// goodfunction foo () {  // do something}\n不要在非函数代码块中声明函数\n// badif (isUse) {  function test () {    // do something  }}// goodlet testif (isUse) {  test = () => {    // do something  }}\n不要使用 arguments，可以选择使用 ...\narguments 只是一个类数组，而 ... 是一个真正的数组\n// badfunction test () {  const args = Array.prototype.slice.call(arguments)  return args.join(\'\')}// goodfunction test (...args) {  return args.join(\'\')}\n不要更改函数参数的值\n// badfunction test (opts) {  opts = opts || {}}// goodfunction test (opts = {}) {  // ...}\n8.原型\n使用 class，避免直接操作 prototype\n// badfunction Queue (contents = []) {  this._queue = [..contents]}Queue.prototype.pop = function () {  const value = this._queue[0]  this._queue.splice(0, 1)  return value}// goodclass Queue {  constructor (contents = []) {    this._queue = [...contents]  }  pop () {    const value = this._queue[0]    this._queue.splice(0, 1)    return value  }}\n9.模块\n使用标准的 ES6 模块语法 import 和 export\n// badconst util = require(\'./util\')module.exports = util// goodimport Util from \'./util\'export default Util// betterimport { Util } from \'./util\'export default Util\n不要使用 import 的通配符 *，这样可以确保你只有一个默认的 export\n// badimport * as Util from \'./util\'// goodimport Util from \'./util\'\n10.迭代器\n不要使用 iterators\nconst numbers = [1, 2, 3, 4, 5]// badlet sum = 0for (let num of numbers) {  sum += num}// goodlet sum = 0numbers.forEach(num => sum += num)// betterconst sum = numbers.reduce((total, num) => total + num, 0)\n11.对象属性\n使用 . 来访问对象属性\nconst joke = {  name: \'haha\',  age: 28}// badconst name = joke[\'name\']// goodconst name = joke.name\n12.变量声明\n声明变量时，请使用 const、let 关键字，如果没有写关键字，变量就会暴露在全局上下文中，这样很可能会和现有变量冲突，另外，也很难明确该变量的作用域是什么。这里推荐使用 const 来声明变量，我们需要避免全局命名空间的污染。\n// baddemo = new Demo()// goodconst demo = new Demo()\n将所有的 const 和 let 分组\n// badlet aconst blet cconst dlet e// goodconst bconst dlet alet clet e\n13.Hoisting\nvar 存在变量提升的情况，即 var 声明会被提升至该作用域的顶部，但是他们的赋值并不会。而 const 和 let 并不存在这种情况，他们被赋予了 Temporal Dead Zones, TDZ\nfunction example () {  console.log(notDefined)   // => throws a ReferenceError}function example () {  console.log(declareButNotAssigned)  // => undefined  var declaredButNotAssigned = true}function example () {  let declaredButNotAssigned  console.log(declaredButNotAssigned)   // => undefined  declaredButNotAssigned = true}function example () {  console.log(declaredButNotAssigned)   // => throws a ReferenceError  console.log(typeof declaredButNotAssigned)  // => throws a ReferenceError  const declaredButNotAssigned = true}\n匿名函数的变量名会提升，但函数内容不会\nfunction example () {  console.log(anonymous)  // => undefined  anonymous()  var anonymous = function () {    console.log(\'test\')  }}\n命名的函数表达式的变量名会被提升，但函数名和函数函数内容并不会\nfunction example() {  console.log(named)  // => undefined  named()   // => TypeError named is not a function  superPower()  // => ReferenceError superPower is not defined  var named = function superPower () {    console.log(\'Flying\')  }}function example() {  console.log(named)  // => undefined  named()   // => TypeError named is not a function  var named = function named () {    console.log(\'named\')  }}\n14.分号\n我们遵循 Standard 的规范，不使用分号。\n关于应不应该使用分号的讨论有很多，本规范认为非必要的时候，应该不使用分号，好的 JS 程序员应该清楚场景下是一定要加分号的，相信你也是名好的开发者。\n// badconst test = \'good\';(function () {  const str = \'hahaha\';})()// goodconst test = \'good\';(() => {  const str = \'hahaha\'})();\n15.标准特性\n为了代码的可移植性和兼容性，我们应该最大化的使用标准方法，例如优先使用 string.charAt(3) 而不是 string[3]\neval()\n由于 eval 方法比较 evil，所以我们约定禁止使用该方法\nwith() {}\n由于 with 方法会产生神奇的作用域，所以我们也是禁止使用该方法的\nfor-in 循环\n推荐使用 for in 语法，但是在对对象进行操作时，容易忘了检测 hasOwnProperty(key)，所以我们启用了 ESLint 的 guard-for-in 选项\n对数组进行 for in 的时候，顺序是不固定的\n16.修改内置对象的原型\n不要修改内置对象，如 Object 和 Array\nJS代码规范\n1.单行代码块\n在单行代码块中使用空格\n不推荐\nfunction foo () {return true}if (foo) {bar = 0}\n推荐\nfunction foo () {    return true}if (foo) {   bar = 0}\n2.大括号风格\n在编程过程中，大括号风格与缩进风格紧密联系，用来描述大括号相对代码块位置的方法有很多。在 JavaScript 中，主要有三种风格，如下：\nOne True Brace Style\nif (foo) {  bar()} else {  baz()}\nStroustrup\nif (foo) {  bar()}else {  baz()}\nAllman\nif (foo){  bar()}else{  baz()}\n3.变量命名\n当命名变量时，主流分为驼峰式命名（variableName）和下划线命名（variable_name）两大阵营。\n团队约定使用驼峰式命名\n4.拖尾逗号\n在 ECMAScript5 里面，对象字面量中的拖尾逗号是合法的，但在 IE8（非 IE8 文档模式）下，当出现拖尾逗号，则会抛出错误。\n拖尾逗号的例子：\nvar foo = {  name: \'foo\',  age: \'22\',}\n拖尾逗号的好处是，简化了对象和数组添加或删除元素，我们只需要修改新增的行即可，并不会增加差异化的代码行数。\n因为拖尾逗号有好也有不好，所以团队约定允许在最后一个元素或属性与闭括号 ] 或 } 在不同行时，可以（但不要求）使用拖尾逗号。当在同一行时，禁止使用拖尾逗号。\n5.逗号空格\n逗号前后的空格可以提高代码的可读性，团队约定在逗号后面使用空格，逗号前面不加空格。\n不推荐\nvar foo = 1,bar = 2var foo = 1 , bar = 2var foo = 1 ,bar = 2\n推荐\nvar foo = 1, bar = 2\n6.逗号风格\n逗号分隔列表时，在 JavaScript 中主要有两种逗号风格：\n标准风格，逗号放置在当前行的末尾\n逗号前置风格，逗号放置在下一行的开始位置\n团队约定使用标准风格\n不推荐\nvar foo = 1,bar = 2var foo = 1, bar = 2var foo = [\'name\'          , \'age\']\n推荐\nvar foo = 1,    bar = 2var foo = [\'name\',            \'age\']\n7.计算属性的空格\n团队约定在对象的计算属性内，禁止使用空格\n不推荐\nobj[\'foo\' ]obj[ \'foo\']obj[ \'foo\' ]\n推荐\nobj[\'foo\']\n8.拖尾换行\n在非空文件中，存在拖尾换行是一个常见的 UNIX 风格，它的好处是可以方便在串联和追加文件时不会打断 Shell 的提示。在日常的项目中，保留拖尾换行的好处是，可以减少版本控制时的代码冲突。\n不推荐\nfunction func () {  // do something}\n推荐\nfunction func () {  // do something}  // 此处是新的一行\n可以通过 .editorconfig 添加 EOL\n9.函数调用\n为了避免语法错误，团队约定在函数调用时，禁止使用空格\n不推荐\nfn ()fn()\n推荐\nfn()\n10.缩进\njs代码统一采用soft tab（4个空格）\n对象字面量的键值缩进\n对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格\n不推荐\nvar obj = { \'foo\' : \'haha\' }\n推荐\nvar obj = {     \'foo\': \'haha\' }\n11.构造函数首字母大写\n在 JavaScript 中 new 操作符用来创建某个特定类型的对象的一个实例，该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用 new 来调用。所以我们团队约定构造函数的首字母要大小，以此来区分构造函数和普通函数。\n不推荐\nvar fooItem = new foo()\n推荐\nvar fooItem = new Foo()\n12.构造函数的参数\n在 JavaScript 中，通过 new 调用构造函数时，如果不带参数，可以省略后面的圆括号。但这样会造成与整体的代码风格不一致，所以团队约定使用圆括号\n不推荐\nvar person = new Person\n推荐\nvar person = new Person()\n13.链式调用\n链式调用如果放在同一行，往往会造成代码的可读性差，但有些时候，短的链式调用并不会影响美观。所以本规范约定一行最多只能有四个链式调用，超过就要求换行。\n14.空行\n空白行对于分离代码逻辑有帮助，但过多的空行会占据屏幕的空间，影响可读性。团队约定最大连续空行数为 2\n不推荐\nvar a = 1var b = 2\n推荐\nvar a = 1var b = 2\n15.链式赋值\n链式赋值容易造成代码的可读性差，所以团队约定禁止使用链式赋值\n不推荐\nvar a = b = c = 1\n推荐\nvar a = 1var b = 1var c = 1\n16.变量声明\nJavaScript 允许在一个声明中，声明多个变量。团队约定在声明变量时，一个声明只能有一个变量\n不推荐\nvar a, b, c\n推荐\nvar avar bvar c\n17.分号\nJavaScript 在所有类 C 语言中是比较独特的，它不需要在每个语句的末尾有分号。在很多情况下，JavaScript 引擎可以确定一个分号应该在什么位置然后自动添加它。此特征被称为 自动分号插入 (ASI)，被认为是 JavaScript 中较为有争议的特征。我们按照W3C标准每行代码结尾必须用分号结束。\n18.代码块空格\n不推荐\nif (a){  b()}function a (){}\n推荐\nif (a) {  b()}function a () {}\n19.函数声明的空格\n当格式化一个函数，函数名或 function 关键字与左括号之间允许有空白。命名函数要求函数名和 function 关键字之间有空格，但是匿名函数要求不加空格。\n团队约定函数括号前要加空格\n不推荐\nfunction func(x) {  // ...}\n推荐\nfunction func (x) {  // ...}\n20.操作符的空格\n团队约定操作符前后都需要添加空格\n不推荐\nvar sum = 1+2\n推荐\nvar sum = 1 + 2\n\n')])])])])}],!1,null,null,null);a.options.__file="前端规范.md";e.default=a.exports}}]);