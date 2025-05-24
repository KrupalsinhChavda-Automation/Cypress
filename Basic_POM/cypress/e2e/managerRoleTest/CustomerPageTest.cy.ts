import landingPage from "../../support/Pages/landingPage"
import customersPage from "../../support/Pages/managerPages/customersPage";
import managerHomePage from "../../support/Pages/managerPages/managerHomePage";


describe('Customers Page test cases', ()=>{


    beforeEach('Invoke application and navigate to cutomers page', ()=>{

        landingPage.invokeURL();
        landingPage.loginBankManager();
        
    })

    it('Delete all existing customers', ()=>{
        managerHomePage.goToCustomers();
        customersPage.deleteAllCustomers();
    })

    it('Search a customer and delete it', ()=>{
        managerHomePage.goToCustomers();
        customersPage.searchCustomerAndDeleteIt("Hermoine");
    })


})