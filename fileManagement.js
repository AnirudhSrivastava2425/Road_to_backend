const fs = require('fs');
const path = require('path');

let Dpath = path.join(__dirname, 'files');
// console.log(Dpath);
for(let i=0;i<5;i++)
{
    fs.writeFileSync(Dpath+'/'+'names'+i+'.txt',"Hello world!");
    
}

fs.readdir(Dpath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
})