var helper = require('../helpers/helpme');
var captureLocator = '.shop-list-empty';
var buttonLocator = '.shop-list-link';

gemini.suite('advicePopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('basketPopupShopList', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});


gemini.suite('brandPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('brandsPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('cataloguePopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('checkoutPopupShopList', (suite) => {
    suite.setUrl(helper.urlJson.checkout[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('comparePopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('faqPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('mainPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('obratnayaSvyazPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('pdpPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('plpPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('proektyPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('registerPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('servicePopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('shopPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('srpPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});

gemini.suite('wishlistPopupShopList', (suite) => {
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
            actions.wait(3000);
        });
});






