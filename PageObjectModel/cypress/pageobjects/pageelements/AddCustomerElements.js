/// <references types= "cypress" />

const or = require('../../support/locators.json')

class AddCustomerElements{

    addCustomerBtn(){
        return cy.get(or.addCutomerPage.addCustomerbtn)
    }

    firstNametxt(){
        return cy.get(or.addCutomerPage.firstNametxt)
    }

    lastNametxt(){
        return cy.get(or.addCutomerPage.lastNametxt)
    }

    postcodeNum(){
        return cy.get(or.addCutomerPage.postCodenum)
    }

    addCbtn(){
        return cy.get(or.addCutomerPage.addCbtn)
    }

}

export default new AddCustomerElements();