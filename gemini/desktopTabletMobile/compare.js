var helper = require('../helpers/helpme');
var comparePage = require('../helpers/comparePage');

gemini.suite('compare', (suite) => {
    suite.setUrl(helper.urlJson.compare[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
        })
        .capture('plain');
});


gemini.suite('compareFull', (suite) => {
    suite.setUrl("catalogue/suhie-smesi-dlya-pola/")
        .setCaptureElements('body')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            comparePage.makeCompare(actions);
            helper.disableTopPanel(actions, find);
        })
        .capture('all')
        .capture('different', function(actions, find) {
            comparePage.clickDifferentCompare(actions);
        })
});


gemini.suite('compareHeader', (suite) => {
    suite.setUrl(helper.urlJson.compare[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('compareCookie', (suite) => {
    suite.setUrl(helper.urlJson.compare[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});
