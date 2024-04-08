class LoginPage{

    elements = {
        username : () => cy.get('input[name="username"]'),
        password : () => cy.get('input[name="password"]'),
        loginButton : () => cy.get('button[type="submit"]'),
        invalid : () => cy.get('.oxd-alert--error'),
        valid : () => cy.get('.oxd-userdropdown'),
    }

    //Visit Login Page
    visit() {
        cy.visit('/')
    }

    //Verify Login elements are working
    workingLogIn() {
        this.elements.username().should('be.enabled');
        this.elements.password().should('be.enabled');
        this.elements.loginButton().should('be.enabled');
    }

    //Login with invalid credentials
    invalidLogIn() {
        this.elements.username().type('admin');
        this.elements.password().type('Admin123');
        this.elements.loginButton().click();
        this.elements.invalid().should('be.visible');
    }

    //Login with valid credentials
    validLogIn() {
        this.elements.username().type('Admin');
        this.elements.password().type('admin123');
        this.elements.loginButton().click();
        this.elements.valid().should('be.visible');
    }

}

module.exports = new LoginPage();