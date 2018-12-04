var helper = require('../helpers/helpme');

gemini.suite('brand', (suite) => {
    suite.setUrl(helper.urlJson.brand[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements({every: '.editorial-image'}, {every: '.banner-image'})
        .before(function(actions, find){
            this.button = find('body');
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain');
});

gemini.suite('brandHeader', (suite) => {
    suite.setUrl(helper.urlJson.brand[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('brandCookie', (suite) => {
    suite.setUrl(helper.urlJson.brand[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});
