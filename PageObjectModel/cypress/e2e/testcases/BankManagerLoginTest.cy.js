/// <references types= "cypress" />
import HomePageActions from "../../pageobjects/pageactions/HomePageActions.js";



describe('Login as Bank Manager and verify it',()=>{

    beforeEach(()=>{
    HomePageActions.navigateToUrl()
    })

  it('Verify Title', ()=>{
 
    HomePageActions.verifyTitle().should('eq','Protractor practice website - Banking App')
})  

it('Test Login as Bank Manager', ()=>{

    HomePageActions.loginAsBankManager()

})

})