var helper = require('../helpers/helpme');
var srpPage = require('../helpers/srpPage');


gemini.suite('srpLarge', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements({every: '.hover-image-buttons-inner'})
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            srpPage.clickLargeCard(actions);

        })
        .capture('plain');
});

gemini.suite('srpLargeHeader', (suite) => {
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