

import LandingPage from '../support/Pages/landingPage'
import BasePage from '../support/Pages/basePage';


describe('landig page test case', ()=>{


    beforeEach('Invoke Application', ()=>{
        LandingPage.invokeURL();
    })

    it('Verify landing page title',()=>{

    LandingPage.verifyPageTitle();
    })

    it('Verify Customer login button on Landing Page', ()=> {

        BasePage.verifyElementTextFromPage('Home');

    })
    
})