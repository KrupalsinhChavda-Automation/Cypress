/// <references types= "cypress" />
import HomePageActions from "../../pageobjects/pageactions/HomePageActions.js";
import AddCustomerActions from "../../pageobjects/pageactions/AddCustomerActions.js";



describe('Login as Bank Manager and verify it',()=>{

    beforeEach(()=>{
    HomePageActions.navigateToUrl()
    })

    before(()=>{

        cy.fixture('testdata').then((data)=>{

            globalThis.data = data;
        })
    })


it('Add new customer as Bank Manager', ()=>{

    HomePageActions.loginAsBankManager()
    AddCustomerActions.AddNewCustomer(data.firstName,data.lastName,data.postCode)
    AddCustomerActions.validateAlert(data.alertMsg)
})

})