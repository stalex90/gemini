/**
 * flag = 0 - берется url прода, flag != 0 - берется тестовый url
 */

function login(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('login-button btn btn-success').length >0){\n" +
            "    document.getElementsByClassName('login-button btn btn-success')[0].click();\n" +
            "}");
    });
    actions.wait(5000);
    actions.executeJS(function(window) {window.eval("if (document.getElementsByTagName('iframe')[3].contentDocument.getElementsByName('j_username').length > 0) {document.getElementsByTagName('iframe')[3].contentDocument.getElementsByName('j_username')[0].setAttribute('value','a-kadymov@yandex.ru');} else {document.getElementsByTagName('iframe')[4].contentDocument.getElementsByName('j_username')[0].setAttribute('value','a-kadymov@yandex.ru');}");});
    actions.wait(1000);
    actions.executeJS(function(window) {window.eval("if (document.getElementsByTagName('iframe')[3].contentDocument.getElementsByName('j_password').length > 0) {document.getElementsByTagName('iframe')[3].contentDocument.getElementsByName('j_password')[0].setAttribute('value','ler123LM');} else {document.getElementsByTagName('iframe')[4].contentDocument.getElementsByName('j_password')[0].setAttribute('value','ler123LM');}");});
    actions.wait(1000);
    actions.executeJS(function(window) {window.eval("if (document.getElementsByTagName('iframe')[3].contentDocument.getElementsByName('login').length > 0) {document.getElementsByTagName('iframe')[3].contentDocument.getElementsByName('login')[0].click();} else {document.getElementsByTagName('iframe')[4].contentDocument.getElementsByName('login')[0].click();}");});
    actions.wait(20000);
}

function openLK(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('user-account-button btn btn-success hidden-xs hidden-sm').length>0){document.getElementsByClassName('user-account-button btn btn-success hidden-xs hidden-sm')[0].click();}");
    });
    actions.wait(10000);
}

function lkMain(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('lk-menu__text-item').length >0){\n" +
            "    document.getElementsByClassName('lk-menu__text-item')[0].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkShopList(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('lk-menu__text-item').length >0){\n" +
            "    document.getElementsByClassName('lk-menu__text-item')[1].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkHistory(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('lk-menu__text-item').length >0){\n" +
            "    document.getElementsByClassName('lk-menu__text-item')[2].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkAnalysis(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('lk-menu__text-item').length >0){\n" +
            "    document.getElementsByClassName('lk-menu__text-item')[3].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkPersonalInfo(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('lk-menu__text-item').length >0){\n" +
            "    document.getElementsByClassName('lk-menu__text-item')[4].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkAddresses(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('lk-menu__text-item').length >0){\n" +
            "    document.getElementsByClassName('lk-menu__text-item')[5].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkChangePass(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('lk-menu__text-item').length >0){\n" +
            "    document.getElementsByClassName('lk-menu__text-item')[6].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkChangeEmail(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('lk-menu__text-item').length >0){\n" +
            "    document.getElementsByClassName('lk-menu__text-item')[7].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkViewed(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('lk-menu__text-item').length >0){\n" +
            "    document.getElementsByClassName('lk-menu__text-item')[8].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkNalog(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('lk-menu__text-item').length >0){\n" +
            "    document.getElementsByClassName('lk-menu__text-item')[9].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkEditPersonalInfo(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('btn white-button-reg personal-info__menu-text').length >0){\n" +
            "    document.getElementsByClassName('btn white-button-reg personal-info__menu-text')[0].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkEditAddresses(actions) {
    actions.executeJS(function (window) {
        window.eval("if (document.getElementsByClassName('add-new-button').length >0){\n" +
            "    document.getElementsByClassName('add-new-button')[0].click();\n" +
            "}");
    });
    actions.wait(3000);
}

function lkEditAddressesPointMap(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('dot').length>0){document.getElementsByClassName('dot')[1].click();}");
    });
    actions.wait(3000);
}

function clickHistoryAllItem(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('tab all-order').length>0){document.getElementsByClassName('tab all-order')[0].click();}");
    });
    actions.wait(3000);
}

function clickDeleteAddress(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('addresses__bottom-link delete').length>0){document.getElementsByClassName('addresses__bottom-link delete')[0].click();}");
    });
    actions.wait(3000);
}

function clickCancelDeleteAddress(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('cancel btn white-button').length>0){document.getElementsByClassName('cancel btn white-button')[0].click();}");
    });
    actions.wait(3000);
}

function clickGetNalog(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('lk-nalog__tax-deduction-button btn green-button').length>0){document.getElementsByClassName('lk-nalog__tax-deduction-button btn green-button')[0].click();}");
    });
    actions.wait(3000);
}


module.exports = {
    login: login,
    openLK: openLK,
    lkMain: lkMain,
    lkShopList: lkShopList,
    lkPersonalInfo: lkPersonalInfo,
    lkAddresses: lkAddresses,
    lkChangePass: lkChangePass,
    lkChangeEmail: lkChangeEmail,
    lkViewed: lkViewed,
    lkEditPersonalInfo:lkEditPersonalInfo,
    lkEditAddresses: lkEditAddresses,
    lkHistory: lkHistory,
    lkEditAddressesPointMap:lkEditAddressesPointMap,
    lkNalog: lkNalog,
    lkAnalysis: lkAnalysis,
    clickHistoryAllItem: clickHistoryAllItem,
    clickDeleteAddress: clickDeleteAddress,
    clickCancelDeleteAddress: clickCancelDeleteAddress,
    clickGetNalog: clickGetNalog
};


