
//ーーーー標準入力ーーーー
process.stdin.resume();
process.stdin.setEncoding('utf8');

let lines = [];
//readlineという機能を用いて標準入力からデータを受け取る
const reader = require('readline').createInterface
({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => 
{
    lines.push(line);
});

reader.on('close', () => 
{
    console.log(outputFunc(lines));//outputFuncの返り値が出力される
});
//ーーーーーーーーーーーーーーーー
//ーーーー出力ーーーー
function outputFunc(lines)
{
    let retStr = "";
    const firstRow = lines[0];
    const secondRowArray = lines[1].split(' ');
    return retStr;    
}
//ーーーーーーーーーーーーーーーー
