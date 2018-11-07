module.exports = {
    rootUrl: (process.env.LM_FLAG==0) ? 'https://kostroma.leroymerlin.ru' : 'http://drulmttaema01.int.adeo.com:4522/content/elbrus/kostroma',
    gridUrl: 'http://127.0.0.1:4444/wd/hub',
    //windowSize: '1600x900',
    calibrate: false,
    compositeImage: true,
    sessionsPerBrowser: 1,
    screenshotMode: 'viewport',
    screenshotDelay: 1000,
    suitesPerSession: 1,

    browsers: {
        'chrome-1600x900': {
            windowSize: '1600x900',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [ 'headless' ]
                }
            },

        },

        'chrome-1024x768': {
            windowSize: '1024x768',

            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [ 'headless' ]
                }
            }
        },

        'chrome-800x600': {
            windowSize: '800x600',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [ 'headless' ]
                }
            }
        },

        'chrome-480x800': {
            windowSize: '480x800',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: [ 'headless' ]
                }
            }
        },

        'firefox-1600x900': {
            windowSize: '1600x900',
            desiredCapabilities: {
                browserName: 'firefox',
                "moz:firefoxOptions": {
                    args: ['-headless']
                }
            }
        },

        'firefox-1024x768': {
            windowSize: '1024x768',
            desiredCapabilities: {
                browserName: 'firefox',
                "moz:firefoxOptions": {
                    args: ['-headless']
                }
            }
        },
        'firefox-800x600': {
            windowSize: '800x600',
            desiredCapabilities: {
                browserName: 'firefox',
                "moz:firefoxOptions": {
                    args: ['-headless']
                }
            }
        },
        'firefox-480x800': {
            windowSize: '480x800',
            desiredCapabilities: {
                browserName: 'firefox',
                "moz:firefoxOptions": {
                     args: ['-headless']
                }
            }
        }
        /*,
        ie: {
            desiredCapabilities: {
                browserName: 'internet explorer'
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
    },
    sets: {
        desktopTablet: {
            files: ['gemini/desktopTablet'],
            browsers: ['chrome-1600x900', 'chrome-1024x768', 'chrome-800x600', 'firefox-1600x900', 'firefox-1024x768', 'firefox-800x600']
        },
        desktopTabletMobile: {
            files: ['gemini/desktopTabletMobile'],
            browsers: ['chrome-1600x900', 'chrome-1024x768', 'chrome-800x600', 'chrome-480x800', 'firefox-1600x900', 'firefox-1024x768', 'firefox-800x600', 'firefox-480x800']
        },
        chromeDesktop: {
            files: ['gemini/chromeDesktop'],
            browsers: ['chrome-1600x900', 'chrome-1024x768']
        }/*,
        ie: {
            files: ['gemini/iesuite'],
            browsers: ['ie']
        }*/
    }
};