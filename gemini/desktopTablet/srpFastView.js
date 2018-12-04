var helper = require('../helpers/helpme');
var srpPage = require('../helpers/srpPage');

gemini.suite('srpFastView', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements('.product-quick-view.card-data.container-fluid')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            srpPage.clickFastView(actions);
        })
        .capture('plain');
});