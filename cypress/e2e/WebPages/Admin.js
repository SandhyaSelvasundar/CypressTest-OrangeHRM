class AdminPage{

    elements = {

        // : () => cy.get(''),

        //To Create User
        addUser : () => cy.get('.bi-plus'),
        addLabel : () => cy.get('.orangehrm-main-title'),
        UserRoleDropdown : () => cy.get('.oxd-select-text--after').eq(0),
        UserRoleSelect : () => cy.get('.oxd-select-dropdown'),
        EmployeeNameFind : () => cy.get('input[placeholder="Type for hints..."]'),
        EmployeeNameSelect : () => cy.get('.oxd-autocomplete-dropdown'),
        StatusDropdown : () => cy.get('.oxd-select-text--after').eq(1),
        StatusSelect : () => cy.get('.oxd-select-dropdown'),
        Username : () => cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(4) > div > div:nth-child(2) > input'),
        Password : () => cy.xpath('//*[@type="password"]').eq(0),
        ConfirmPassword : () => cy.xpath('//*[@type="password"]').eq(1),
        SaveAdd : () => cy.get('button[type="submit"]'),
        CancelAdd : () => cy.get('.oxd-button--ghost'),

        //To Retrieve User
        //SearchClose : () => cy.get('.--toggle > button > i'),
        SearchUsername : () => cy.get('.oxd-input').eq(1),
        SearchUserRole : () => cy.get('.oxd-select-text-input').eq(0),
        SearchEmployeeName : () => cy.get('input[placeholder="Type for hints..."]'),
        SearchStatus : () => cy.get('.oxd-select-text-input').eq(1),
        SearchButton : () => cy.get('button[type="submit"]'),
        ResetButton : () => cy.get('.oxd-button--ghost'),

        //To Update User
        EditSearchedUser : () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[6]/div/button[2]'),
        EditUserRole : () => cy.get('.oxd-select-text-input').eq(0),
        EditEmployeeName : () => cy.get('input[placeholder="Type for hints..."]'),
        EditStatusDropdown : () => cy.get('.oxd-select-text-input').eq(1),
        EditStatusSelect : () => cy.get('.oxd-select-dropdown'),
        EditUsername : () => cy.get('.oxd-input').eq(1),
        ChangePassword : () => cy.get('.oxd-checkbox-input-icon'),
        SaveEdit : () => cy.get('button[type="submit"]'),
        CancelEdit : () => cy.get('.oxd-button--ghost'),

        //To Delete User
        DeleteIcon : () => cy.get('.bi-trash'),
        DeleteConfirmation : () => cy.get('.oxd-button--label-danger'),
        DeleteResult : () => cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/span'),

    }

    //Create User
    createUser() {

        //goto add user page
        this.elements.addUser().click( {force : true} );
        this.elements.addLabel().should('have.text', 'Add User'); // check navigated to add user page

        //Adding user with valid inputs and saving
        this.elements.UserRoleDropdown().click();
        this.elements.UserRoleSelect().contains('Admin').click();
        //Ensure Employee full name in myinfo page is "Dont Change Please"
        this.elements.EmployeeNameFind().type('Dont');
        this.elements.EmployeeNameSelect().contains('Dont Change Please').click();
        this.elements.StatusDropdown().click();
        this.elements.StatusSelect().contains('Enabled').click();
        this.elements.Username().type('Personality Test');
        this.elements.Password().type('Personality#1');
        this.elements.ConfirmPassword().type('Personality#1');
        this.elements.SaveAdd().click();
        this.elements.CancelAdd().should('be.enabled');

    }

    retrieveUser() {

        //this.elements.SearchOpen().should('be.enabled');
        this.elements.SearchUsername().type('Personality Test');
        this.elements.SearchButton().click();
        this.elements.ResetButton().should('be.enabled');

    }

    updateUser() {

        this.elements.EditSearchedUser().click();
        //cy.wait(3000);
        this.elements.EditStatusDropdown().click();
        this.elements.EditStatusSelect().contains('Disabled').click();
        this.elements.EditUsername().clear().type('Personality Tester');
        this.elements.ChangePassword().click();
        this.elements.ChangePassword().click();
        //this.elements.ChangePassword().should('be.enabled');
        this.elements.CancelEdit().should('be.enabled');
        this.elements.SaveEdit().click();

    }

    deleteUser() {

        this.elements.SearchUsername().type('Personality Tester');
        this.elements.SearchButton().click();
        this.elements.DeleteIcon().click();
        this.elements.DeleteConfirmation().click();
        //Check User Deleted Successfully 
        this.elements.SearchUsername().type('Personality Tester');
        this.elements.SearchButton().click();
        this.elements.DeleteResult().should('be.visible');

    }

}

module.exports = new AdminPage();
