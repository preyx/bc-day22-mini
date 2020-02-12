const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
{
  type: 'input',
  name: 'name',
  message: 'Please enter your name'
},
{
  type: 'input',
  name: 'location',
  message: 'Please enter your current city'
},
{
  type: 'input',
  name: 'bio',
  message: 'Please enter a short bio'
},
{
  type: 'input',
  name: 'linkedIn',
  message: 'Enter your LinkedIn URL'
},
{
  type: 'input',
  name: 'gitHub',
  message: 'Enter your GitHub username'
}])
.then(({name, location, bio, linkedIn, gitHub}) => {
  fs.appendFile('test.txt', `${name}`, e => e ? console.log(e) : null)
  fs.appendFile('test.txt', `, ${location}`, e => e ? console.log(e) : null)
  fs.appendFile('test.txt', `, ${bio}`, e => e ? console.log(e) : null)
  fs.appendFile('test.txt', `, ${linkedIn}`, e => e ? console.log(e) : null)
  fs.appendFile('test.txt', `, ${gitHub}`, e => e ? console.log(e) : null)
})