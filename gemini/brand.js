var helper = require('./helpme');

if (helper.flag == 0){
    var url = "https://kostroma.leroymerlin.ru/brands/axton/";
}else {
    var url = "http://drulmttaema01.int.adeo.com:4522/content/elbrus/kostroma/ru/brands/axton.html";
}


gemini.suite('brand', (suite) => {
    suite.setUrl(url)
        .setCaptureElements('body')
        .ignoreElements({every: '.editorial-image'}, {every: '.banner-image'})
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