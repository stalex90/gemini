var helper = require('../helpers/helpme');
var captureLocator = '.popover-section';
var buttonLocator = '.service-link > .unavailable';

gemini.suite('servicePopUp', (suite) => {
    suite.setUrl(helper.urlJson.service[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            actions.wait(1000);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});
