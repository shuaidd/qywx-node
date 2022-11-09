exports.userImport = function (client) {
    return {
        batchSyncUser: function (appName, data) {
            return client.httpPost(appName,'/batch/syncuser', data)
        },
        batchReplaceUser: function (appName, data) {
            return client.httpPost(appName,'/batch/replaceuser', data)
        },
        batchReplaceParty: function (appName, data) {
            return client.httpPost(appName,'/batch/replaceparty', data)
        },
        getResult: function (appName, jobid) {
            return client.httpGet(appName,'/batch/getresult', {jobid})
        }
    }
}