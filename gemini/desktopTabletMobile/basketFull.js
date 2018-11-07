var helper = require('../../iesuite/helpme');

gemini.suite('basketFull', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements('.center-block.product-link')
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"18262789","quantity":1}]});
            });
            helper.clickBasket(actions, find);
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);

        })
        .capture('plain')
        .after(function(actions, find){
            helper.clearCart(actions, find);
        });
});

gemini.suite('basketFullHeader', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"18262789","quantity":1}]});
            });
            helper.clickBasket(actions, find);
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain')
        .after(function(actions, find){
            helper.clearCart(actions, find);
        });
});

gemini.suite('basketFullNotAvailableItem', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('.fancybox-modal.unavailable-objs.visible')
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"18262789","quantity":1},{"code":"81946335","quantity":1}]});            });
            helper.clickBasket(actions, find);
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            helper.clickCheckout(actions, find);
            actions.wait(5000);
        })
        .capture('plain')
        .after(function(actions, find){
            helper.clearCart(actions, find);
        });
});

gemini.suite('basketFullSearchAnalog', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('.fancybox-modal.basket-similar-popup')
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"18262789","quantity":1}]}); });
            helper.clickBasket(actions, find);
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            helper.clickSearchAnalog(actions, find);
            actions.wait(5000);
        })
        .capture('plain')
        .after(function(actions, find){
            helper.clearCart(actions, find);
        });
});

gemini.suite('basketFullShowAddit', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81946335","quantity":1}]});            });
            helper.clickBasket(actions, find);
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            helper.clickShowAdditItem(actions, find);
            actions.wait(5000);
        })
        .capture('plain')
        .after(function(actions, find){
            helper.clearCart(actions, find);
        });
});





