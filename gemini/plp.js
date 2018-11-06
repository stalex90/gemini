var helper = require('../iesuite/helpme');

if (helper.flag == 0){
    var url = "https://kostroma.leroymerlin.ru/catalogue/shtukaturki/";
}else {
    var url = "http://drulmttaema01.int.adeo.com:4522/content/elbrus/kostroma/ru/catalogue/shtukaturki.html";}

gemini.suite('plp', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(5000);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
            helper.removeDescriptionFooterBlock(actions, find);
            helper.removeSeeCoutItemBlock(actions, find);
        })
        .capture('plain');
});

gemini.suite('plpHeader', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
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