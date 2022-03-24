# hacking-detection-simulator
A system to detect the websites hacked according to certain rules.

Scenario:
-Imagine there is a hacker. He got a person's identity.
-Now, this person is a CASE.
-He visits a random website. The hacker makes the website vulnerable through that person. So, the website here is also a CASE.
-Now, assume, after 50 mins, there is also another user visiting the same domain (which is already made vulnerable through the person above). This hacker has the ability to steal his identity too.
**-Note: The hacker can steal the other persons identity, only if the other user enters the vulnerable domain which made through a CASE within 1 hour range.**
-Now the other user state becomes a CLOSE.

Parameters:
1-User:
  - must have a name, phone, country.
  - must have a track to record his visit to domains.
  - must have a status which can be either CASE, CLOSE or NORMAL.

2-Domain:
  - must have a name, ip, owner.
  - must have a track to record the users visiting it.
  - must have a status which can be either NORMAL or CASE.

3-Simulation:
  - should generate 30 random users with different statuses.
  - should generate 10 different domains.
  - should preview the vulnerable domains.
  - should preview the user statuses.
  - should display the mater visit history.

This project is entirely based on JS OOPS Concept and it is a console application.
