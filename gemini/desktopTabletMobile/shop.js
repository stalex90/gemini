var helper = require('../../iesuite/helpme');

gemini.suite('shop', (suite) => {
    suite.setUrl(helper.urlJson.shop[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements({every: '.wcommunity_wrap'})
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
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
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
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
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

