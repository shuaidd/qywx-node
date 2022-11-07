exports.user = function (client) {
    return {
        createUser: function (appName, data) {
            return client.httpPost(appName,'/user/create', data)
        },
        getUser: function (appName, userId) {
            return client.httpGet(appName,'/user/get',{userid: userId})
        },
        updateUser: function (appName,data) {
            return client.httpPost(appName,'/user/update',data)
        },
        deleteUser: function (appName, userId) {
            return client.httpGet(appName,'/user/delete',{userid: userId})
        }
    }
}