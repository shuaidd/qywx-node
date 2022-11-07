const  request = require('request');

function get(url,params,callback) {
    request(url,(error,res,body)=>{

    })
}

function post(url,params,callback) {

}

module.exports = {
    get,
    post
}