Feature: Performing a login in Opencart

Scenario Outline: Performing login with passing test data as data table
Given I am on the OpenCart page
When Login using invalid values of <email> <password> into the text box
Then Verify Error message

Examples:
|email| |password|
|"vana@gmail.com"| |"stone01"|