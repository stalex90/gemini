var helper = require('../helpers/helpme');

gemini.suite('obratnaya-svyaz', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain');
});

gemini.suite('obratnaya-svyazHeader', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('obratnaya-svyazCookie', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});