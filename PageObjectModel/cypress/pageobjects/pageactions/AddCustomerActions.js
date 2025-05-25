/// <references types= "cypress" />
import AddCustomerElements from "../../pageobjects/pageelements/AddCustomerElements.js";


class AddCustomerActions{

  AddNewCustomer(firstName,lastName,postCode){

    AddCustomerElements.addCustomerBtn().click()
    AddCustomerElements.firstNametxt().type(firstName)
    AddCustomerElements.lastNametxt().type(lastName)
    AddCustomerElements.postcodeNum().type(postCode)
    AddCustomerElements.addCbtn().click()

  }

  validateAlert(alerMsg){

    cy.on('window:alert', (alertText)=>{

        expect(alertText).contains(alertText)
    })
  }

}

export default new AddCustomerActions();