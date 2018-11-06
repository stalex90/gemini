var helper = require('../iesuite/helpme');

gemini.suite('main', (suite) => {
    suite.setUrl(helper.urlJson.main[process.env.LM_FLAG])
        .setCaptureElements('body')
        .ignoreElements('.owl-carousel.community-theme.owl-carousel--black.owl-loaded.owl-drag', {every: '.slider-item-img'},{every: 'img[data-alt*="midlle_small"]'},
            {every: 'img[data-alt*="middle_big"]'},'img[data-alt*="Выбирайте проще. 3D дом"]', 'img[data-alt*="Новинки месяца"]', {every: '.img-responsive.howto-picture'})
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
        })
        .capture('plain');
});

gemini.suite('mainHeader', (suite) => {
    suite.setUrl(helper.urlJson.main[process.env.LM_FLAG])
        .setCaptureElements('div[class*="header-inner"] > div.container')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.scrollDown(actions,find);
        })
        .capture('plain');
});