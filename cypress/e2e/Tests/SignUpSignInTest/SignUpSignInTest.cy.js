import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import signup from "../../Pages/SignUpPage.cy";
import signin from "../../Pages/SignInPage.cy";
import faker from "faker";

let password = "Hello@12321";
let email = faker.internet.email();
Given("User navigates to the website", () => {
    signup.enterURL();
});
When("User clicks on sign up link", () => {
    signup.clickSignUpLink();
});
When("User enters valid details", () => {
    signup.fillSignUpForm(
        faker.name.firstName(),
        faker.name.lastName(),
        email,
        password
    );
});
When("User clicks on sign up button", () => {
    signup.clickSignUpButton();
});
Then("Validate user is signed up", () => {
    signup.verifySignUpSuccessful();
});
Then("Validate the user is logged in successfully", () => {
    signup.verifyUserLoggedIn();
});
When("User clicks on sign out link", () => {
    signup.clickLogoutLink();
});
Then("Validate user is logged out", () => {
    signup.verifyUserLoggedOut();
});
When("User clicks on sign in link", () => {
    signin.clickSignInLink();
});
When("User enters valid login credentials", () => {
    signin.fillSignInForm(email, password);
});
When("User clicks on login button", () => {
    signin.clickLoginButton();
});
