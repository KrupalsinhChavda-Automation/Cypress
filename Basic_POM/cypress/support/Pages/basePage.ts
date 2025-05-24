

class BasePage{


    verifyElementTextFromPage(contain_text:string):void{

        cy.contains(contain_text).should('be.visible');
    }


}

export default new BasePage();