function clickShopChangeRegion(actions) {
    actions.executeJS(function (window) {
        window.eval("if(document.getElementsByClassName('region-block__region-name fancybox').length>0){document.getElementsByClassName('region-block__region-name fancybox')[0].click();}");
    });
    actions.wait(5000);
}

module.exports = {
    clickShopChangeRegion: clickShopChangeRegion
};


