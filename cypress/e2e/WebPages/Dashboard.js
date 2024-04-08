class DashboardPage{

    elements = {

        // : () => cy.get(''),

        navigateToAdmin : () => cy.get('a[href="/web/index.php/admin/viewAdminModule"]'), //Admin Page
        navigateToMyInfo : () => cy.get('a[href="/web/index.php/pim/viewMyDetails"]'), //MyInfo Page

    }

    //navigate to url
    gotoMyInfo() {
        this.elements.navigateToMyInfo().click();
    }

    //navigate to url
    gotoAdmin() {
        this.elements.navigateToAdmin().click();
    }

}

module.exports = new DashboardPage();
