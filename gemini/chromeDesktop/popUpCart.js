var helper = require('../helpers/helpme');
var captureLocator = '.basket-list-empty';
var buttonLocator = '.basket-link';

gemini.suite('advicePopupCart', (suite) => {
    suite.setUrl(helper.urlJson.advice[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('brandPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.brand[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('brandsPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.brands[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('cataloguePopupCart', (suite) => {
    suite.setUrl(helper.urlJson.catalogue[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('comparePopupCart', (suite) => {
    suite.setUrl(helper.urlJson.compare[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('faqPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.faq[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('mainPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.main[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('obratnayaSvyazPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('pdpPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('plpPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('proektyPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.proekty[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('registerPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.register[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('servicePopupCart', (suite) => {
    suite.setUrl(helper.urlJson.service[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('shopPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.shop[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('srpPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});

gemini.suite('wishlistPopupCart', (suite) => {
    suite.setUrl(helper.urlJson.wishlist[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
        });
});






