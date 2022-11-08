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
        }
    }
}