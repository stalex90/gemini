function clickDeliveryOption(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('lm icon-radio-unchecked').length>0){document.getElementsByClassName('lm icon-radio-unchecked')[0].click();}");
    });
    actions.wait(5000);
}

function clickCheckout(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn btn-sm-full start-checkout-btn mobile-menu-button').length>0){document.getElementsByClassName('btn btn-sm-full start-checkout-btn mobile-menu-button')[0].click();}");
    });
    actions.wait(5000);
}

function clickContinueWithoutRegistration(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn grey-button continue-without-regist auth-form-wrapper__new').length>0){document.getElementsByClassName('btn grey-button continue-without-regist auth-form-wrapper__new')[0].click();}");
    });
    actions.wait(5000);
}

function clickBackToCart(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn grey-button back-to-basket').length>0){document.getElementsByClassName('btn grey-button back-to-basket')[0].click();}");
    });
    actions.wait(5000);
}

function clickTakeFromShop(actions) {
    actions.executeJS(function (window) {window.eval("if(document.getElementsByClassName('delivery-name delivery-item__text delivery-item__text--to-desktop').length>0){\n" +
        "    document.getElementsByClassName('delivery-name delivery-item__text delivery-item__text--to-desktop')[0].click();\n" +
        "}else if (document.getElementsByClassName('delivery-name delivery-item__text delivery-item__text--to-mobile').length>0){\n" +
        "    document.getElementsByClassName('delivery-name delivery-item__text delivery-item__text--to-mobile')[0].click();\n" +
        "}");});
    actions.wait(5000);
}

function clickContinueCheckout(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn green-button delivery-submit delivery-option-next-btn next-btn').length>0){document.getElementsByClassName('btn green-button delivery-submit delivery-option-next-btn next-btn')[0].click();}");
    });
    actions.wait(5000);
}

function clickPointMap(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('dot').length>0){document.getElementsByClassName('dot')[1].click();}");
    });
    actions.wait(2000);
}

function clickCheckoutChangeRegion(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('change-link').length>0){document.getElementsByClassName('change-link')[0].click();}");
    });
    actions.wait(5000);
}


module.exports = {
    clickDeliveryOption: clickDeliveryOption,
    clickCheckout: clickCheckout,
    clickContinueWithoutRegistration: clickContinueWithoutRegistration,
    clickBackToCart: clickBackToCart,
    clickTakeFromShop: clickTakeFromShop,
    clickContinueCheckout: clickContinueCheckout,
    clickPointMap: clickPointMap,
    clickCheckoutChangeRegion: clickCheckoutChangeRegion
};


