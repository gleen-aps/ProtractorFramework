describe('Calculator test', () => {

    it('add', () => {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('2');
        element(by.model('second')).sendKeys('3');

        element(by.id('gobutton')).click();

        element(by.cssContainingText('.ng-binding', '5'));

        browser.sleep(3000);

    });

});