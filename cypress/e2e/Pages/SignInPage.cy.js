class SignInPage {
    clickSignInLink() {
        cy.get("header ul.header.links").contains("a", "Sign In").click();
        return this;
    }
    fillSignInForm(email, password) {
        cy.get("#email").clear().type(email);
        cy.get("#pass").clear().type(password);
        return this;
    }
    clickLoginButton() {
        cy.get("#login-form [name='send']").first().click()
        return this;
    }
}

const signin = new SignInPage();
export default signin;