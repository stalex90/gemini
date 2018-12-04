var helper = require('../helpers/helpme');
var servicePage = require('../helpers/servicePage');

gemini.suite('service', (suite) => {
    suite.setUrl(helper.urlJson.service[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements({every: '.service-link'})
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain');
});

gemini.suite('serviceHeader', (suite) => {
    suite.setUrl(helper.urlJson.service[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('serviceCookie', (suite) => {
    suite.setUrl(helper.urlJson.service[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('serviceShowOtherService', (suite) => {
    suite.setUrl(helper.urlJson.service[process.env.LM_FLAG])
        .setCaptureElements('.fancybox-modal.change-service-city-modal')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            servicePage.clickShowOtherService(actions);
        })
        .capture('plain');
});