var helper = require('../helpers/helpme');

gemini.suite('brands', (suite) => {
    suite.setUrl(helper.urlJson.brands[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements({every: '.brands-image'})
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

gemini.suite('brandsHeader', (suite) => {
    suite.setUrl(helper.urlJson.brands[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});