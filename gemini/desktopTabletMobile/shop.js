var helper = require('../helpers/helpme');

gemini.suite('shop', (suite) => {
    suite.setUrl(helper.urlJson.shop[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements({every: '.wcommunity_wrap'})
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain');
});

gemini.suite('shopHeader', (suite) => {
    suite.setUrl(helper.urlJson.shop[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('shopCookie', (suite) => {
    suite.setUrl(helper.urlJson.shop[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

