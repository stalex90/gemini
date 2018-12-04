function clearCart(actions) {
    actions.executeJS(function (window) {window.eval("if(document.getElementsByClassName('red-link pull-right all-delete-button').length>0){document.getElementsByClassName('red-link pull-right all-delete-button')[0].click();}");});
    actions.wait(1000);
    actions.executeJS(function (window) {window.eval("if(document.getElementsByClassName('btn green-button confirm-button').length>0){document.getElementsByClassName('btn green-button confirm-button')[0].click();}");});
    actions.wait(1000);
}

function clickBasket(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('basket-link').length>0){document.getElementsByClassName('basket-link')[0].click();}");
    });
    actions.wait(5000);
}

function clickSearchAnalog(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn grey-button bold-border-button pull-right find-analog-btn').length>0){document.getElementsByClassName('btn grey-button bold-border-button pull-right find-analog-btn')[0].click();}");
    });
    actions.wait(5000);
}

function clickShowAdditItem(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn grey-button additional-button').length>0){document.getElementsByClassName('btn grey-button additional-button')[0].click();}");
    });
    actions.wait(5000);
}


module.exports = {
    clearCart: clearCart,
    clickBasket: clickBasket,
    clickSearchAnalog: clickSearchAnalog,
    clickShowAdditItem: clickShowAdditItem

};


