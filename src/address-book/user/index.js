exports.user = function (client) {
    return {
        createUser: function (appName, data) {
            return client.httpPost(appName, '/user/create', data)
        },
        getUser: function (appName, userId) {
            return client.httpGet(appName, '/user/get', {userid: userId})
        },
        updateUser: function (appName, data) {
            return client.httpPost(appName, '/user/update', data)
        },
        deleteUser: function (appName, userId) {
            return client.httpGet(appName, '/user/delete', {userid: userId})
        },
        batchDeleteUser: function (appName, userIds) {
            return client.httpPost(appName, '/user/batchdelete', {useridlist: userIds})
        },
        deptUsers: function (appName, deptId) {
            return client.httpGet(appName, '/user/simplelist', {department_id: deptId})
        },
        deptUserDetails: function (appName, deptId) {
            return client.httpGet(appName, '/user/list', {department_id: deptId})
        },
        userIds: function (appName, params) {
            return client.httpPost(appName, '/user/list_id', params)
        },
        userId2OpenId: function (appName, userId) {
            return client.httpPost(appName, '/user/convert_to_openid', {userid: userId})
        },
        openId2UserId: function (appName, openId) {
            return client.httpPost(appName, '/user/convert_to_userid', {openid: openId})
        },
        userAuthSuccess: function (appName, userId) {
            return client.httpGet(appName, '/user/authsucc', {userid: userId})
        },
        batchInvite: function (appName, data) {
            return client.httpPost(appName, '/batch/invite', data)
        },
        getJoinQrCode: function (appName, sizeType) {
            return client.httpGet(appName, '/corp/get_join_qrcode', {size_type: sizeType || 1})
        },
        getUserIdByTelephone: function (appName, mobile) {
            return client.httpPost(appName, '/user/getuserid', {mobile})
        },
        getUserIdByEmail: function (appName, data) {
            return client.httpPost(appName, '/user/get_userid_by_email', data)
        }
    }
}