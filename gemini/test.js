gemini.suite('leroymerlin-banner', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('.banner','.popover-content')
        .before(function(actions, find){
            this.button = find('.banner');
        })
        .capture('banner-plain')
        .capture('banner-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('banner-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-location', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('.popover-content')
        .before(function(actions, find){
            this.button = find('.popover-content');
        })
        .capture('location-plain');
});

gemini.suite('leroymerlin-locationOk', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('.green-button.confirm-region-link')
        .before(function(actions, find){
            this.button = find('.green-button.confirm-region-link');
        })
        .capture('locationOk-plain')
        .capture('locationOk-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('locationOk-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-locationChange', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('.fancybox.green-button')
        .before(function(actions, find){
            this.button = find('.fancybox.green-button');
        })
        .capture('locationChange-plain')
        .capture('locationChange-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('locationChange-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});


gemini.suite('leroymerlin-city', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('.city-link')
        .before(function(actions, find){
            this.button = find('.city-link');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('city-plain')
        .capture('city-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('city-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-preferShop', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('.fav-store-link')
        .before(function(actions, find){
            this.button = find('.fav-store-link');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('preferShop-plain')
        .capture('preferShop-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('preferShop-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-advice', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('a[href*="advice"]')
        .before(function(actions, find){
            this.button = find('a[href*="advice"]');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('advice-plain')
        .capture('advice-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('advice-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-service', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('a[href$="/shop/tver/service/')
        .before(function(actions, find){
            this.button = find('a[href$="/shop/tver/service/"]');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('service-plain')
        .capture('service-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('service-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-shop', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('a[href$="/shop/')
        .before(function(actions, find){
            this.button = find('a[href$="/shop/"]');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('shop-plain')
        .capture('shop-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('shop-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-postavka', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('a[href$="/postavshchikam/"]')
        .before(function(actions, find){
            this.button = find('a[href$="/postavshchikam/"]');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('postavka-plain')
        .capture('postavka-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('postavka-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-faq', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('a[href$="/faq/"]')
        .before(function(actions, find){
            this.button = find('a[href$="/faq/"]');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('faq-plain')
        .capture('faq-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('faq-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-signin', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('.login-button.btn')
        .before(function(actions, find){
            this.button = find('.login-button.btn');
            this.regButton = find('');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('signin-plain')
        .capture('signin-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('signin-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-register', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('.register-button.btn')
        .before(function(actions, find){
            this.button = find('.register-button.btn');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('register-plain')
        .capture('register-hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('register-pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-logo', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('.logo-block')
        .before(function(actions, find){
            this.button = find('.logo-block');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-catalog', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('.catalog-menu')
        .before(function(actions, find){
            this.button = find('.catalog-menu');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

gemini.suite('leroymerlin-searchInput', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements('input[class="search-input"]')
        .before(function(actions, find){
            this.button = find('input[class="search-input"]');
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        })
        .capture('with-text', function(actions, find){
            actions.sendKeys(this.button, 'тест текст');
        });
});

var searchIcon = '.lm.search-button';
gemini.suite('leroymerlin-searchIcon', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(searchIcon)
        .before(function(actions, find){
            this.button = find(searchIcon);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var shopList = '.shop-list-link';
gemini.suite('leroymerlin-shopList', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(shopList)
        .before(function(actions, find){
            this.button = find(shopList);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var basketLink = '.basket-link';
gemini.suite('leroymerlin-basket', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(basketLink)
        .before(function(actions, find){
            this.button = find(basketLink);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var breadcrumb = '.breadcrumbs';
gemini.suite('leroymerlin-breadcrumbs', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(breadcrumb)
        .before(function(actions, find){
            this.button = find(breadcrumb);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain');
});

var breadcrumb1 = 'a[data-division="Главная"]';
gemini.suite('leroymerlin-breadcrumbs1', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(breadcrumb1)
        .before(function(actions, find){
            this.button = find(breadcrumb1);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var breadcrumb2 = 'a[data-division="Каталог"]';
gemini.suite('leroymerlin-breadcrumb2', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(breadcrumb2)
        .before(function(actions, find){
            this.button = find(breadcrumb2);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var breadcrumb3 = 'a[data-division="Стройматериалы"]';
gemini.suite('leroymerlin-breadcrumb3', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(breadcrumb3)
        .before(function(actions, find){
            this.button = find(breadcrumb3);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var breadcrumb4 = 'a[data-division="Сухие смеси и грунтовки"]';
gemini.suite('leroymerlin-breadcrumb4', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(breadcrumb4)
        .before(function(actions, find){
            this.button = find(breadcrumb4);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var breadcrumb5 = 'a[data-division="Штукатурки"]';
gemini.suite('leroymerlin-breadcrumb5', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(breadcrumb5)
        .before(function(actions, find){
            this.button = find(breadcrumb5);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var titel = '.page-title__plp';
gemini.suite('leroymerlin-titel', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(titel)
        .before(function(actions, find){
            this.button = find(titel);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain');
});


var youChoise = 'div[data-element-id="current-filters"]';
var ignoreChoise = 'div[class="search-results"] > span';
gemini.suite('leroymerlin-youChoise', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(youChoise)
        .ignoreElements(ignoreChoise)
        .before(function(actions, find){
            this.button = find(youChoise);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain');
});


var sort = 'div[parameter-name="sortby"]  > .dropdown-container';
gemini.suite('leroymerlin-sort', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(sort)
        .before(function(actions, find){
            this.button = find(sort);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var available = 'div[parameter-name="sortby"]  > .dropdown-container';
gemini.suite('leroymerlin-available', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(available)
        .before(function(actions, find){
            this.button = find(available);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var display = 'div[parameter-name="display"]  > .dropdown-container';
gemini.suite('leroymerlin-display', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(display)
        .before(function(actions, find){
            this.button = find(display);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});


var priceTitel = '.facets-container > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)';
gemini.suite('leroymerlin-priceTitel', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(priceTitel)
        .before(function(actions, find){
            this.button = find(priceTitel);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain');
});

var priceSlider = '.custom-slider';
gemini.suite('leroymerlin-priceSlider', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(priceSlider)
        .before(function(actions, find){
            this.button = find(priceSlider);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain');
});

var priceSliderArrow = '.ui-slider-handle';
gemini.suite('leroymerlin-priceSliderArrow', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(priceSliderArrow)
        .before(function(actions, find){
            this.button = find(priceSliderArrow);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var priceValues = '.slider-values-wrapper';
gemini.suite('leroymerlin-priceValues', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(priceValues)
        .before(function(actions, find){
            this.button = find(priceValues);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain');
});

var priceApply = '.apply';
gemini.suite('leroymerlin-priceApply', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(priceApply)
        .before(function(actions, find){
            this.button = find(priceApply);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var priceReset = '.reset';
gemini.suite('leroymerlin-priceReset', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(priceReset)
        .before(function(actions, find){
            this.button = find(priceReset);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var brandTitel = 'div.facet-element-wrapper:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)';
gemini.suite('leroymerlin-brandTitel', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(brandTitel)
        .before(function(actions, find){
            this.button = find(brandTitel);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var checkbox = '.custom-checkbox-inner > label';
gemini.suite('leroymerlin-checkbox', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(checkbox)
        .before(function(actions, find){
            this.button = find(checkbox);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        })
        .capture('clicked', function(actions, find){
            actions.mouseUp(this.button);
        });
});

var showMoreBrans = '.facet-show-other-inner';
gemini.suite('leroymerlin-showMoreBrans', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(showMoreBrans)
        .before(function(actions, find){
            this.button = find(showMoreBrans);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain');
});

var placeUse = 'div.facet-element-wrapper:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)';
gemini.suite('leroymerlin-placeUse', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(placeUse)
        .before(function(actions, find){
            this.button = find(placeUse);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain');
});

var surface = 'div.facet-element-wrapper:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)';
gemini.suite('leroymerlin-surface', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(surface)
        .before(function(actions, find){
            this.button = find(surface);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain');
});

var placeUseInternal = 'label[for*="Внутренний"]';
var placeUseInternalIgnore = 'label[for*="Внутренний"] > span > span';
gemini.suite('leroymerlin-placeUseInternal', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(placeUseInternal)
        .ignoreElements(placeUseInternalIgnore)
        .before(function(actions, find){
            this.button = find(placeUseInternal);
            actions.click(find('.green-button.confirm-region-link'));
            actions.executeJS(function(window) {
                window.scrollTo(0, 200);
            })
    })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var placeUseInternalExternal = 'label[for*="Внутренний / наружный"]';
var placeUseInternalExternalIgnore = 'label[for*="Внутренний / наружный"] > span > span';
gemini.suite('leroymerlin-placeUseInternalExternal', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(placeUseInternalExternal)
        .ignoreElements(placeUseInternalExternalIgnore)
        .before(function(actions, find){
            this.button = find(placeUseInternalExternal);
            actions.click(find('.green-button.confirm-region-link'));
            actions.executeJS(function(window) {
                window.scrollTo(0, 200);
            })
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var placeUseWet = 'label[for*="влажных"]';
var placeUseWetIgnore = 'label[for*="влажных"] > span > span';
gemini.suite('leroymerlin-placeUseWet', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(placeUseWet)
        .ignoreElements(placeUseWetIgnore)
        .before(function(actions, find){
            this.button = find(placeUseWet);
            actions.click(find('.green-button.confirm-region-link'));
            actions.executeJS(function(window) {
                window.scrollTo(0, 200);
            })
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var placeUseExternal = 'label[for*="Наружный"]';
var placeUseExternalIgnore = 'label[for*="Наружный"] > span > span';
gemini.suite('leroymerlin-placeUseExternal', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(placeUseExternal)
        .ignoreElements(placeUseExternalIgnore)
        .before(function(actions, find){
            this.button = find(placeUseExternal);
            actions.click(find('.green-button.confirm-region-link'));
            actions.executeJS(function(window) {
                window.scrollTo(0, 200);
            })
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var surfaceGasConcrete = 'label[for*="Газобетон"]';
var surfaceGasConcreteIgnore = 'label[for*="Газобетон"] > span > span';
gemini.suite('leroymerlin-surfaceGasConcrete', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(surfaceGasConcrete)
        .ignoreElements(surfaceGasConcreteIgnore)
        .before(function(actions, find){
            this.button = find(surfaceGasConcrete);
            actions.click(find('.green-button.confirm-region-link'));
            actions.click(find('.cookie-agree__button.btn-green'));
            actions.executeJS(function(window) {
                window.scrollTo(0, 300);
            })
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var surfaceConcrete = 'label[for*="Бетон"]';
var surfaceConcreteIgnore = 'label[for*="Бетон"] > span > span';
gemini.suite('leroymerlin-surfaceConcrete', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(surfaceConcrete)
        .ignoreElements(surfaceConcreteIgnore)
        .before(function(actions, find){
            this.button = find(surfaceConcrete);
            actions.click(find('.green-button.confirm-region-link'));
            actions.click(find('.cookie-agree__button.btn-green'));
            actions.executeJS(function(window) {
                window.scrollTo(0, 300);
            })
        })
        .capture('plain', function(actions){})
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var compare = '.plp-button.custom-checkbox-label';
gemini.suite('leroymerlin-compare', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(compare)
        .before(function(actions, find){
            this.button = find(compare);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var addToCart = '.plp-button.plp-button--card';
gemini.suite('leroymerlin-addToCart', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(addToCart)
        .before(function(actions, find){
            this.button = find(addToCart);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var addToList = '.collect-item.add-to-shoping-list-wrapper';
gemini.suite('leroymerlin-addToList', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(addToList)
        .before(function(actions, find){
            this.button = find(addToList);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});

var showAvailable = '.localization-product-stores';
gemini.suite('leroymerlin-showAvailable', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(showAvailable)
        .before(function(actions, find){
            this.button = find(showAvailable);
            actions.click(find('.green-button.confirm-region-link'));
        })
        .capture('plain')
        .capture('hover', function(actions, find) {
            actions.mouseMove(this.button);
        })
        .capture('pressed', function(actions, find){
            actions.mouseDown(this.button);
        });
});


var showAsList = 'button[title="Список"]';
var showAsBigCart = 'button[title="Большие карточки"]';
gemini.suite('leroymerlin-showAsList', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(showAsList)
        .before(function(actions, find){
            this.button = find(showAsList);
            this.button2 = find(showAsBigCart);
            actions.click(find('a.confirm-region-link:nth-child(2)'));
        })
        .capture('selected')
        .capture('unselected', function(actions, find) {
            actions.click(this.button2);
        });
});

gemini.suite('leroymerlin-showAsBigCart', (suite) => {
    suite.setUrl('/catalogue/shtukaturki/')
        .setCaptureElements(showAsBigCart)
        .before(function(actions, find){
            this.button = find(showAsBigCart);
            this.button2 = find(showAsList);
                actions.click(find('a.confirm-region-link:nth-child(2)'));

        })
        .capture('selected')
        .capture('unselected', function(actions, find) {
            actions.click(this.button2);
        });
});








