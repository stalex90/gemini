function clickAddShopList(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('collect-item add-to-shoping-list-wrapper').length>0){document.getElementsByClassName('collect-item add-to-shoping-list-wrapper')[0].click();}");
    });
    actions.wait(5000);
}

function clickCloseShopList(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('fancybox-close-small').length>0){document.getElementsByClassName('fancybox-close-small')[0].click();}\n");
    });
    actions.wait(5000);
}

function clickShopList(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('shop-list-header').length>0){document.getElementsByClassName('shop-list-header')[0].click();}");
    });
    actions.wait(5000);
}

module.exports = {
    clickAddShopList: clickAddShopList,
    clickCloseShopList: clickCloseShopList,
    clickShopList: clickShopList
};


