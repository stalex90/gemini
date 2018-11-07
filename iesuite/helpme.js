/**
 * flag = 0 - берется url прода, flag != 0 - берется тестовый url
 */
var flag = process.env.LM_FLAG;

var urlJson = JSON.parse("{\n" +
    "  \"main\": [\n" +
    "    \"/\",\n" +
    "    \"ru.html?wcmmode=disabled\"\n" +
    "  ],\n" +
    "  \"catalogue\": [\n" +
    "    \"catalogue/stroymaterialy/\",\n" +
    "    \"ru/catalogue/stroymaterialy.html\"\n" +
    "  ],\n" +
    "  \"plp\": [\n" +
    "    \"catalogue/shtukaturki/\",\n" +
    "    \"ru/catalogue/shtukaturki.html\"\n" +
    "  ],\n" +
    "  \"pdp\": [\n" +
    "    \"product/shtukaturka-cementnaya-axton-5-kg-81946337/\",\n" +
    "    \"ru/product/shtukaturka-cementnaya-axton-5-kg-81946337.html\"\n" +
    "  ],\n" +
    "  \"basket\": [\n" +
    "    \"basket/\",\n" +
    "    \"ru/basket.html\"\n" +
    "  ],\n" +
    "  \"wishlist\": [\n" +
    "    \"shopping-list/\",\n" +
    "    \"ru/shopping-list.html\"\n" +
    "  ],\n" +
    "  \"checkout\": [\n" +
    "    \"checkout/delivery-option/\",\n" +
    "    \"ru/checkout/delivery-option.html\"\n" +
    "  ],\n" +
    "  \"faq\": [\n" +
    "    \"faq/\",\n" +
    "    \"ru/faq.html\"\n" +
    "  ],\n" +
    "  \"advice\": [\n" +
    "    \"advice/\",\n" +
    "    \"ru/advice.html\"\n" +
    "  ],\n" +
    "  \"service\": [\n" +
    "    \"shop/kostroma/service/\",\n" +
    "    \"ru/shop/kostroma/service.html\"\n" +
    "  ],\n" +
    "  \"shops\": [\n" +
    "    \"shop/\",\n" +
    "    \"ru/shop.html\"\n" +
    "  ],\n" +
    "  \"shop\": [\n" +
    "    \"shop/kostroma/\",\n" +
    "    \"ru/shop/kostroma.html\"\n" +
    "  ],\n" +
    "  \"proekty\": [\n" +
    "    \"proekty/\",\n" +
    "    \"ru/proekty.html\"\n" +
    "  ],\n" +
    "  \"compare\": [\n" +
    "    \"catalogue/compare/\",\n" +
    "    \"ru/catalogue/compare.html\"\n" +
    "  ],\n" +
    "  \"register\": [\n" +
    "    \"lk/register/\",\n" +
    "    \"ru/lk/register.html\"\n" +
    "  ],\n" +
    "  \"obratnayaSvyaz\": [\n" +
    "    \"company/obratnaya-svyaz/\",\n" +
    "    \"ru/company/obratnaya-svyaz.html\"\n" +
    "  ],\n" +
    "  \"brands\": [\n" +
    "    \"brands/\",\n" +
    "    \"ru/brands.html\"\n" +
    "  ],\n" +
    "  \"brand\": [\n" +
    "    \"brands/axton/\",\n" +
    "    \"ru/brands/axton.html\"\n" +
    "  ],\n" +
    "  \"srp\": [\n" +
    "    \"search/?q=дверь\",\n" +
    "    \"ru/search.html?q=дверь\"\n" +
    "  ]\n" +
    "}");

function disableTopPanel(actions, find) {
    actions.executeJS(function(window) {window.scroll(0,500);});
    actions.wait(1000);
    actions.executeJS(function(window) {window.eval("if (document.getElementsByClassName('header-inner is-sticky').length >0){\n" +
        "    document.getElementsByClassName('header-inner is-sticky')[0].style.position = 'static';\n" +
        "}");});
}

function disableTopPanel2(actions, find) {
    actions.executeJS(function(window) {window.scroll(0,500);});
    actions.wait(1000);
    actions.executeJS(function(window) {window.eval("if (document.getElementsByClassName('headerMain-inner is-sticky').length >0){\n" +
        "    document.getElementsByClassName('headerMain-inner is-sticky')[0].style.position = 'static';\n" +
        "}");});
}

function scrollDown(actions, find) {
    actions.executeJS(function(window) {window.scroll(0,500);});
    actions.wait(1000);
}


function loginStaging(actions, find) {
    actions.executeJS(function(window) {window.eval("document.getElementsByClassName('coral-Form-field coral3-Textfield')[0].setAttribute('value','admin');");});
    actions.executeJS(function(window) {window.eval("document.getElementsByClassName('coral-Form-field coral3-Textfield')[1].setAttribute('value','admin');");});
    actions.wait(1000);
    actions.executeJS(function(window) {window.eval("document.getElementsByClassName('coral3-Button coral3-Button--primary')[0].click();");});
    actions.wait(5000);
}

function clickYesRegion(actions, find) {
        actions.executeJS(function (window) {
            window.eval("if (document.getElementsByClassName('green-button confirm-region-link').length >0){\n" +
                "    document.getElementsByClassName('green-button confirm-region-link')[0].click();\n" +
                "}");
        });
}

function clickYesCookie(actions, find) {
        actions.executeJS(function (window) {
            window.eval("if (document.getElementsByClassName('cookie-agree__button btn-green js-coockie-agree').length >0){\n" +
                "    document.getElementsByClassName('cookie-agree__button btn-green js-coockie-agree')[0].click();\n" +
                "}");
        });
}

function removeSeeCoutItemBlock(actions, find) {
    actions.executeJS(function (window) {
        window.eval("var s =  document.getElementsByClassName('ui-product-card-info__item ui-product-card-info__item--offset ui-product-card-info-additional').length; if (s>0){\n" +
            "for (var i = 0; i < s; i++) {document.getElementsByClassName('ui-product-card-info__item ui-product-card-info__item--offset ui-product-card-info-additional')[0].remove();}}");
    });
}

function removeDescriptionFooterBlock(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('category-description').length >0){document.getElementsByClassName('category-description')[0].remove();}");
    });
}

function clickLargeCard(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('sort-btn large-card-btn').length>0){document.getElementsByClassName('sort-btn large-card-btn')[0].click();}");
    });
}

function clickBasket(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('basket-link').length>0){document.getElementsByClassName('basket-link')[0].click();}");
    });
}

function clickDeliveryOption(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('lm icon-radio-unchecked').length>0){document.getElementsByClassName('lm icon-radio-unchecked')[0].click();}");
    });
}

function clickCheckout(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn btn-sm-full start-checkout-btn mobile-menu-button').length>0){document.getElementsByClassName('btn btn-sm-full start-checkout-btn mobile-menu-button')[0].click();}");
    });
}

function clickContinueWithoutRegistration(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn grey-button continue-without-regist auth-form-wrapper__new').length>0){document.getElementsByClassName('btn grey-button continue-without-regist auth-form-wrapper__new')[0].click();}");
    });
}

function clickBackToCart(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn grey-button back-to-basket').length>0){document.getElementsByClassName('btn grey-button back-to-basket')[0].click();}");
    });
}



function clickContinueCheckout(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn green-button delivery-submit delivery-option-next-btn next-btn').length>0){document.getElementsByClassName('btn green-button delivery-submit delivery-option-next-btn next-btn')[0].click();}");
    });
}

function clearCart(actions, find) {
    actions.executeJS(function (window) {window.eval("if(document.getElementsByClassName('red-link pull-right all-delete-button').length>0){document.getElementsByClassName('red-link pull-right all-delete-button')[0].click();}");});
    actions.wait(1000);
    actions.executeJS(function (window) {window.eval("if(document.getElementsByClassName('btn green-button confirm-button').length>0){document.getElementsByClassName('btn green-button confirm-button')[0].click();}");});
    actions.wait(1000);
}

function clickTakeFromShop(actions, find) {
    actions.executeJS(function (window) {window.eval("if(document.getElementsByClassName('delivery-name delivery-item__text delivery-item__text--to-desktop').length>0){\n" +
        "    document.getElementsByClassName('delivery-name delivery-item__text delivery-item__text--to-desktop')[0].click();\n" +
        "}else if (document.getElementsByClassName('delivery-name delivery-item__text delivery-item__text--to-mobile').length>0){\n" +
        "    document.getElementsByClassName('delivery-name delivery-item__text delivery-item__text--to-mobile')[0].click();\n" +
        "}");});
}

function clickFastView(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('green-middle-button-reg on-image-button').length>0){document.getElementsByClassName('green-middle-button-reg on-image-button')[0].click();}");
    });
    actions.wait(5000);
}

function clickShowAllCharacters(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn-link btn-limit-description').length>0){document.getElementsByClassName('btn-link btn-limit-description')[0].click();}");
    });
    actions.wait(2000);
}

function clickPickupFromShop(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('select2-selection__placeholder').length>0){document.getElementsByClassName('select2-selection__placeholder')[0].click();}");
    });
}

function clickFeedback(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('nav-item nav-link').length>0){document.getElementsByClassName('nav-item nav-link')[1].click();}");
    });
}

function clickSearchAnalog(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn grey-button bold-border-button pull-right find-analog-btn').length>0){document.getElementsByClassName('btn grey-button bold-border-button pull-right find-analog-btn')[0].click();}");
    });
}

function clickShowAdditItem(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn grey-button additional-button').length>0){document.getElementsByClassName('btn grey-button additional-button')[0].click();}");
    });
}

function clickPointMap(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('dot').length>0){document.getElementsByClassName('dot')[1].click();}");
    });
}

function clickClickCheckoutChangeRegion(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('change-link').length>0){document.getElementsByClassName('change-link')[0].click();}");
    });
}

function clickClickShopChangeRegion(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('region-block__region-name fancybox').length>0){document.getElementsByClassName('region-block__region-name fancybox')[0].click();}");
    });
}

function clickShowOtherService(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('fancybox').length>0){document.getElementsByClassName('fancybox')[4].click();}");
    });
}

function clickSearchChangeShop(actions, find) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('action-button change-favorite-shop fancybox').length>0){document.getElementsByClassName('action-button change-favorite-shop fancybox')[0].click();}");
    });
}

module.exports = {
    disableTopPanel: disableTopPanel,
    disableTopPanel2: disableTopPanel2,
    loginStaging: loginStaging,
    clickYesRegion: clickYesRegion,
    clickYesCookie: clickYesCookie,
    flag: flag,
    removeDescriptionFooterBlock: removeDescriptionFooterBlock,
    removeSeeCoutItemBlock: removeSeeCoutItemBlock,
    clickLargeCard: clickLargeCard,
    clickBasket: clickBasket,
    clickDeliveryOption: clickDeliveryOption,
    clickCheckout: clickCheckout,
    clickContinueWithoutRegistration: clickContinueWithoutRegistration,
    clickBackToCart: clickBackToCart,
    clearCart: clearCart,
    clickTakeFromShop: clickTakeFromShop,
    scrollDown: scrollDown,
    clickContinueCheckout: clickContinueCheckout,
    urlJson: urlJson,
    clickFastView: clickFastView,
    clickShowAllCharacters: clickShowAllCharacters,
    clickPickupFromShop: clickPickupFromShop,
    clickFeedback: clickFeedback,
    clickSearchAnalog: clickSearchAnalog,
    clickShowAdditItem: clickShowAdditItem,
    clickPointMap: clickPointMap,
    clickClickCheckoutChangeRegion: clickClickCheckoutChangeRegion,
    clickClickShopChangeRegion: clickClickShopChangeRegion,
    clickShowOtherService: clickShowOtherService,
    clickSearchChangeShop: clickSearchChangeShop
};


