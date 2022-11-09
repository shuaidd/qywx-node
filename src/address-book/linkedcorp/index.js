exports.linkedCorp = function (client) {
    return {
        getPermList: function(appName, data) {
            return client.httpPost(appName,'/linkedcorp/agent/get_perm_list',data)
        },
        getUser: function(appName, data) {
            return client.httpPost(appName,'/linkedcorp/user/get',data)
        },
        getSimpleUserList: function (appName,data) {
            return client.httpPost(appName,'/linkedcorp/user/simplelist',data)
        },
        getUserList: function (appName,data) {
            return client.httpPost(appName,'/linkedcorp/user/list',data)
        },
        getDeptList: function (appName,data) {
            return client.httpPost(appName,'/linkedcorp/department/list',data)
        }
    }
}