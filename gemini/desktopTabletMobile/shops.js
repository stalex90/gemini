var helper = require('../helpers/helpme');
var shopsPage = require('../helpers/shopsPage');

gemini.suite('shops', (suite) => {
    suite.setUrl(helper.urlJson.shops[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements('.ya-map')
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

gemini.suite('shopsHeader', (suite) => {
    suite.setUrl(helper.urlJson.shops[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('shopsCookie', (suite) => {
    suite.setUrl(helper.urlJson.shops[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('shopsChangeRegion', (suite) => {
    suite.setUrl(helper.urlJson.shops[process.env.LM_FLAG])
        .setCaptureElements('.fancybox-stage > div > div')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            shopsPage.clickShopChangeRegion(actions);
        })
        .capture('plain');
});