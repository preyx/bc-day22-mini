


const fs = require('fs')

const myinfo = () => {
const profile = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Student Profile</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.3.1/dist/css/uikit.min.css" />
</head>

<body>
  <div class="uk-container">
    <div class="uk-heading-medium uk-heading-divider">${name}</div>
    <div class="uk-child-width-expand@s" uk-grid>
      <div>
        <div>
          <p>${bio}
          </p>
        </div>
      </div>
      <div>
        <div class="uk-card uk-card-default uk-card-body">
          <p>${location}
            </p>
          <p uk-margin>
            <a class="uk-button uk-button-default" href="${LinkedIn}">LINKEDIN</a>
          </p>
          <p uk-margin>
            <a class="uk-button uk-button-default" href="https://github.com/${GitHub}">GITHUB</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.1/dist/js/uikit.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/uikit@3.3.1/dist/js/uikit-icons.min.js"></script>
</body>

</html>`

fs.writeFile('profile.html', profile , e => e ? console.log(e) : null)

}
