

class CustomerPage{

    deleteAllCustomers():void{

        cy.xpath('//button[@ng-click="deleteCust(cust)"]').each(($ele)=>{

            $ele.click();
        })
    }

     searchCustomerAndDeleteIt(customer_Name:string):void{

        cy.xpath('//input[@ng-model="searchCustomer"]').type(customer_Name)
        cy.xpath('//button[@ng-click="deleteCust(cust)"]').click()

    }
}

export default new CustomerPage();