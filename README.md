# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed. Github action gives us the convinience to trigger specific event automatically. Whenever code is pushed, tests will be automatically executed.

2) Would you use an end to end test to check if a function is returning the correct output?

No.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No. Because this feature will be interacted with other features on application level, but unit test cannot do that for us. It there is a problem, we cannot promise that the problem is because of "message" feature.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes. Because "max message length" feature exists individually, even all other features change, this feature will not be affected as long as the rule does not change (80 as limit).

