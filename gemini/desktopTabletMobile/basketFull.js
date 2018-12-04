var helper = require('../helpers/helpme');
var checkoutPage = require('../helpers/checkoutPage');
var basketPage = require('../helpers/basketPage');



gemini.suite('basketFull', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements('.center-block.product-link')
        .before(function(actions, find){
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"18262789","quantity":1}]});
            });
            basketPage.clickBasket(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);

        })
        .capture('plain')
        .after(function(actions, find){
            basketPage.clearCart(actions);
        });
});

gemini.suite('basketFullHeader', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find){
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"18262789","quantity":1}]});
            });
            basketPage.clickBasket(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain')
        .after(function(actions, find){
            basketPage.clearCart(actions);
        });
});

gemini.suite('basketFullNotAvailableItem', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('.fancybox-modal.unavailable-objs.visible')
        .before(function(actions, find){
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"18262789","quantity":1},{"code":"81946335","quantity":1}]});            });
            basketPage.clickBasket(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            checkoutPage.clickCheckout(actions);
        })
        .capture('plain')
        .after(function(actions, find){
            basketPage.clearCart(actions);
        });
});

gemini.suite('basketFullSearchAnalog', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('.fancybox-modal.basket-similar-popup')
        .before(function(actions, find){
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"18262789","quantity":1}]}); });
            basketPage.clickBasket(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            basketPage.clickSearchAnalog(actions);
        })
        .capture('plain')
        .after(function(actions, find){
            basketPage.clearCart(actions);
        });
});

gemini.suite('basketFullShowAddit', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81946335","quantity":1}]});});
            basketPage.clickBasket(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            basketPage.clickShowAdditItem(actions);
        })
        .capture('plain')
        .after(function(actions, find){
            basketPage.clearCart(actions);
        });
});





