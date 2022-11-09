exports.userExport = function(client) {
    return {
        exportSimpleUser: function (appName, data) {
            return client.httpPost(appName,'/export/simple_user',data)
        },
        exportUser: function (appName, data) {
            return client.httpPost(appName,'/export/user',data)
        },
        exportDepartment: function (appName, data) {
            return client.httpPost(appName,'/export/department',data)
        },
        exportTagUser: function (appName, data) {
            return client.httpPost(appName,'/export/taguser',data)
        },
        getResult: function (appName, jobid) {
            return client.httpGet(appName,'/export/get_result',{jobid})
        }
    }
}