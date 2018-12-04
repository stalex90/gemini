function clickLargeCard(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('sort-btn large-card-btn').length>0){document.getElementsByClassName('sort-btn large-card-btn')[0].click();}");
    });
}

function clickFastView(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('green-middle-button-reg on-image-button').length>0){document.getElementsByClassName('green-middle-button-reg on-image-button')[0].click();}");
    });
    actions.wait(5000);
}

function clickSearchChangeShop(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('action-button change-favorite-shop fancybox').length>0){document.getElementsByClassName('action-button change-favorite-shop fancybox')[0].click();}");
    });
    actions.wait(5000);
}

module.exports = {
    clickLargeCard: clickLargeCard,
    clickFastView: clickFastView,
    clickSearchChangeShop: clickSearchChangeShop

};


