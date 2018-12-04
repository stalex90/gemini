function clickShowAllCharacters(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('btn-link btn-limit-description').length>0){document.getElementsByClassName('btn-link btn-limit-description')[0].click();}");
    });
    actions.wait(2000);
}

function clickFeedback(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('nav-item nav-link').length>0){document.getElementsByClassName('nav-item nav-link')[1].click();}");
    });
    actions.wait(2000);

}

module.exports = {
    clickShowAllCharacters: clickShowAllCharacters,
    clickFeedback: clickFeedback
};


