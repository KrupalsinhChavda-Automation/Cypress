/// <references types= "cypress" />
import OpenAccountElements from "../pageelements/OpenAccountElements.js";


class OpenAccountActions{

  openaccount(){

    OpenAccountElements.openAccountbtn().click();
    OpenAccountElements.selectCustomer().select('Krupal Last')
    OpenAccountElements.selectCurrency().select('Rupee')
    OpenAccountElements.processBtn().click()

  }  

  validateAlert(alerMsg){

    cy.on('window:alert', (alertText)=>{

        expect(alertText).contains(alertText)
    })
  }


}

export default new OpenAccountActions();