var helper = require('../../iesuite/helpme');
var captureLocator = '.basket-list';
var buttonLocator = 'span[class*="icon-basket"]';

gemini.suite('advicePopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.advice[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('brandPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.brand[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('brandsPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.brands[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('cataloguePopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.catalogue[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('comparePopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.compare[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('faqPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.faq[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('mainPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.main[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('obratnayaSvyazPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('pdpPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('plpPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('proektyPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.proekty[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('registerPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.register[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('servicePopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.service[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('shopPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.shop[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('srpPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});

gemini.suite('wishlistPopupCartFull', (suite) => {
    suite.setUrl(helper.urlJson.wishlist[process.env.LM_FLAG])
        .setCaptureElements(captureLocator)
        .before(function(actions, find){
            this.button = find(buttonLocator);
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.executeJS(function (window) {
                window.CookieUtils.setBasketCookie({"cartNumber":"","syncStatus":1,"products":[{"code":"81964385","quantity":1}]});
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
        });
});






