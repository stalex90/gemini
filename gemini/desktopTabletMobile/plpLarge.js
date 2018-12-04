var helper = require('../helpers/helpme');
var plpPage = require('../helpers/plpPage');

gemini.suite('plpLarge', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            plpPage.removeSeeCoutItemBlock(actions);
            plpPage.clickLargeCard(actions);
        })
        .capture('plain');
});

gemini.suite('plpLargeHeader', (suite) => {
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