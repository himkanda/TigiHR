class SignUpPage {
    enterURL() {
        cy.visit("https://magento.softwaretestingboard.com/");
    }
    clickSignUpLink() {
        cy.get("header ul.header.links").contains("a", "Create an Account").click();
        return this;
    }
    fillSignUpForm(firstName, lastName, email, password) {

        cy.get("#firstname").clear().type(firstName);
        cy.get("#lastname").clear().type(lastName);
        cy.get("#email_address").clear().type(email);
        cy.get("#password").clear().type(password);
        cy.get('#password-confirmation').clear().type(password);
        return this;
    }
    clickSignUpButton() {
        cy.get("button[title='Create an Account']").click();
        return this;
    }
    verifySignUpSuccessful() {
        cy.contains("Thank you for registering with Main Website Store.").should(
            "be.visible"
        );
        cy.url().should(
            "eq",
            "https://magento.softwaretestingboard.com/customer/account/"
        );
        cy.title().should("eq", "My Account");
        cy.get("[data-ui-id='page-title-wrapper']").should(
            "have.text",
            "My Account"
        );
        return;
    }
    verifyUserLoggedIn() {
        cy.get("header ul.header.links").contains('Welcome, ').should('be.visible')
        return;
    }
    clickLogoutLink() {
        cy.get("header [data-toggle='dropdown']").click();
        cy.contains("Sign Out").click();
        return;
    }
    verifyUserLoggedOut() {
        cy.url().should(
            "eq",
            "https://magento.softwaretestingboard.com/customer/account/logoutSuccess/"
        );
    }
}
const signup = new SignUpPage();
export default signup;