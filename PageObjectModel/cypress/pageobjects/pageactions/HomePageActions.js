/// <references types= "cypress" />
import HomePageElements from "../../pageobjects/pageelements/HomePageElements.js";


class HomePageActions{



    navigateToUrl(){

        cy.visit('/')
    }

    verifyTitle(){

        return cy.title()
    }

    loginAsCustomer(){

        HomePageElements.customerLoginbtn().click()
    }

    loginAsBankManager(){

        HomePageElements.bankManagerLoginbtn().click()
    }

}

export default new HomePageActions();