这是一个实验性项目，正在开发中。

# 基于seajs的可视化打包工具

spm是一款标准的模块发布工具。但对于大多数web开发者来说，需要一款更加简单，可视化的打包工具，基于此想法，创建此项目。

## 原理

任何程序，都应该有一个起始的入口，从入口开始完成程序启动、运行。他是一切程序的起点。

autoMain即使基于此思想所开发的一款工具。运行是，你需要指定一个入口文件，然后autoMain会自动分析此文件的所有依赖项目。

你可以勾选哪些文件需要打包，然后生成文件，让页面引用即可。
