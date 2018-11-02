/**
 * flag = 0 - берется url прода, flag != 0 - берется тестовый url
 */
var flag = process.env.LM_FLAG;

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
    clickContinueWithoutRegistration: clickContinueWithoutRegistration
};

