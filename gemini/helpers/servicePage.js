function clickShowOtherService(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('fancybox').length>0){document.getElementsByClassName('fancybox')[4].click();}");
    });
    actions.wait(5000);
}

module.exports = {
    clickShowOtherService: clickShowOtherService
};


