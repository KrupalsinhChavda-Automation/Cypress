import customerLoginPage from "../../support/Pages/customerPages/customerLoginPage";
import customerHomePage from "../../support/Pages/customerPages/customerHomePage";
import landingPage from "../../support/Pages/landingPage";


describe('test related to trancasctions', ()=>{

    beforeEach('Invoke the application and navigate to customer login', ()=>{

        
                landingPage.invokeURL();
                landingPage.loginCustomer();
    })


    it.skip('test customer login', ()=>{

        customerLoginPage.dologin('Hermoine Granger')
       customerHomePage.verifyCurrencyType('Dollar')
    })

    it.skip('test deposit Amount', ()=>{

        customerLoginPage.dologin('Hermoine Granger')
        customerHomePage.depositeAmount('40')
    })

    
    it('test deposit Amount using fixtures', ()=>{

       
        cy.fixture('deposit').then(jsonData=>{

            customerLoginPage.dologin(jsonData.userName);
            customerHomePage.depositeAmount(jsonData.depositAmount);
        })
    })



})