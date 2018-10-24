module.exports = {
    rootUrl: 'https://tver.leroymerlin.ru/',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    windowSize: '1600x900',
    //calibrate: false,

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
/*        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                version: "58.0.2"
            }
        }*/
    },

    system: {
        plugins: {
            'html-reporter/gemini': {
                enabled: true,
                path: 'my/gemini-reports',
                defaultView: 'all',
                baseHost: 'test.com'
            }
        }
    }
};