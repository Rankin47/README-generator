


// var url = 'http://index.io/log'

// function log (message) {
// //send http request
// console.log(message);
// }
// module.exports.log = log;
// module.exports.endPoint = url;

// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: (value)=>{if(value){return true} else {return 'input value'}}
        },
        {
            type: 'input',
            message: 'how to install app?',
            name:'installation',
            validate: (value)=>{if(value){return true} else {return 'input value'}}
        },
        {
            type: 'input',
            message: 'instructions',
            name:'instructions',
            validate: (value)=>{if(value){return true} else {return 'input value'}}
        },
        {
            type: 'input',
            message: 'credits?',
            name:'installation',
            validate: (value)=>{if(value){return true} else {return 'input value'}}
        },
        {
            type: 'input',
            message: 'how to use the app?',
            name:'how to',
            validate: (value)=>{if(value){return true} else {return 'input value'}}
        },
        {
            type: 'list',
            message: 'What licenses are needed?',
            name:'license',
            choices:['MIT','GLP','Apache','GNU','N/A'],
            validate: (value)=>{if(value){return true} else {return 'input value'}}
        },
        {
            type:'input',
            message:'Github username:',
            name:'git',
            validate:(value)=>{if(value){return true} else {return 'input value'}}
        },
        {
            type:'input',
            message:'E-MAIL:',
            name:'email',
            validate:(value)=>{if(value){return true} else {return 'input value'}}
        }
    ]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    usage,
    contribution,
    email

})=>{
//template to be used//
const template =`# ${title}

${installation}
${usage}
${contribution}
${instructions}
${credit}
${license}

# Contact
* Git :${git}
* E-mail :${email}`;

//function to create README// 

createNewFile("Readme.md",template);
}
);
//create new file function//
function createNewFile(filename,template){
//fs
fs.writeFile(`./${filename.toLowerCase().split('').join('')}.md`,'data',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('README GENERATED')
})
};
