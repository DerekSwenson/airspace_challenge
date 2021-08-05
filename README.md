# airspace_challenge
Code challenge for Airspace

The purpose of this test file is to test the login page of "https://the-internet.herokuapp.com".
Please use Cypress (Cypress.io) to run this file and examine its functionallity. 

This file includes 11 test cases. 
  Nine of these test cases test different scenerios for the login functionality, and are described below:
    - A successful login, and successful logout
    - A unsuccessful login, with an incorrect username and incorrect password
    - A unsuccessful login, with an incorrect username and a correct password
    - A unsuccessful login, with a correct username and an incorrect password
    - A unsuccessful login, with a correct username with no password
    - A unsuccessful login, with an incorrect username with no passowrd 
    - A unsuccessful login, with no username and an incorrect password
    - A unsuccessful login, with no username and a correct password
    - A unsuccessful login, with no username and no password
  The two remaining tests test the functionality of the two existing links on the page:
    - Test the functionality of the Elemental Selenium link by making an assertion that the link will open in a new tab
    - Test the functionality of the GitHub link hidden behind the image in the top right corner by first verifying that the correct href exists,
      then testing the contents of the url by drilling into response body of an assertion, and verifying that there is at least some valid content.
