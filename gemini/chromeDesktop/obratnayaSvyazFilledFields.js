var helper = require('../helpers/helpme');

gemini.suite('obratnaya-svyazFields', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements('body')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.sendKeys(find('input[name="fstName"]'),'!');
            actions.sendKeys(find('input[name="lastName"]'),'!');
            actions.sendKeys(find('input[name="phone"]'),'1');
            actions.sendKeys(find('input[name="email"]'),'!');
            actions.sendKeys(find('input[name="theme"]'),'Тема');
            actions.sendKeys(find('textarea[name="text"]'),'Сообщение');
        });
});




gemini.suite('obratnaya-svyazFieldsCity', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements('.select2-container.select2-container--default.select2-container--open > span[class*="select2-dropdown"]')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.click(find('.select2-selection__arrow'));

        });
});



gemini.suite('obratnaya-svyazFieldsShop', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements('.select2-container.select2-container--default.select2-container--open > span[class*="select2-dropdown"]')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.click(find('.feedback-choice-store > span:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(2)'));

        });
});

gemini.suite('obratnaya-svyazFieldsCategory', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements('.select2-container.select2-container--default.select2-container--open > span[class*="select2-dropdown"]')
        .before(function(actions, find){
            helper.loginStaging(actions);
            helper.clickYesRegion(actions, find);
            helper.clickYesCookie(actions, find);
            helper.disableTopPanel(actions, find);
        })
        .capture('popupHover', function(actions, find) {
            actions.click(find('div.form-group:nth-child(4) > div:nth-child(2) > span:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(2)'));

        });
});
