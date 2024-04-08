class MyInfoPage{

    elements = {

        // : () => cy.get(''),

        //Admin Name Change
        firstName : () => cy.get('input[name="firstName"]'),
        middleName : () => cy.get('input[name="middleName"]'),
        lastName : () => cy.get('input[name="lastName"]'),
        SaveName : () => cy.get('button[type="submit"]').eq(0),

    }

    //Change admin name to "Dont Change Please" 
    adminNameChange() {

        this.elements.firstName().clear();
        this.elements.middleName().clear();
        this.elements.lastName().clear();
        this.elements.firstName().type("Dont");
        this.elements.middleName().type("Change");
        this.elements.lastName().type("Please");
        this.elements.SaveName().click();

    }

}

module.exports = new MyInfoPage();
