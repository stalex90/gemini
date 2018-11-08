var helper = require('../../iesuite/helpme');

gemini.suite('registerFields', (suite) => {
    suite.setUrl(helper.urlJson.register[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.sendKeys(find('input[id="mail"]'),'!');
            actions.sendKeys(find('input[id="name"]'),'!');
            actions.sendKeys(find('input[id="second-name"]'),'!');
            actions.sendKeys(find('input[id="pass"]'),'!');
            actions.sendKeys(find('input[id="passRepeat"]'),'1');
            actions.click(find('.custom-checkbox-wrapper > label[for="cbNews"]'));
        });
});








