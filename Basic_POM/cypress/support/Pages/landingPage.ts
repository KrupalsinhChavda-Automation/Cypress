import basePage from "./basePage";


class LandingPage {

    invokeURL():void{

        cy.visit("/");
    }

    verifyPageTitle():void{

        cy.contains('Way2Automation Banking App').should('be.visible')
    }

    loginBankManager():void{

        cy.contains('Bank Manager Login').click();
    }

    loginCustomer():void{

        cy.contains('Customer Login').click();
    }
}

export default new LandingPage();