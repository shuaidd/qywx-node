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
                },
                report: {
                    appName: 'report',
                    appDescription: '汇报',
                    secret: 'QjsfcXZSM1R82nm8nMnWzvWgElTJRbl1I2B0FFRBliw',
                    agentId: '1000009'
                }
            },
            callbacks: [],
            useRedis: true,
            redis: {}
        }
    }
}