var helper = require('./helpme');

if (helper.flag == 0){
    var url = "https://kostroma.leroymerlin.ru/";
}else {
    var url = "http://drulmttaema01.int.adeo.com:4522/content/elbrus/kostroma/ru.html?wcmmode=disabled";}

    gemini.suite('main', (suite) => {
    suite.setUrl(url)
        .setCaptureElements('body')
        .ignoreElements('.owl-carousel.community-theme.owl-carousel--black.owl-loaded.owl-drag', {every: '.slider-item-img'},{every: 'img[data-alt*="midlle_small"]'},
            {every: 'img[data-alt*="middle_big"]'},'img[data-alt*="Выбирайте проще. 3D дом"]', 'img[data-alt*="Новинки месяца"]', {every: '.img-responsive.howto-picture'})
        .before(function(actions, find){
            this.button = find('body');
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