import { fileIsExists, runCommand } from '#src/common/util.js';
const spider = process.argv[2];

function run() {
  console.log('1.爬虫：', spider)
  if (!spider) {
    console.error('请提供爬虫脚本名称');
    return;
  }
  const scriptPath = `./src/spiders/${spider}.js`;
  console.log('2.脚本路径：', scriptPath)
  if (!fileIsExists(scriptPath)) {
    console.error('脚本不存在');
    return;
  }
  console.log('3.运行脚本');
  runCommand('node', [scriptPath], () => {
    console.log('4.完成爬虫');
  });
}

run();