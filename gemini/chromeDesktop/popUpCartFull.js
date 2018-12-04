var helper = require('../helpers/helpme');
var captureLocator = '.basket-list';
var buttonLocator = 'span[class*="icon-basket"]';

gemini.suite('advicePopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.advice[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('brandPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.brand[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('brandsPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.brands[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('cataloguePopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.catalogue[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('comparePopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.compare[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('faqPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.faq[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('mainPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.main[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('obratnayaSvyazPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('pdpPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('plpPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('proektyPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.proekty[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('registerPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.register[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('servicePopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.service[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('shopPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.shop[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('srpPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});

gemini.suite('wishlistPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.wishlist[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            helper.loginStaging(actions);
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"12420870","quantity":1}]});
            });
            actions.executeJS(function (window) {
                window.eval("location.reload();");
            });
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.mouseMove(this.button);
            actions.wait(3000);
        });
});






