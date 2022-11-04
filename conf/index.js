const  request = require('request');
request("https://www.baidu.com",(error,res,body)=>{
    console.log(body);
})