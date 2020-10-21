# Unit 10 OOP Homework: Template Engine - Employee Summary


## Instructions

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

* This app will run as a Node CLI to gather information about each employee.

* Below is an example of what the app looks like 

![Employee Summary 1](./Assets/10-OOP-homework-demo-1.png)
![Employee Summary 2](./Assets/10-OOP-homework-demo-2.png)
[demo](https://github.com/aminadabm93/teamProfileGenerator)


## USAGE
In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.

The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

There are also unit tests.

🎗 Remember, you can run the tests at any time with `npm run test`

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)


- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
