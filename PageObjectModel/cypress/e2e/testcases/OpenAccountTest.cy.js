/// <references types= "cypress" />
import HomePageActions from "../../pageobjects/pageactions/HomePageActions.js";
import AddCustomerActions from "../../pageobjects/pageactions/AddCustomerActions.js";
import OpenAccountActions from "../../pageobjects/pageactions/OpenAccountActions.js";


describe('Open Account',()=>{

    beforeEach(()=>{
    HomePageActions.navigateToUrl()
    })

    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data;
        })
    })


it('Open Account', ()=>{

    HomePageActions.loginAsBankManager()
    AddCustomerActions.AddNewCustomer(data.firstName,data.lastName,data.postCode)
    // AddCustomerActions.validateAlert(data.alertMsg)
    OpenAccountActions.openaccount();
    OpenAccountActions.validateAlert("Account created successfully with account Number")

})

})