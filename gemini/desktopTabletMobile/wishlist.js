var helper = require('../helpers/helpme');
var shoplistPage = require('../helpers/shoplistPage');


gemini.suite('wishlist', (suite) => {
    suite.setUrl(helper.urlJson.wishlist[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain');
});

gemini.suite('wishlistFull', (suite) => {
    suite.setUrl("catalogue/suhie-smesi-dlya-pola/")
        .setCaptureElements('body')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            shoplistPage.clickAddShopList(actions);
            shoplistPage.clickCloseShopList(actions);
            shoplistPage.clickShopList(actions);
            helper.disableTestPanel(actions);
        })
        .capture('plain')
});

gemini.suite('wishlistHeader', (suite) => {
    suite.setUrl(helper.urlJson.wishlist[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});

gemini.suite('wishlistCookie', (suite) => {
    suite.setUrl(helper.urlJson.wishlist[process.env.LM_FLAG])
        .setCaptureElements('.cookie-notification-modal')
        .before(function(actions, find) {
            helper.loginStaging(actions);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});