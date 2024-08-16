REGRESSION TEST RESULTS ON HNG BOILERPLATE

[Result](screenshots\regression_test.js\Regression test on HNG Boilerplate -- Verify sign up with missing password (failed).png)


TEAM STARLIGHT BOILERPLATE REGRESSION TEST REPORTS
Testers: 
Edwin Gloria
Pauline Banye
Umeh Johnbosco

Environment
Operating System: macOS, Windows 10
Browser: Chrome (127.0.6533.99) & Brave (Version 1.67.134)

Test Links
Frontend: Live link
Design: Figma
Test Result: Result

Tools
Cypress
VS Code

Date: 13th August, 2024


👋 Introduction
The purpose of this report is to summarize the findings from the regression, functionality and UI tests conducted on the Boilerplate. The test aimed to verify that recent changes or updates did not negatively impact existing functionalities.

🕵🏻Scope
The scope of this test covers the key features outlined in the Product Requirements Document (PRD) for the boilerplate, including verifying user authentication, and product integration. The test also focused on core functionalities such as navigation, form submissions, and data validation.

📋 Methodology
A regression testing approach using Cypress was employed to verify that recent changes did not negatively impact existing functionality. The steps taken included the following:
Configuring Cypress and setting up the testing environment.
Developing and running automated test scripts to validate critical features and user flows.
Executing tests across various scenarios to ensure that new updates do not introduce any bugs.
Verifying assertions to confirm that the application behaves consistently with previous versions.
Analyzing results to identify and address any regressions or unexpected issues.



❌ Issues
The testing phase revealed several issues that impacted the user experience, some of which include:

Career Page: When users try to access the Career page, they encounter an error message: "Failed to fetch jobs," making it impossible to view job listings.
Newsletter Signup: Users face a "Network error" when trying to sign up for the newsletter, which could discourage them from staying updated.
Communication Issues: Sending a message to the team leads to an error: "fail to fetch." Additionally, the contact buttons and the link to the FAQ on the contact page don't work, making it difficult for users to get help or information.
Button Functionality: The "Join the Waitlist" button is not functional. 
Dashboard and Pages: The Dashboard shows only static data, and both the Customer and Product pages are completely blank, leaving users with no useful information or content. 
Product Page: The ability to view products is not available anymore. Even after  products are successfully added, they are not visible on the product page.
Search and Filter Functions: Both the search and filter buttons are unresponsive, preventing users from easily finding or refining their searches.
Usability: The app is user-friendly and easy to navigate across different pages. However, the inability to remove or edit product details is a significant limitation. 

📝 Conclusions
The testing process highlighted several critical issues that significantly impact the overall user experience of the Boilerplate. It is clear that while the recent updates may have introduced new features, they have also affected existing functionalities, such as the ability to view and edit products. Addressing these issues should be a priority to ensure a consistent and reliable user experience. 

Moving forward, it is essential to focus on resolving these critical problems, enhancing the usability of the app, and maintaining a rigorous testing process to prevent similar issues from arising in future updates. 










