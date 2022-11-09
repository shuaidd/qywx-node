exports.message = function(client) {
    return {
        sendMessage: function(appName, data) {
            return client.httpPost(appName,'/message/send', data);
        },
        updateTemplateCard: function(appName, data) {
            return client.httpPost(appName,'/message/update_template_card',data);
        },
        revokeMessage: function(appName, data) {
            return client.httpPost(appName,'/message/recall', data)
        },
        createAppChat: function(appName, data) {
            return client.httpPost(appName,'/appchat/create', data)
        },
        updateAppChat: function(appName, data) {
            return client.httpPost(appName,'/appchat/update',data)
        },
        getAppChat: function(appName, chatid) {
            return client.httpGet(appName,'/appchat/get',{chatid})
        },
        sendChatMessage: function (appName,data) {
            return client.httpPost(appName,'/appchat/send', data)
        },
        sendLinkCorpMessage: function (appName,data) {
            return client.httpPost(appName,'/linkedcorp/message/send', data)
        },
        sendExternalContactMessage: function (appName,data) {
            return client.httpPost(appName,'/externalcontact/message/send', data)
        }
    }
}