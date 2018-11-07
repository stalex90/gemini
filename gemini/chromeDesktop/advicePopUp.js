var helper = require('../../iesuite/helpme');
var captureLocator = '.desc-block';
var buttonLocator = '.howto-views';

gemini.suite('advicePopUpHowTo', (suite) => {
    suite.setUrl(helper.urlJson.advice[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            if (helper.flag == 0) {
                helper.disableTopPanel2(actions, find);
            }else {
                helper.disableTopPanel(actions, find);

            }
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});
