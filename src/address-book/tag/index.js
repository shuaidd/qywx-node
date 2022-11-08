exports.tag = function (client) {
    return {
        createTag: function (appName, data) {
           return client.httpPost(appName,'/tag/create',data)
        },
        updateTag: function (appName, data) {
            return client.httpPost(appName,'/tag/update',data)
        },
        deleteTag: function (appName, tagId) {
            return client.httpGet(appName,'/tag/delete',{tagid: tagId})
        },
        getTagDetail: function (appName,tagId) {
            return client.httpGet(appName,'/tag/get',{tagid: tagId})
        },
        addTagUsers: function (appName,data) {
            return client.httpPost(appName,'/tag/addtagusers',data)
        },
        deleteTagUsers: function (appName,data) {
            return client.httpPost(appName,'/tag/deltagusers',data)
        },
        getTagList: function (appName) {
            return client.httpGet(appName,'/tag/list')
        }
    }
}