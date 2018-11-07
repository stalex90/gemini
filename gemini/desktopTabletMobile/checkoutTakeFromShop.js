var helper = require('../../iesuite/helpme');

gemini.suite('checkoutTakeFromShop', (suite) => {
    suite.setUrl(helper.urlJson.checkout[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
            });
            helper.clickBasket(actions, find);
            actions.wait(5000);
            helper.clickDeliveryOption(actions, find);
            helper.clickCheckout(actions, find);
            actions.wait(5000);
            helper.clickContinueWithoutRegistration(actions, find);
            actions.wait(5000);
            helper.clickTakeFromShop(actions, find);
            actions.wait(5000);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain')
        .after(function(actions, find){
            helper.clickBackToCart(actions, find);
            actions.wait(3000);
            helper.clearCart(actions, find);
        });
});

gemini.suite('checkoutTakeFromShopHeader', (suite) => {
    suite.setUrl(helper.urlJson.checkout[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
            });
            helper.clickBasket(actions, find);
            actions.wait(5000);
            helper.clickDeliveryOption(actions, find);
            helper.clickCheckout(actions, find);
            actions.wait(5000);
            helper.clickContinueWithoutRegistration(actions, find);
            actions.wait(5000);
            helper.clickTakeFromShop(actions, find);
            actions.wait(5000);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain')
        .after(function(actions, find){
            helper.clickBackToCart(actions, find);
            actions.wait(3000);
            helper.clearCart(actions, find);
        });
});