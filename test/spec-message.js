const {corpApi} = require("../src/index");
const conf = require('../conf').getConfig()

const api = corpApi(conf)
const APP_NAME = 'report';

// api.message.sendMessage(APP_NAME,{
//     "touser" : "20170410022717",
//     "msgtype" : "text",
//     "agentid" : 1000009,
//     "text" : {
//         "content" : "你的快递已到，请携带工卡前往邮件中心领取。\n出发前可查看<a href=\"http://work.weixin.qq.com\">邮件中心视频实况</a>，聪明避开排队。"
//     },
//     "safe":0
// }).then(function(res) {
//     console.log(res)
// })

api.message.revokeMessage(APP_NAME, {msgid: 'Dv0oBVNA9p2BIWPODPqgklVRv7YISONp8FXLt8m9XX3toBnEa_MhnxH0VnmSWe4krGkjyqgwdHYsoD3NFTsP3A'}).then(function(res) {
    console.log(res)
}).catch(err=>{
    console.log("接口调用异常--",err)
}).finally(function() {
    api.destroy()
})