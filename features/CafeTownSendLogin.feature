@RegTest
Feature: Login into Cafe TownSend

  Scenario Outline: Login into Cafe TownSend using the credentials in the table
    Given I navigate to the Cafe TownSend website
    When I Enter the Username as <UserName>
      And I Enter the Password as <Password>
      And I Click on the Login Button
    Then I Login Successfully
    Examples:
      | UserName | Password |
      | Luke | Skywalker |

  Scenario Outline: Fail to Login into Cafe Townsend with invalid credentials
    Given I navigate to the Cafe TownSend website
    When I Enter the Username as <UserName>
      And I Enter the Password as <Password>
      And I Click on the Login Button
    Then I fail to Login Successfully
    Examples:
    | UserName | Password |
    | Santosh | Skywalker |