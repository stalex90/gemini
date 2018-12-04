var helper = require('../helpers/helpme');
var pdpPage = require('../helpers/pdpPage');

gemini.suite('pdp', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements({every: '.pdp-product-img__cover.pdp-product-img--shown'}, {every: '.card-small__card-picture-img'})
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain');
});

gemini.suite('pdpHeader', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('pdpCookie', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            helper.loginStaging(actions);
        })
        .capture('plain');
});

gemini.suite('pdpAllCharacteristic', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            pdpPage.clickShowAllCharacters(actions);
        })
        .capture('plain');
});

gemini.suite('pdpFeedback', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            pdpPage.clickFeedback(actions);
        })
        .capture('plain');
});