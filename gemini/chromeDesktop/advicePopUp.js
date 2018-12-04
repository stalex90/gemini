var helper = require('../helpers/helpme');
var captureLocator = '.desc-block';
var buttonLocator = '.howto-views';

gemini.suite('advicePopUpHowTo', (suite) => {
    suite.setUrl(helper.urlJson.advice[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});
