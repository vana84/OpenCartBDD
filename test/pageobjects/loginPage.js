import Page from './page'

class LoginPage extends Page {

    /**
    * define elements
    */

   get loginLink()   { return $("//a[contains(@class,'btn') and text()='Login']");}
   get emailTxtBox() {return $("//label[text()='Email']/following-sibling::input");}
   get pwdTxtBox() {return $("//label[text()='Password']/following-sibling::input");}
   get submitBtn() {return $("//button[text()='Login']");}
   get errHeader() {return $("//div[contains(@class,'alert')]");}

/**
     * define or overwrite page methods
     */
    open() {
        super.open('https://www.opencart.com')       
        browser.pause(1000);
    }

    waitForloginPageToLoad () {
        if(!this.loginLink.isVisible()){
          this.loginLink.waitForVisible(5000);
        }
      }

    login (email, password) {
        console.log("login method");
        this.waitForloginPageToLoad();
        this.loginLink.click();
        this.emailTxtBox.setValue(email);
        console.log("Entered email");
        this.pwdTxtBox.click();
        this.pwdTxtBox.setValue(password);
        this.submitBtn.click();
          }

          validateErrMsg(){
              var op = this.errHeader.getText();
              if(op == "No match for E-Mail and/or Password.\nx"||
              "Your account has exceeded allowed number of login attempts. Please try again in 1 hour.\n×")
                var flag =true;
                assert.equal(flag,true,op);
          }

}
export default new LoginPage()