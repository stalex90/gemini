var helper = require('./helpme');

if (helper.flag == 0){
    var url = "https://kostroma.leroymerlin.ru/catalogue/stroymaterialy/";
}else {
    var url = "http://drulmttaema01.int.adeo.com:4522/content/elbrus/kostroma/ru/catalogue/stroymaterialy.html";
}
gemini.suite('catalogue', (suite) => {
    suite.setUrl(url)
        .setCaptureElements('body')
        .ignoreElements({every: '.picture'})
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