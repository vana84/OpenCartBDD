import { defineSupportCode } from 'cucumber';
import loginPage from '../pageobjects/loginPage';

defineSupportCode(function({ Given, When, Then }) {

    Given(/^I am on the OpenCart page$/, function() {
        loginPage.open();
      expect(browser.getTitle()).to.contain('OpenCart - Open Source Shopping Cart Solution');
    })

    When(/^Login using invalid values of "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2){
    loginPage.login(arg1,arg2);
    })

    Then(/^Verify Error message$/, function(){
        loginPage.validateErrMsg();
    })

});