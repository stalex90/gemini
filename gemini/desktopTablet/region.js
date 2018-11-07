var helper = require('../../iesuite/helpme');

gemini.suite('adviceRegion', (suite) => {
    suite.setUrl(helper.urlJson.advice[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('basketRegion', (suite) => {
    suite.setUrl(helper.urlJson.basket[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('brandRegion', (suite) => {
    suite.setUrl(helper.urlJson.brand[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('brandsRegion', (suite) => {
    suite.setUrl(helper.urlJson.brands[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('catalogueRegion', (suite) => {
    suite.setUrl(helper.urlJson.catalogue[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('compareRegion', (suite) => {
    suite.setUrl(helper.urlJson.compare[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('faqRegion', (suite) => {
    suite.setUrl(helper.urlJson.faq[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('mainRegion', (suite) => {
    suite.setUrl(helper.urlJson.main[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('obratnaya-svyazRegion', (suite) => {
    suite.setUrl(helper.urlJson.obratnayaSvyaz[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('pdpRegion', (suite) => {
    suite.setUrl(helper.urlJson.pdp[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('plpRegion', (suite) => {
    suite.setUrl(helper.urlJson.plp[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('proektyRegion', (suite) => {
    suite.setUrl(helper.urlJson.proekty[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('registerRegion', (suite) => {
    suite.setUrl(helper.urlJson.register[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('serviceRegion', (suite) => {
    suite.setUrl(helper.urlJson.service[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('shopRegion', (suite) => {
    suite.setUrl(helper.urlJson.shop[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('shopsRegion', (suite) => {
    suite.setUrl(helper.urlJson.shops[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('srpRegion', (suite) => {
    suite.setUrl(helper.urlJson.srp[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});

gemini.suite('wishlistRegion', (suite) => {
    suite.setUrl(helper.urlJson.wishlist[process.env.LM_FLAG])
        .setCaptureElements('.popover.bottom.popover-location.confirm-region')
        .before(function(actions, find) {
            if (helper.flag != 0) {
                helper.loginStaging(actions, find);
            }
            actions.wait(3000);
        })
        .capture('plain');
});



