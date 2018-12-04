var helper = require('../helpers/helpme');
var srpPage = require('../helpers/srpPage');

gemini.suite('srp', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements({every: '.hover-image-buttons-inner'})
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain');
});

gemini.suite('srpHeader', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('srpCookie', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('srpChangeShop', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements('.fancybox-modal.fancybox-modal--change-chop')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            srpPage.clickSearchChangeShop(actions);
        })
        .capture('plain');
});

