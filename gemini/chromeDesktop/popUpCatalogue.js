var helper = require('../helpers/helpme');
var captureLocator = '.catalog-menu__list.level-1';
var buttonLocator = '.btn.green-button.catalog-button.dropdown-toggle';

gemini.suite('advicePopupCatalogue', (suite) => {
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

gemini.suite('basketPopupCatalogue', (suite) => {
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

gemini.suite('brandPopupCatalogue', (suite) => {
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

gemini.suite('brandsPopupCatalogue', (suite) => {
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

gemini.suite('cataloguePopupCatalogue', (suite) => {
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

gemini.suite('checkoutPopupCatalogue', (suite) => {
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

gemini.suite('comparePopupCatalogue', (suite) => {
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

gemini.suite('faqPopupCatalogue', (suite) => {
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

gemini.suite('mainPopupCatalogue', (suite) => {
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

gemini.suite('obratnayaSvyazPopupCatalogue', (suite) => {
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

gemini.suite('pdpPopupCatalogue', (suite) => {
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

gemini.suite('plpPopupCatalogue', (suite) => {
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

gemini.suite('proektyPopupCatalogue', (suite) => {
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

gemini.suite('registerPopupCatalogue', (suite) => {
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

gemini.suite('servicePopupCatalogue', (suite) => {
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

gemini.suite('shopPopupCatalogue', (suite) => {
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

gemini.suite('srpPopupCatalogue', (suite) => {
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

gemini.suite('wishlistPopupCatalogue', (suite) => {
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





