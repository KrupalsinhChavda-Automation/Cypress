

describe('Login test suite', ()=>{

it('TestCase02 - Login', ()=>{

  cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
    cy.contains('Way2Automation Banking App').should('be.visible')
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(5) > button').click();
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.center > button:nth-child(3)').click()
    cy.wait(2000)

"Do Login"

let FullName:string = ''
cy.xpath('//table/tbody/tr[1]/td[1]').invoke('text').then((fname: string) => {
  cy.xpath('//table/tbody/tr[1]/td[2]').invoke('text').then((lname: string) => {
        cy.log(fname);
        cy.log(lname);
        FullName = fname + " " + lname;
        cy.log(FullName);
        cy.wrap(FullName).as('fullName'); // Set FullName as an alias
    });
 });

    cy.xpath('//button[.="Home"]').click()
    cy.xpath('//button[.="Customer Login"]').click() 

cy.get('@fullName').then((FFullName: any) => {
    cy.log(FFullName);
    cy.get('#userSelect').select(FFullName);
});
});
});



/*
    cy.get('#userSelect').should('have.value', FullName)
    cy.get('#userSelect').select(FullName).should('have.value', FullName)
    cy.get('#userSelect').select(FullName).should('have.value', FullName)*/






