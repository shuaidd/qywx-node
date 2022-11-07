module.exports = {
    getConfig: () => {
        return {
            url: 'https://qyapi.weixin.qq.com/cgi-bin',
            corpId: 'ww36e0a51aab349a7d',
            timeout: 50000,
            applications: {
                'address-book': {
                    appName: 'address-book',
                    appDescription: '通讯录管理',
                    secret: 'AfjvAed_ulqhK0OqTprDQ6xOSnqaT34ll2LsRe0D2NA'
                }
            },
            callbacks: []
        }
    }
}