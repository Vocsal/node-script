import { getDocument } from '#src/common/jsdom.js';
import { writeFile } from '#src/common/util.js';

const ChineseSimplifiedGB2312Url = 'http://tools.jb51.net/table/gb2312';
const FilePath = './output/chinese-simplified.txt';

async function getChineseSimplifiledChars() {
  const document = await getDocument(ChineseSimplifiedGB2312Url);
  const table = document.querySelector("body > div > div.row > div.col-md-9 > div.table-responsive > table");
  let chineseSimplifiledChars = [];
  table.querySelectorAll('tbody > tr').forEach((tr, index) => {
    const th = tr?.children?.[0];
    if (th && th?.tagName?.toLowerCase() === 'th' && /^[B-F]/.test(th.textContent.trim())) {
      // 第一个元素不是th, 从 B到F 行
      tr.querySelectorAll('td').forEach(td => {
        let c = td.textContent.trim();
        c && chineseSimplifiledChars.push(c)
      });
    }
  });
  return chineseSimplifiledChars;
}

function run() {
  console.log('开始爬取GB2312简体中文字符');
  getChineseSimplifiledChars()
    .then((chineseSimplifiledChars) => {
      console.log('爬取成功');
      console.log('简体中文字符个数：', chineseSimplifiledChars.length);
      console.log('写入文件');
      writeFile(FilePath, chineseSimplifiledChars.join(''), (err) => {
        if (err) {
          console.error('写入文件失败');
        } else {
          console.log('成功写入文件：', FilePath);
        }
      });
    })
}

run();
