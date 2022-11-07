const {corpApi} = require("../src/index");
const {user} = require("../src/address-book/user");
const conf = require('../conf').getConfig()

const api = corpApi(conf)

const userApi = api.addressBook.userApi;
const deptApi = api.addressBook.deptApi;

const APP_NAME = 'address_book';
/**
 * 测试创建用户
 */
// userApi.createUser(APP_NAME, {
//         "userid": "zhangsan",
//         "name": "张三",
//         "alias": "jackzhang",
//         "mobile": "+86 13800000000",
//         "department": [1, 2],
//         "order": [10, 40],
//         "position": "产品经理",
//         "gender": "1",
//         "email": "zhangsan@gzdev.com",
//         "biz_mail": "zhangsan@qyycs2.wecom.work",
//         "is_leader_in_dept": [1, 0],
//         "enable": 1,
//         "telephone": "020-123456",
//         "address": "广州市海珠区新港中路",
//         "main_department": 1,
//         "to_invite": false,
//         "external_position": "高级产品经理"
//     }
// ).then(function (res) {
//     console.log(res)
// })
//
// userApi.getUser(APP_NAME, '20170410022717').then(function (user) {
//     console.log(user)
// })
//
// userApi.updateUser(APP_NAME, {
//         "userid": "zhangsan",
//         "name": "李四",
//         "department": [1],
//         "order": [10],
//         "position": "后台工程师",
//         "mobile": "13800000000",
//         "gender": "1",
//         "email": "zhangsan@gzdev.com",
//         "biz_mail": "zhangsan@qyycs2.wecom.work",
//         "is_leader_in_dept": [1],
//         "direct_leader": ["lisi", "wangwu"],
//         "enable": 1,
//         "avatar_mediaid": "2-G6nrLmr5EC3MNb_-zL1dDdzkd0p7cNliYu9V5w7o8K0",
//         "telephone": "020-123456",
//         "alias": "jackzhang",
//         "address": "广州市海珠区新港中路",
//         "main_department": 1,
//         "extattr": {
//             "attrs": [
//                 {
//                     "type": 0,
//                     "name": "文本名称",
//                     "text": {
//                         "value": "文本"
//                     }
//                 },
//                 {
//                     "type": 1,
//                     "name": "网页名称",
//                     "web": {
//                         "url": "http://www.test.com",
//                         "title": "标题"
//                     }
//                 }
//             ]
//         },
//         "external_position": "工程师",
//         "external_profile": {
//             "external_corp_name": "企业简称",
//             "wechat_channels": {
//                 "nickname": "视频号名称",
//             },
//             "external_attr": [
//                 {
//                     "type": 0,
//                     "name": "文本名称",
//                     "text": {
//                         "value": "文本"
//                     }
//                 },
//                 {
//                     "type": 1,
//                     "name": "网页名称",
//                     "web": {
//                         "url": "http://www.test.com",
//                         "title": "标题"
//                     }
//                 },
//                 {
//                     "type": 2,
//                     "name": "测试app",
//                     "miniprogram": {
//                         "appid": "wx8bd80126147dFAKE",
//                         "pagepath": "/index",
//                         "title": "my miniprogram"
//                     }
//                 }
//             ]
//         }
//     }
// ).then(function (res) {
//     console.log(res)
// })
//
// userApi.deleteUser(APP_NAME, '111').then(function (res) {
//     console.log(res)
// })
//
// userApi.batchDeleteUser(APP_NAME,['222']).then(function (res) {
//     console.log(res)
// })

// userApi.deptUsers(APP_NAME,1).then(function (res) {
//     console.log(res)
// })
//
// userApi.deptUserDetails(APP_NAME,1).then(function (res) {
//     console.log(res)
// })

// userApi.userIds(APP_NAME,{
//     limit: 5
// }).then(function (res) {
//     console.log(res)
// })

// userApi.userId2OpenId(APP_NAME,'20220830001038').then(function (res) {
//     console.log(res)
// })
//
// userApi.openId2UserId(APP_NAME,'20220830001038').then(function (res) {
//     console.log(res)
// })

// userApi.getJoinQrCode(APP_NAME).then(function (res) {
//     console.log(res)
// })

// userApi.getUserIdByTelephone(APP_NAME,'15268571280').then(function (res) {
//     console.log(res)
// })

deptApi.getDeptDetail(APP_NAME,1).then(function (res) {
    console.log(res)
})