var helper = require('../helpers/helpme');
var plpPage = require('../helpers/plpPage');

gemini.suite('plp', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            plpPage.removeSeeCoutItemBlock(actions);
        })
        .capture('plain');
});

gemini.suite('plpHeader', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('plpCookie', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});
