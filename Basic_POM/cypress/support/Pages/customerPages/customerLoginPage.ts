



class CustomerLoginPage {


    dologin(userName:string):void{

        cy.get('#userSelect').select(userName)
        cy.contains('Login').click()
        cy.contains('Welcome '+userName).should('be.visible')

    }


}

export default new CustomerLoginPage();