function disableTopPanel(actions, find) {
    actions.executeJS(function(window) {window.scroll(0,500);});
    actions.wait(1000);
    actions.executeJS(function(window) {window.eval("document.getElementsByClassName('header-inner is-sticky')[0].style.position = 'static';");});
}

function disableTopPanel2(actions, find) {
    actions.executeJS(function(window) {window.scroll(0,500);});
    actions.wait(1000);
    actions.executeJS(function(window) {window.eval("document.getElementsByClassName('headerMain-inner is-sticky')[0].style.position = 'static';");});
}

function loginStaging(actions, find) {
    actions.executeJS(function(window) {window.eval("document.getElementsByClassName('coral-Form-field coral3-Textfield')[0].setAttribute('value','admin');");});
    actions.executeJS(function(window) {window.eval("document.getElementsByClassName('coral-Form-field coral3-Textfield')[1].setAttribute('value','admin');");});
    actions.executeJS(function(window) {window.eval("document.getElementsByClassName('coral3-Button coral3-Button--primary')[0].click();");});
    actions.wait(5000);
}

function clickYesRegion(actions, find) {
/*        actions.executeJS(function (window) {
            window.eval("document.getElementsByClassName('green-button confirm-region-link')[0].click();");
        });*/

}

function clickYesCookie(actions, find) {
        actions.executeJS(function (window) {
            window.eval("document.getElementsByClassName('cookie-agree__button btn-green js-coockie-agree')[0].click();");
        });

}

/**
 * flag = 0 - берется url прода, flag != 0 - берется тестовый url
 */
var flag = 1;

module.exports = {
    disableTopPanel: disableTopPanel,
    disableTopPanel2: disableTopPanel2,
    loginStaging: loginStaging,
    clickYesRegion: clickYesRegion,
    clickYesCookie: clickYesCookie,
    flag: flag
};