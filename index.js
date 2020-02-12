const inquirer = require('inquirer')
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Please enter your name;'
  },
  {
    type: 'input',
    name: 'lastName',
    message: 'Please enter your last name;'
  }
])
.then(response=>{
  console.log(response)
})