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
  generateHTML(name, location, bio, linkedIn, gitHub)
})

const generateHTML = (name, location, bio, linkedIn, gitHub) =>{
  fs.writeFile('index.html', `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.3.1/dist/css/uikit.min.css" />
</head>

<body>
  <div class="uk-container">
    <div class="uk-heading-medium uk-heading-divider">${name}</div>
    <div class="uk-child-width-expand@s" uk-grid>
      <div>
        <div>
          <p>${bio}</p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <p>${location}</p>
          <a href = '${linkedIn}'>Link to my LinkedIn Profile!</a>
          <br>
          <a href ='https://www.github.com/${gitHub}'>Link to my GitHub Profile</a>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.1/dist/js/uikit.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.1/dist/js/uikit-icons.min.js"></script>
</body>
</html>
  `, error => error ? console.error(error) : console.log('success'))
}