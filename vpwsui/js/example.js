function exampleData() {
  return {
    page: 'functionality',
    socks5: {
      events: {
        mouseover: false,
      },
      enabled: false,
      listen: 1080,
    },
    httpconnect: {
      events: {
        mouseover: false,
      },
      enabled: false,
      listen: 8080,
    },
    ss: {
      events: {
        mouseover: false,
      },
      enabled: false,
      listen: 8379,
      password: '123456'
    },
    dns: {
      events: {
        mouseover: false,
      },
      enabled: false,
      listen: 53,
    },
    pac: {
      events: {
        mouseover: false,
      },
      enabled: false,
      listen: 20080,
    },
    gateway: {
      events: {
        mouseover: false,
      },
      enabled: false,
    },
    autosign: {
      events: {
        mouseover: false,
      },
      enabled: false,
    },
    directrelay: {
      events: {
        mouseover: false,
      },
      enabled: false,
    },
    proxyrelay: {
      events: {
        mouseover: false,
      },
      enabled: false,
    },
    serverUser: 'wkgcass',
    serverPass: 'p@sSw0rd',
    hc: {
      events: {
        mouseover: false,
      },
      enabled: false,
    },
    certauth: {
      events: {
        mouseover: false,
      },
      enabled: false,
    },
    lastServerGroupIndex: 0,
    serverGroupList: [
      {
        index: 0,
        name: 'DEFAULT',
        lastServerIndex: 0,
        serverList: [
          {
            index: 0,
            protocol: 'websockss',
            kcp: {
              events: {
                mouseover: false,
              },
              enabled: false,
            },
            ip: '100.1.2.3',
            port: 443,
          },
        ],
        lastProxyRuleIndex: 0,
        proxyRuleList: [
          {
            index: 0,
            rule: '/.*google.*/',
            white: {
              events: {
                mouseover: false,
              },
              enabled: false,
            },
          },
        ],
        lastDnsRuleIndex: 0,
        dnsRuleList: [
          {
            index: 0,
            rule: '/.*pixiv.*/'
          },
        ],
      },
    ],
    lastDirectRelayRuleIndex: 0,
    directRelayRuleList: [
      {
        index: 0,
        rule: '/.*pixiv.*/',
      },
    ],
  };
}
