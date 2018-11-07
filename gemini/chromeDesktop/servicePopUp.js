var helper = require('../../iesuite/helpme');
var captureLocator = '.popover-section';
var buttonLocator = '.service-link > .unavailable';

gemini.suite('servicePopUp', (suite) => {
    suite.setUrl(helper.urlJson.service[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            actions.wait(1000);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});
