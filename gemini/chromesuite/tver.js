function disableTopPanel(actions, find) {
    actions.click(find('.green-button.confirm-region-link'));
    actions.click(find('.cookie-agree__button.btn-green'));
    actions.executeJS(function(window) {window.scroll(0,200);});
    actions.wait(1000);
    actions.executeJS(function(window) {window.eval("document.getElementsByClassName('header-inner is-sticky')[0].style.position = 'static';");});
}

module.exports = {
    disableTopPanel: disableTopPanel
};