


class CustomerHomePage{


    verifyCurrencyType(currencyType:string):void{

        cy.xpath('//strong[@class="ng-binding"  and text()="' + currencyType +'"]').should('be.visible')

    }



    depositeAmount(amount:string){

        cy.xpath('//button[@ng-class="btnClass2"]').click()
        cy.xpath('//input[@ng-model="amount"]').type(amount)
        cy.xpath('//button[@type="submit"]').click()
        cy.contains('Deposit Successful').should('be.visible')
        cy.
    }
}

export  default new CustomerHomePage();