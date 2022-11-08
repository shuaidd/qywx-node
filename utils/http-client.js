const rp = require('request-promise');
const request = require('request');

exports.httpClient = function (options) {

    if (!options) {
        options = {};
    } else {
        if (!options.corpId || !options.applications) {
            throw new Error('缺少企业微信应用配置信息')
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

        if (appName) {
            return 'D4_gCV7-HzdxbwQhyFv723WdnA2mplhY3kQIZxKzfsYJGPBuzQ-QozvmclzfL_R7iP1M6z05PNClU6srd7TvclZZgyyp_HbOfjjQt1JL4NpZZ75fkpfl0YXgg3JGMue1GvXihs90YM487jgmOR5lUeHa5M5XE9EATiJjwfLB1et9i3hxjC5935w_Wptk0OtuC1EO5M3SGwL7EoifD3bXTA';
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
            console.log('成功获取企业微信的token-->', response.access_token)
        }

        return response.access_token
    }

    return {
        httpGet: async function httpGet(appName, uri, params) {
            if (!params) {
                params = {}
            }
            let qry = Object.assign({
                access_token: await getAccessToken(appName)
            }, params)

            console.log('查询的参数信息--',qry)
            return rp(Object.assign({
                uri: uri,
                qs: qry,
            }, defaultOptions))
        },
        httpPost: async function httpPost(appName, uri, data) {
            let accessToken = await getAccessToken(appName)

            let params = Object.assign({
                uri: uri + `?access_token=${accessToken}`,
                method: 'POST',
                body: data
            }, defaultOptions)

            console.log('查询的参数信息--',params)

            return rp(params)
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
            return rp(params)
        },
        getAccessToken: getAccessToken,
        getUrl: async function (appName, uri) {
            let accessToken = await getAccessToken(appName)
            return `${options.url}${uri}?access_token=${accessToken}`
        }
    }
}