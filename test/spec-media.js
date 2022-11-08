const {corpApi} = require("../src/index");
const request = require('request');
const fs = require("fs");
const path = require("path")
const conf = require('../conf').getConfig()

const api = corpApi(conf)
const APP_NAME = 'address-book';
// api.media.uploadMedia(APP_NAME,'file',{
//     name: 'media',
//     file: {
//         value: fs.createReadStream(path.resolve('src/resources/template/batch_user_sample.csv')),
//         options: {
//             filename: 'batch_user_sample.csv',
//             contentType: 'application/octet-stream'
//         }
//     }
// }).then(function (res) {
//     console.log(res)
// })

// let outPath = path.resolve(__dirname, 'batch_user_sample_download_3.csv')
// console.log(outPath)
// api.media.downloadMedia(APP_NAME,"3pcYNoLzubijSESBgNuszOd0SZehkFIUf9DJPQj7jMaOVYHuINjTBvAvZvbI4PkAD",outPath)

// api.media.uploadImage(APP_NAME,{
//     name: 'media',
//     file: {
//         value: fs.createReadStream(path.resolve('src/resources/img/idea-short-cut.png')),
//         options: {
//             filename: 'idea-short-cut.png',
//             contentType: 'image/png'
//         }
//     }
// }).then(function (res) {
//     console.log(res)
// })

api.media.getUploadVoice(APP_NAME,"11222","q.speex")