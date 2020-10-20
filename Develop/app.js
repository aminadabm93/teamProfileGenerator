const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");/////////////////////////////////
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
var roster = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//asks employee crriteria and then creates proper object
async function createEmployee(){
    let employeeQs = [{
        message: "What type of employee will you be adding?",
        name: "employeeType",
        type: "list",
        choices:["Engineer","Manager","Intern"]
    },{
        message:"Employee's Name: ",
        name: "name",
        type:"input"
    },{
        message:"Employee ID: ",
        name:"id",
        type:"input"
    },{
        message:"Employee email: ",
        name:"email",
        type:"input"
    }];

    var response = await inquirer.prompt(employeeQs);
    if(response.employeeType=="Engineer"){
        let engineerInput = await inquirer.prompt({
            message:"What is the engineer's GitHub? ",
            name: "github",
            type: "input"
        });
        let github = engineerInput.github;

       roster.push(new Engineer(response.name,response.id,response.email, github));
    }

    else if(response.employeeType=="Manager"){
        let managerInput = await inquirer.prompt({
            message:"What is the manager's office number? ",
            name: "office",
            type: "input"
        });
        let office = managerInput.github;

        roster.push( new Manager(response.name,response.id,response.email, office));
    }
    else if(response.employeeType=="Intern"){
        let internInput = await inquirer.prompt({
            message:"What is the intern's school? ",
            name: "school",
            type: "input"
        });
        let school = internInput.school;

        roster.push(new Intern(response.name,response.id,response.email, school));
    }
    else {return false;}
}

//beginning of prompts 
async function init(){
    let addMore=true;
    while(addMore){
        const employee = await createEmployee();
        
        //ask if they want to keep going. 
        let keepGoing = await inquirer.prompt({
            message: "Would you like to add another employee?",
            name: "continue",
            type: "list",
            choices: ["Yes","No"]
        });
    
        if (keepGoing.continue=="Yes"){
            addMore=true;
        }
        else{
            addMore=false;
            console.log(roster);
        } 
    }

    //create html code
    var allHTML = render(roster);
    //create html file 
    
}

init();


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



