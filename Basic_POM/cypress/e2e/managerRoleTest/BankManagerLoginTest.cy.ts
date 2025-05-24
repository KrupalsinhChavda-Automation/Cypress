import basePage from "../../support/Pages/basePage";
import landingPage from "../../support/Pages/landingPage"


describe('Bank Manager Home Page test', ()=>{


    beforeEach('Invoke Application and login as BankManager',()=>{

        landingPage.invokeURL();
        landingPage.loginBankManager();
    })

    it('verify Add cutomer button', ()=>{

        basePage.verifyElementTextFromPage('Add Customer');

    })

    it('verify Open Account button', ()=>{

        basePage.verifyElementTextFromPage('Open Account');

    })

    it('verify Customers button', ()=>{

        basePage.verifyElementTextFromPage('Customers');

    })


})