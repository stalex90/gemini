var helper = require('./helpme');

if (helper.flag == 0){
    var url = "https://kostroma.leroymerlin.ru/company/obratnaya-svyaz/";
}else {
    var url = "http://drulmttaema01.int.adeo.com:4522/content/elbrus/kostroma/ru/company/obratnaya-svyaz.html";
}

gemini.suite('obratnaya-svyaz', (suite) => {
    suite.setUrl(url)
        .setCaptureElements('body')
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