var helper = require('../../iesuite/helpme');
var captureLocator = '.popover.fade.bottom.in';
var buttonLocator = '.card-order-payment-type-link-text';

gemini.suite('pdpPopUpPayment', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('pdpPopUpPickup', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements('.pdp-detailed__card-order-delivery.pdp-detailed__card-order-delivery--padding-top')
        .before(function(actions, find){
            this.button = find('.select2-selection__arrow');
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            actions.wait(1000);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.mouseDown(this.button);
            actions.mouseUp(this.button);
        });
});