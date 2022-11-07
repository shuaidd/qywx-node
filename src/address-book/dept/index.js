exports.dept = function (client) {
    return {
        createDept: function (appName, data) {
            return client.httpPost(appName,'/department/create', data)
        },
        updateDept: function (appName, data) {
            return client.httpPost(appName,'/department/update', data)
        },
        deleteDept: function (appName, id) {
            return client.httpGet(appName,'/department/delete', {id})
        },
        getDeptList: function (appName,id) {
            return client.httpGet(appName,'/department/list', {id})
        },
        getSimpleDeptList: function (appName,id) {
            return client.httpGet(appName,'/department/simplelist', {id})
        },
        getDeptDetail: function (appName,id) {
            return client.httpGet(appName,'/department/get', {id})
        }
    }
}
