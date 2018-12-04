var helper = require('../helpers/helpme');
var plpPage = require('../helpers/plpPage');



gemini.suite('plpFastView', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements('.product-quick-view.card-data.container-fluid')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            plpPage.clickFastView(actions);
        })
        .capture('plain');
});