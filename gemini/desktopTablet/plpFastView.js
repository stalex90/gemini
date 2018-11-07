var helper = require('../../iesuite/helpme');


gemini.suite('plpFastView', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements('.product-quick-view.card-data.container-fluid')
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.clickFastView(actions, find);
        })
        .capture('plain');
});