@RegTest
Feature: Creating and Editing Employee

  Scenario Outline: Create a new Employee
    Given I navigate to the Cafe TownSend website
    When I Enter the Username as <UserName>
    And I Enter the Password as <Password>
    And I Click on the Login Button
    And I Login Successfully
    And I Click on Create Button
    And I Enter the FirstName as <FirstName>
    And I Enter the LastName as <LastName>
    And I Enter the StartDate as <StartDate>
    And I Enter the EmailId as <EmailId>
    And I Click on Add Button
    Then I find the Employee Added
    Examples:
      | UserName | Password | FirstName | LastName | StartDate | EmailId |
      | Luke | Skywalker | Larry | Diamond | 2020-03-03 | ldiamond@zip.com |

  Scenario Outline: Edit an existing Employee
    Given I navigate to the Cafe TownSend website
    When I Enter the Username as <UserName>
    And I Enter the Password as <Password>
    And I Click on the Login Button
    And I Login Successfully
    And I Select the User to Edit as <UName>
    And I Click on Edit Button
    And I Enter the FirstName to Update as <FirstName>
    And I Enter the LastName to Update as <LastName>
    And I Enter the StartDate to Update as <StartDate>
    And I Enter the EmailId to Update as <EmailId>
    And I Click on Update Button
    Then I find the Employee Edited
    Examples:
      | UserName | Password  | FirstName | LastName | StartDate  | EmailId                | UName        |
      | Luke     | Skywalker | Larry   | Diamond    | 2020-04-04 | SeverusSnape@yahoo.com | Harry Potter |

  Scenario Outline: Delete an Existing Employee
    Given I navigate to the Cafe TownSend website
    When I Enter the Username as <UserName>
    And I Enter the Password as <Password>
    And I Click on the Login Button
    And I Login Successfully
    And I Select the User to Delete
    And I Click on Delete Button
    Examples:
      | UserName | Password  |
      | Luke     | Skywalker |