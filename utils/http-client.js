const request = require('request-promise');

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
            return '2RD85_EuJIyN1bxVNDE9WPw_5Rl5UtBmIjwLmaGbphGP-j2YGD9rPvIJel9XstJSkRIQw92fkfZvBezZnZ0Q_tinl1F6US_C6wc8RnlYbFo_IQHGZd_FhzNU9_gvnR0yMO2_S8kVEd1LbBi6rHyTls96bQm9J-z_SEbCcqVIPmlgqtDd-pk1zfc9Y1jmwGg0trOkjVM9vZxlQ8vsCdlUJw';
        }

        let response = await request(Object.assign({
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
            let qry = Object.assign({
                access_token: await getAccessToken(appName)
            }, params)

            return request(Object.assign({
                uri: uri,
                qs: qry,
            }, defaultOptions))
        },
        httpPost: async function httpPost(appName, uri, data) {
            let accessToken = await getAccessToken(appName)

            return request(Object.assign({
                uri: uri + `?access_token=${accessToken}`,
                method: 'POST',
                body: data
            }, defaultOptions))
        },
        getAccessToken: getAccessToken
    }
}