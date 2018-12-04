function makeCompare(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('plp-button custom-checkbox-label').length>0){document.getElementsByClassName('plp-button custom-checkbox-label')[0].click(); document.getElementsByClassName('plp-button custom-checkbox-label')[1].click();}");
    });
    actions.wait(2000);
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('compare-panel-item__text').length>0){document.getElementsByClassName('compare-panel-item__text')[0].click();}");
    });
    actions.wait(10000);
}

function clickDifferentCompare(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('comparison-button comparison-button-not-equal white-button-reg').length>0){document.getElementsByClassName('comparison-button comparison-button-not-equal white-button-reg')[0].click();}");
    });
    actions.wait(2000);
}

module.exports = {
    makeCompare: makeCompare,
    clickDifferentCompare: clickDifferentCompare
};


