### 简介

##### 一、开发过程

2019年9月28日，距离王吧啦生日还有三个月，萌生了为她制作庆生网页的想法。

2019年10月，初步制定了设计思路，并进行了多次修改调整。此外，收集了许多JS特效素材。

2019年11月12日，完成了项目的开发和部署。

##### 二、项目内容

包括两个页面，分别是：

- 项目介绍页

- JS特效页（JS绘制蛋糕，项目来源：https://github.com/xavieryao）

  部分特效素材来自http://www.htmlsucai.com/

Features：

- 支持手机端页面正常显示
- 初始页面的询问框，形状类似于IOS的提示框，较为美观。基于素材实现。
- 文字基本采用打字效果显示，较为美观。调用了theater.js库，去除了其中模拟打字出错的部分。
- 两个页面的自然切换过渡。基于模板实现。
- 字体美观。此外，为缩减中文字体ttf文件的大小，利用了font-spider来提取网页中用到的文字，仅在ttf中保留对应的文字和符号，最终ttf文件仅58KB。
- 蛋糕的显示，在`xavieryao`基础上，为适应手机屏幕，修改了花瓣的参数，更为美观。

##### 三、开发心得

大部分内容都是基于素材或模板来实现，不过合理调用第三方库很好地节约了开发时间，并保证了开发效率，使得精力能更多地用在页面本身的设计上。

通过这次开发，进一步熟悉了JS的使用，收获还是挺大的。