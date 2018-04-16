class Bg {
    constructor() {
        this.initProxy(), chrome['browserAction'].onClicked.addListener(() => {
            chrome['tabs'].create({
                url: 'https://web.telegram.org',
            });
        });
    }
    initProxy() {
        const a = {
            mode: 'pac_script',
            pacScript: {
                data: `function FindProxyForURL(url, host) {if (shExpMatch(host, 'telegram.*') || shExpMatch(host, '*.telegram.*') || shExpMatch(host, 't.me') || shExpMatch(host, '*.web.telegram.*')) {return "HTTPS nl13.postls.com:443; HTTPS nl5.postls.com:443; HTTPS nl6.postls.com:443; HTTPS uk8.postls.com:443; HTTPS uk19.postls.com:443; DIRECT;"} return "DIRECT";}`
            }
        };
        chrome['proxy'].settings.set({
            value: a,
            scope: 'regular'
        }, () => console.log('Proxy enabled')), chrome['proxy'].onProxyError.addListener((a) => console.log(a));
    }
}
var bg = new Bg;