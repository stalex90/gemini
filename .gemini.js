module.exports = {
    rootUrl: 'https://tver.leroymerlin.ru/',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    windowSize: '1600x900',
    calibrate: false,
    compositeImage: true,
    sessionsPerBrowser: 2,
    screenshotMode: 'viewport',
    screenshotDelay: 1000,
    suitesPerSession: 100,

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [ 'headless' ],
                }
            }
        },

        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            }
        }
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
    },
    sets: {
        chrome: {
            files: ['gemini/chromesuite'],
            browsers: ['chrome']
        },
        firefox: {
            files: ['gemini/firefoxsuite'],
            browsers: ['firefox']
        }
    }
};