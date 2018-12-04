var helper = require('../helpers/helpme');
var checkoutPage = require('../helpers/checkoutPage');
var basketPage = require('../helpers/basketPage');


gemini.suite('checkoutPayment', (suite) => {
    suite.setUrl(helper.urlJson.checkout[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            basketPage.clickBasket(actions);
            checkoutPage.clickDeliveryOption(actions);
            checkoutPage.clickCheckout(actions);
            checkoutPage.clickContinueWithoutRegistration(actions);
            checkoutPage.clickTakeFromShop(actions);
            checkoutPage.clickContinueCheckout(actions);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain')
        .after(function(actions, find){
            basketPage.clickBasket(actions);
            basketPage.clearCart(actions);
        });
});


gemini.suite('checkoutPaymentHeader', (suite) => {
    suite.setUrl(helper.urlJson.checkout[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            basketPage.clickBasket(actions);
            checkoutPage.clickDeliveryOption(actions);
            checkoutPage.clickCheckout(actions);
            checkoutPage.clickContinueWithoutRegistration(actions);
            checkoutPage.clickTakeFromShop(actions);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain')
        .after(function(actions, find){
            checkoutPage.clickBackToCart(actions);
            basketPage.clearCart(actions);
        });
});
