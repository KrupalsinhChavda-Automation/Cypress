/// <references types= "cypress" />

const or = require('../../support/locators.json')

class HomePageElements{


   bankManagerLoginbtn(){

       return cy.get(or.homePage.bankManagerLoginbtn)
    }

    customerLoginbtn(){

       return cy.get(or.homePage.customerLoginbtn)
    }

}

export default new HomePageElements();