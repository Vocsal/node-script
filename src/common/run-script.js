import minimist from 'minimist';
import { fileIsExists, runCommand } from '#src/common/util.js';

const args = minimist(process.argv.slice(2));
const scriptName = args.script || args._[0] || 'index';
const dirPath = args.dir || 'scripts';


function run() {
  console.log('1.脚本：', scriptName)
  if (!scriptName) {
    console.error('请提供脚本名称');
    return;
  }
  const scriptPath = `./src/${dirPath}/${scriptName}.js`;
  console.log('2.脚本路径：', scriptPath)
  if (!fileIsExists(scriptPath)) {
    console.error('脚本不存在');
    return;
  }
  console.log('3.运行脚本');
  runCommand('node', [scriptPath], () => {
    console.log('4.完成');
  });
}

run();