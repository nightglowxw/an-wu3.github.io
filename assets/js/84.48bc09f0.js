(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{408:function(t,a,v){"use strict";v.r(a);var s=v(3),_=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"let-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-命令"}},[t._v("#")]),t._v(" let 命令")]),t._v(" "),a("h3",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[t._v("ES6 新增了"),a("code",[t._v("let")]),t._v("命令，用来声明变量。它的用法类似于"),a("code",[t._v("var")]),t._v("，但是所声明的变量，"),a("strong",[t._v("只在"),a("code",[t._v("let")]),t._v("命令所在的代码块内有效(块级作用域)")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"不存在变量提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不存在变量提升"}},[t._v("#")]),t._v(" 不存在变量提升")]),t._v(" "),a("p",[a("code",[t._v("var")]),t._v("命令会发生“变量提升”现象，即变量可以在声明之前使用，值为"),a("code",[t._v("undefined")]),t._v("。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。")]),t._v(" "),a("p",[t._v("为了纠正这种现象，"),a("code",[t._v("let")]),t._v("命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。")]),t._v(" "),a("h3",{attrs:{id:"暂时性死区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂时性死区"}},[t._v("#")]),t._v(" 暂时性死区")]),t._v(" "),a("p",[a("strong",[t._v("只要块级作用域内存在"),a("code",[t._v("let")]),t._v("命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。")])]),t._v(" "),a("h3",{attrs:{id:"不允许重复声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不允许重复声明"}},[t._v("#")]),t._v(" 不允许重复声明")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("let")]),t._v("不允许在相同作用域内，重复声明同一个变量。")])]),t._v(" "),a("h2",{attrs:{id:"const-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#const-命令"}},[t._v("#")]),t._v(" const 命令")]),t._v(" "),a("h3",{attrs:{id:"基本用法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法-2"}},[t._v("#")]),t._v(" 基本用法")]),t._v(" "),a("p",[a("code",[t._v("const")]),t._v("声明一个"),a("strong",[t._v("只读的常量")]),t._v("。一旦声明，"),a("strong",[t._v("常量的值就不能改变")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"本质"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本质"}},[t._v("#")]),t._v(" 本质")]),t._v(" "),a("p",[a("code",[t._v("const")]),t._v("实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，"),a("code",[t._v("const")]),t._v("只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。")])])}),[],!1,null,null,null);a.default=_.exports}}]);