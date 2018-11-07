var helper = require('../../iesuite/helpme');

gemini.suite('advice', (suite) => {
    suite.setUrl(helper.urlJson.advice[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements({every: '.img-responsive.howto-picture'})
        .before(function(actions, find) {
            if (helper.flag != 0) {
            helper.loginStaging(actions, find);
               }
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            if (helper.flag == 0) {
                helper.disableTopPanel2(actions, find);
            }else {
                helper.disableTopPanel(actions, find);

            }
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain');
});

if (helper.flag == 0){
    var captureElement = "div[class*=\"headerMain-inner\"] > div.container";
}else {
    var captureElement = "div[class*=\"header-inner\"] > div.container";
}

gemini.suite('adviceHeader', (suite) => {
    suite.setUrl(helper.urlJson.advice[process.env.LM_FLAG])
        .setCaptureElements(captureElement)
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
            //helper.clickYesRegion(actions, find);
            //helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});


gemini.suite('adviceCookie', (suite) => {
    suite.setUrl(helper.urlJson.advice[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});