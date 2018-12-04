/**
 * flag = 0 - берется url прода, flag != 0 - берется тестовый url
 */
var flag = process.env.LM_FLAG;

var urlJson = JSON.parse("{\n" +
    "  \"main\": [\n" +
    "    \"/\",\n" +
    "    \"/\"\n" +
    "  ],\n" +
    "  \"catalogue\": [\n" +
    "    \"catalogue/stroymaterialy/\",\n" +
    "    \"catalogue/stroymaterialy/\"\n" +
    "  ],\n" +
    "  \"plp\": [\n" +
    "    \"catalogue/shtukaturki/\",\n" +
    "    \"catalogue/shtukaturki/\"\n" +
    "  ],\n" +
    "  \"pdp\": [\n" +
    "    \"product/shtukaturka-cementnaya-axton-5-kg-81946334/\",\n" +
    "    \"product/shtukaturka-cementnaya-axton-5-kg-81946334/\"\n" +
    "  ],\n" +
    "  \"basket\": [\n" +
    "    \"basket/\",\n" +
    "    \"basket/\"\n" +
    "  ],\n" +
    "  \"wishlist\": [\n" +
    "    \"shopping-list/\",\n" +
    "    \"shopping-list/\"\n" +
    "  ],\n" +
    "  \"checkout\": [\n" +
    "    \"checkout/delivery-option/\",\n" +
    "    \"checkout/delivery-option/\"\n" +
    "  ],\n" +
    "  \"faq\": [\n" +
    "    \"faq/\",\n" +
    "    \"faq/\"\n" +
    "  ],\n" +
    "  \"advice\": [\n" +
    "    \"advice/\",\n" +
    "    \"advice/\"\n" +
    "  ],\n" +
    "  \"service\": [\n" +
    "    \"shop/kostroma/service/\",\n" +
    "    \"shop/kostroma/service/\"\n" +
    "  ],\n" +
    "  \"shops\": [\n" +
    "    \"shop/\",\n" +
    "    \"shop/\"\n" +
    "  ],\n" +
    "  \"shop\": [\n" +
    "    \"shop/kostroma/\",\n" +
    "    \"shop/kostroma/\"\n" +
    "  ],\n" +
    "  \"proekty\": [\n" +
    "    \"proekty/\",\n" +
    "    \"proekty/\"\n" +
    "  ],\n" +
    "  \"compare\": [\n" +
    "    \"catalogue/compare/\",\n" +
    "    \"catalogue/compare/\"\n" +
    "  ],\n" +
    "  \"register\": [\n" +
    "    \"lk/register/\",\n" +
    "    \"lk/register/\"\n" +
    "  ],\n" +
    "  \"obratnayaSvyaz\": [\n" +
    "    \"company/obratnaya-svyaz/\",\n" +
    "    \"company/obratnaya-svyaz/\"\n" +
    "  ],\n" +
    "  \"brands\": [\n" +
    "    \"brands/\",\n" +
    "    \"brands/\"\n" +
    "  ],\n" +
    "  \"brand\": [\n" +
    "    \"brands/axton/\",\n" +
    "    \"brands/axton/\"\n" +
    "  ],\n" +
    "  \"srp\": [\n" +
    "    \"search/?q=дверь\",\n" +
    "    \"search/?q=дверь\"\n" +
    "  ]\n" +
    "}");

function disableTopPanel(actions, find) {
    actions.executeJS(function(window) {window.scroll(0,500);});
    actions.wait(1000);
    actions.executeJS(function(window) {window.eval("if (document.getElementsByClassName('header-inner is-sticky').length >0){\n" +
        "    document.getElementsByClassName('header-inner is-sticky')[0].style.position = 'static';\n" +
        "}");});
}

function scrollDown(actions, find) {
    actions.executeJS(function(window) {window.scroll(0,500);});
    actions.wait(1000);
}


function loginStaging(actions) {
    if (process.env.LM_FLAG != 0) {
        actions.executeJS(function (window) {
            window.eval("if (document.getElementsByClassName('coral-Form-field coral3-Textfield').length >0){document.getElementsByClassName('coral-Form-field coral3-Textfield')[0].setAttribute('value','admin');}");
        });
        actions.executeJS(function (window) {
            window.eval("if (document.getElementsByClassName('coral-Form-field coral3-Textfield').length >0){document.getElementsByClassName('coral-Form-field coral3-Textfield')[1].setAttribute('value','admin');}");
        });
        actions.wait(1000);
        actions.executeJS(function (window) {
            window.eval("if (document.getElementsByClassName('coral3-Button coral3-Button--primary').length >0){document.getElementsByClassName('coral3-Button coral3-Button--primary')[0].click();}");
        });
        actions.wait(5000);
    }
    actions.wait(5000);
}

function clickYesRegion(actions, find) {
        actions.executeJS(function (window) {
            window.eval("if (document.getElementsByClassName('green-button confirm-region-link').length >0){\n" +
                "    document.getElementsByClassName('green-button confirm-region-link')[0].click();\n" +
                "}");
        });

    //удаляю тестовую панель сверху
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('test-mode-message-banner').length>0){document.getElementsByClassName('test-mode-message-banner')[0].remove();}");
    });
}

function clickYesCookie(actions, find) {
        actions.executeJS(function (window) {
            window.eval("if (document.getElementsByClassName('cookie-agree__button btn-green js-coockie-agree').length >0){\n" +
                "    document.getElementsByClassName('cookie-agree__button btn-green js-coockie-agree')[0].click();\n" +
                "}");
        });

    //удаляю тестовую панель сверху
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('test-mode-message-banner').length>0){document.getElementsByClassName('test-mode-message-banner')[0].remove();}");
    });
}

function disableTestPanel(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('test-mode-message-banner').length>0){document.getElementsByClassName('test-mode-message-banner')[0].remove();}");
    });
}

function removeSeeCoutItemBlock(actions, find) {
    /*actions.executeJS(function (window) {
        window.eval("var s =  document.getElementsByClassName('ui-product-card-info__item ui-product-card-info__item--offset ui-product-card-info-additional').length; if (s>0){\n" +
            "for (var i = 0; i < s; i++) {document.getElementsByClassName('ui-product-card-info__item ui-product-card-info__item--offset ui-product-card-info-additional')[0].remove();}}");
    });*/
}

function removeDescriptionFooterBlock(actions, find) {
   /* actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('category-description').length >0){document.getElementsByClassName('category-description')[0].remove();}");
    });*/
}


module.exports = {
    disableTopPanel: disableTopPanel,
    loginStaging: loginStaging,
    clickYesRegion: clickYesRegion,
    clickYesCookie: clickYesCookie,
    flag: flag,
    removeDescriptionFooterBlock: removeDescriptionFooterBlock,
    removeSeeCoutItemBlock: removeSeeCoutItemBlock,
    scrollDown: scrollDown,
    urlJson: urlJson,
    disableTestPanel: disableTestPanel
};


