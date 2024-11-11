Feature: Sign Up to website and Sign In afterwards
  Background: Navigate to the website
      Given User navigates to the website
  Scenario: Sign Up with valid user details
      When User clicks on sign up link
      And User enters valid details
      And User clicks on sign up button
      Then Validate user is signed up
      Then Validate the user is logged in successfully
      When User clicks on sign out link
      Then Validate user is logged out
  Scenario: Sign In with valid credentials
      Given User navigates to the website
      When User clicks on sign in link
      And User enters valid login credentials
      And User clicks on login button
      Then Validate the user is logged in successfully