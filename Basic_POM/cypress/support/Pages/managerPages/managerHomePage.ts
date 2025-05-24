


class ManagerPageTest{


    goToCustomers():void{

        cy.xpath('//button[@ng-click="showCust()"]').click();
    }



}

export default new ManagerPageTest();