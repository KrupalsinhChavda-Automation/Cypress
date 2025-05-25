/// <references types= "cypress" />

const or = require('../../support/locators.json')

class OpenAccountElements{

    openAccountbtn(){

       return cy.get(or.openAccount.openAccBtn)
    }

     selectCustomer(){

        return cy.get(or.openAccount.drp_Customer)
    }

     selectCurrency(){

       return cy.get(or.openAccount.drp_Currency)
    }

     processBtn(){

       return cy.get(or.openAccount.btn_Process)
    }

}

export default new OpenAccountElements();