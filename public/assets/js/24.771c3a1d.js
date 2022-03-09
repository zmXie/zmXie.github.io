(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{586:function(e,t,a){"use strict";a.r(t);var r=a(10),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),a("p",[e._v("二进制重排就是通过更改符号的链接顺序，将启动时所执行的函数统一放到前面来链接，避免启动加载时出现过多的 "),a("strong",[e._v("PageFault（缺页中断）")]),e._v("，从而提高启动速度。")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("ul",[a("li",[a("strong",[e._v("PageFault：当进程访问一个虚拟内存页而对应的物理内存页不存在时，就会触发一次 PageFault")]),e._v("，届时系统会暂停进程，加载一个物理内存页并载入内容，然后再把控制权重新交给进程。")]),e._v(" "),a("li",[a("strong",[e._v("页映射：虚拟内存页与物理内存页的映射")]),e._v("（64 位处理器每一页是 8kb）。我们都知道，程序经过编译链接后，每个符号都绑定了一个虚拟内存地址，按照偏移量分布在可执行文件中，在运行时只能通过映射来访问物理地址，这样进程之间就彻底隔离开了。")])])]),a("img",{attrs:{src:e.$withBase("/page.jpeg"),alt:"mixureSecure",height:"500px"}}),e._v(" "),a("p",[e._v("默认情况下，符号链接的顺序是按照编译的先后顺序来执行的，那么启动时所需要执行的函数可能分布在 N 个 Page 中，在加载时就会触发 N 个 PageFault。"),a("br"),e._v("\n而重排的目的就是把启动时执行的函数放在前面链接，那么这些函数就集中在前面几个 Page 中，出现 PageFault 次数大大减少，从而缩减了启动时间。")]),e._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[e._v("#")]),e._v(" 问题")]),e._v(" "),a("ol",[a("li",[e._v("如何获取启动时用到的函数符号？")]),e._v(" "),a("li",[e._v("如何把这些符号放在前面链接？")])]),e._v(" "),a("p",[e._v("首先了解两个东西：Linkmap、order_file。")]),e._v(" "),a("h3",{attrs:{id:"linkmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linkmap"}},[e._v("#")]),e._v(" Linkmap")]),e._v(" "),a("p",[e._v("linkmap:是 iOS 编译过程的中间产物，记录了所有符号的布局。 在 xcode 的 Build Settings 里开启 Write Link Map File：Yes "),a("br")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/linkmap.png"),alt:"mixureSecure"}}),e._v(" "),a("p",[e._v("主要分为三个部分：")]),e._v(" "),a("ul",[a("li",[e._v("Object files：编译后生成的文件列表。")]),e._v(" "),a("li",[e._v("Sections：记录 Mach-O 各个段的地址范围。")]),e._v(" "),a("li",[e._v("Symbols：按顺序记录每个符号的地址范围。")])]),e._v(" "),a("p",[e._v("获取启动时的用到的函数：")]),e._v(" "),a("ul",[a("li",[e._v("扫描 linkmap 文件，获取+load 方法"),a("code",[e._v('"^\\+\\[.*\\ load\\]$"')]),e._v("、c++静态初始化函数"),a("code",[e._v("__DATA，__mod_init_func")]),e._v("。")]),e._v(" "),a("li",[e._v("通过 "),a("a",{attrs:{href:"https://github.com/facebook/fishhook",target:"_blank",rel:"noopener noreferrer"}},[e._v("fishhook"),a("OutboundLink")],1),e._v(" hook "),a("code",[e._v("objc_msgSend")]),e._v(" 函数，获取 OC 方法。")])]),e._v(" "),a("h3",{attrs:{id:"order-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-file"}},[e._v("#")]),e._v(" order_file")]),e._v(" "),a("p",[e._v("order_file：是链接器的一个参数，链接时会把 order 文件中的符号按照顺序放在 section 的开始。在 xcode 的 Build Settings 里填写.order 的文件路径。\n"),a("img",{attrs:{src:e.$withBase("/order_file.png"),alt:"mixureSecure"}}),e._v("\n这样就可以把启动时的函数符号放在前面链接了。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI1MzYzMjE0MQ==&mid=2247485101&idx=1&sn=abbbb6da1aba37a04047fc210363bcc9&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[e._v("抖音二进制重排"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=_.exports}}]);