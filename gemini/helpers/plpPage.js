function removeSeeCoutItemBlock(actions) {
    /*actions.executeJS(function (window) {
        window.eval("var s =  document.getElementsByClassName('ui-product-card-info__item ui-product-card-info__item--offset ui-product-card-info-additional').length; if (s>0){\n" +
            "for (var i = 0; i < s; i++) {document.getElementsByClassName('ui-product-card-info__item ui-product-card-info__item--offset ui-product-card-info-additional')[0].remove();}}");
    });*/
}

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


module.exports = {
    removeSeeCoutItemBlock: removeSeeCoutItemBlock,
    clickLargeCard: clickLargeCard,
    clickFastView: clickFastView

};


