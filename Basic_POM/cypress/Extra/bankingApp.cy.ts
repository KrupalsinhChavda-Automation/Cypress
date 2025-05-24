
import {faker} from '@faker-js/faker'
describe('Test Banking app for Automation',() =>{

it('TestCase01 - Add', ()=>{


    // "Delete User"
    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
    cy.contains('Way2Automation Banking App').should('be.visible')
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(5) > button').click();
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.center > button:nth-child(3)').click()
    cy.wait(2000)
    
    cy.xpath('//button[.="Delete"]').each(($ele)=>{

        $ele.click()

    })

    // "Add Customer"
    cy.xpath('//button[@ng-click="addCust()"]').click()

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const postCode = faker.address.zipCode();

    cy.xpath('//input[@placeholder="First Name"]').type(firstName);
    cy.xpath('//input[@placeholder="Last Name"]').type(lastName);
    cy.xpath('//input[@placeholder="Post Code"]').type(postCode);

    cy.xpath('//button[.="Add Customer"]').click()

cy.get('body > div.ng-scope > div > div.ng-scope > div > div.center > button:nth-child(3)').click()
    
cy.contains(firstName).should('be.visible')
cy.contains(lastName).should('be.visible')
cy.contains(postCode).should('be.visible')

cy.xpath('//button[@ng-click="openAccount()"]').click()

// "Open Account"
const customerName = firstName + " " + lastName
cy.get('#userSelect').select(customerName)
cy.get('#currency').select('Rupee')
cy.xpath('//button[.="Process"]').click()

})


})