const rp = require('request-promise');
const { createClient } = require('redis');

exports.httpClient = function (options) {

    let redisClient = null;
    if (!options) {
        options = {};
    } else {
        if (!options.corpId || !options.applications) {
            throw new Error('缺少企业微信应用配置信息')
        }

        if (options.redis && options.useRedis) {
            redisClient = createClient(options.redis);

            redisClient.on('error', (err) => console.log('Redis Client Error', err));

            redisClient.connect().then(res=>{
                console.log('redis connection established')
            })
        }
    }

    let defaultOptions = {
        baseUrl: options.url || 'https://qyapi.weixin.qq.com/cgi-bin',
        timeout: options.timeout || 1500,
        json: true
    }

    /**
     * 获取配置的企业微信应用秘钥信息
     * @param appName 配置的应用名称
     * @returns {string|*}
     */
    function getAppSecret(appName) {

        if (!appName) {
            throw new Error('企业微信应用名称不能为空')
        }

        if (!options.applications) {
            throw new Error('缺少企业微信应用配置信息')
        }

        for (let applicationsKey in options.applications) {
            if (options.applications.hasOwnProperty(applicationsKey) && appName === applicationsKey) {
                return options.applications[applicationsKey].secret
            }
        }

        throw new Error(`根据${appName}查询不到配置的企业微信应用信息`)
    }

    /**
     * 获取企业微信访问的accessToken
     * @param appName 应用名称
     */
    async function getAccessToken(appName) {

        let redisKey = `qywx-node-access-token-${appName}`;
        if (options.useRedis && redisClient) {
            let accessToken = await redisClient.get(redisKey)
            if (accessToken) {
                console.log('从缓存获取企业微信的token')
                return accessToken;
            }
        }

        let response = await rp(Object.assign({
            qs: {
                corpid: options.corpId,
                corpsecret: getAppSecret(appName)
            },
            uri: 'gettoken'
        }, defaultOptions))

        if (response.errcode !== 0) {
            console.log('获取企业微信的token失败-->', response)
        } else {
            if (options.useRedis && redisClient) {
                redisClient.set(redisKey, response.access_token,{
                    EX: 7200
                });
            }

            console.log('成功获取企业微信的token-->', response.access_token)
        }

        return response.access_token
    }

    function removeAccessToken(appName) {
        if (options.useRedis && redisClient) {
            let redisKey = `qywx-node-access-token-${appName}`;
            redisClient.del(redisKey)
        }
    }

    function checkResponse(appName,response) {
        if (response.errcode === 0) {
            return true;
        }

        if (options.useRedis && redisClient && (response.errcode === 42001 || response.errcode === 40014)) {
            //access_token过期
            removeAccessToken(appName)
        }

        return false;
    }

    return {
        httpGet: async function httpGet(appName, uri, params) {
            if (!params) {
                params = {}
            }
            let qry = Object.assign({
                access_token: await getAccessToken(appName)
            }, params)
            return new Promise((resolve, reject) => {
                rp(Object.assign({
                    uri: uri,
                    qs: qry,
                }, defaultOptions)).then(function (res) {
                    if (checkResponse(appName,res)){
                        resolve(res)
                    } else {
                        reject(res)
                    }
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        httpPost: async function httpPost(appName, uri, data) {
            let accessToken = await getAccessToken(appName)

            let params = Object.assign({
                uri: uri + `?access_token=${accessToken}`,
                method: 'POST',
                body: data
            }, defaultOptions)

            return new Promise((resolve, reject) => {
                rp(params).then(function (res) {
                    if (checkResponse(appName,res)){
                        resolve(res)
                    } else {
                        reject(res)
                    }
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        submitFormData: async function(appName,uri,formData) {
            let accessToken = await getAccessToken(appName)

            let params = Object.assign({
                uri: uri,
                method: 'POST',
                qs: {
                    access_token: accessToken
                },
                formData,
            }, defaultOptions)
            return new Promise((resolve, reject) => {
                rp(params).then(function (res) {
                    if (checkResponse(appName,res)){
                        resolve(res)
                    } else {
                     reject(res)
                    }
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        getAccessToken: getAccessToken,
        removeAccessToken: removeAccessToken,
        getUrl: async function (appName, uri) {
            let accessToken = await getAccessToken(appName)
            return `${options.url}${uri}?access_token=${accessToken}`
        },
        destroy: function () {
            if (redisClient) {
                redisClient.disconnect()
            }
        }
    }
}