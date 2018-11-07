var helper = require('../../iesuite/helpme');

gemini.suite('srpLarge', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements({every: '.hover-image-buttons-inner'})
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            helper.clickLargeCard(actions, find);

        })
        .capture('plain');
});

gemini.suite('srpLargeHeader', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
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