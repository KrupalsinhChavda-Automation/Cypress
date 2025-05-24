


describe('read and wright files', ()=>{


    it('Wright user details',()=>{

        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/manager/list')
        cy.xpath('//table//tbody//td[1]').each(row=>{

            cy.writeFile('cypress/fixtures/user.txt',row.text())
        })


    })

    it('read from txt',()=>{

        cy.fixture('user.txt').then(username=>{

            cy.log('Username:'+ username)
        })
    })

})