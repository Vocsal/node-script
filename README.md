# Node Script

> 提供脚本运行环境与命令

1. 安装依赖`yarn`或者`yarn install`

2. 在`/src`下创建目录，或者在`/src/scripts`下创建脚本，如`demo.js`

3. 运行命令`yarn script <脚本名称，如demo> --dir=<目录名称，默认值为scripts>`，执行目录`/src/scripts`下的脚本

4. 运行命令`yarn spider <脚本名称，如chinese-simplified>`，执行目录`/src/spiders`下的爬虫脚本