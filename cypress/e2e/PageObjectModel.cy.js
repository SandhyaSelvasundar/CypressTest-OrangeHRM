import LoginPage from './WebPages/LoginPage'
import Dashboard from './WebPages/Dashboard';
import Admin from './WebPages/Admin';
import MyInfo from './WebPages/MyInfo';

describe ('End to End Test Suite', ()=>{

  //YouTube POM

  beforeEach('Visit before all tests', () => {
    
    //Visit Login Page
    LoginPage.visit();

  })

  it.skip('should validate login credentials', ()=>{

    //Verify login functionality works
    LoginPage.workingLogIn();

    //Invalid LogIn
    LoginPage.invalidLogIn();

    //Valid LogIn
    LoginPage.validLogIn();

  })

  it('should validate CRUD Operation in Admin', ()=>{

    //Valid LogIn
    cy.Login('Admin', 'admin123');

    //Pre-requisite - Changing admin name 
    //Navigate from Dashboard to MyInfo
    Dashboard.gotoMyInfo();

    MyInfo.adminNameChange();

    //Navigate from Dashboard to Admin
    Dashboard.gotoAdmin();

    //Create User
    Admin.createUser();

    cy.wait(7000);

    Admin.retrieveUser();

    Admin.updateUser();

    cy.wait(7000);

    Admin.deleteUser();

})

})