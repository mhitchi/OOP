# OOP
Homework 10


## User Story
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles

## Walkthrough
Upon running the 'cli.js' file in node, the user is prompted to enter a manager name and information, then a team member's name and information. The information from both entries is logged in a 'team.txt' file inside of the 'output' folder. The user is then asked if they wish to continue adding team members. If they choose to continue, they are asked for a new team member's name and information. This repeats until the user indicates that they are finished adding team members.

## Requirements
Inquirer- prompt for email, id, info based on role
Run as Node CLI

Run tests, then work on classes to pass a single test case, repeat- npm run test

## User Input
The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

## Roster Output

Generate a `team.txt` file in the `output` directory displaying name, role, id, role-specific property

![screen01](/images/screen01.png)

![screen02](/images/screen02.png)
