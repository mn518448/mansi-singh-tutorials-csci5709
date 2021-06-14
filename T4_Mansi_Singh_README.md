# Tutorial 3
In this tutorial, 2 web pages were created- Profile Registration and Profile. The Profile Registration page consists of a form with fields such as First name, Last name, Email, Password and Confirm Password, and a Register button. The Profile page displays fields such as First name, Last name and email. Frontend validations have also been performed.

* Date Created: 03 06 2021
* Last Modification Date: 03 06 2021
* Github URL: https://github.com/mn518448/mansi-singh-csci5709.git
* Heroku URL: https://web-tutorial3.herokuapp.com/register
* Branch name: main
* Branch link: https://github.com/mn518448/mansi-singh-csci5709

## Authors

* [Mansi Singh](mn518448@dal.ca) - Collaborator

## Getting Started

### Prerequisites

To have a local copy of this lab and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Angular CLI: 11.0.3
Node: 14.15.1
Express: 4.17.1
Angular: 
...
Ivy Workspace:

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1100.3 (cli-only)
@angular-devkit/core         11.0.3 (cli-only)
@angular-devkit/schematics   11.0.3 (cli-only)
@schematics/angular          11.0.3 (cli-only)
@schematics/update           0.1100.3 (cli-only)
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

A step by step series of examples that tell you how to get a development env running

```
1. Clone the repository
2. Open Command Line Interface in the source package which contains package.json file and execute "npm install" to install all the node dependencies
3. To run the application on local, run "npm start" or "ng serve -o" command. The application can be accessed at the port which is configured in package.json file in local system.
``` 

## Deployment

The web application code has been deployed on Heroku and it is available at https://web-tutorial3.herokuapp.com/register

Below are the steps which were followed to deploy the application using command line interface.

1. Execute `heroku create` to create an app on Heroku
2. Run `heroku config:set NPM_CONFIG_PRODUCTION=false` to set the node server configuration
3. Run `npm run build`
4. Create and complete your profile on Heroku
5. Push your Github Repo to Heroku using these commands- `git add Procfile`, `git commit -a -m "Configuration to deploy on Heroku", `git push heroku master`

## Built With

* [Angular](https://angular.io/guide/setup-local) - The frontend framework
* [Node](https://nodejs.org/en/) - The backend framework 
* [Express](https://www.npmjs.com/package/express) - To create REST API

## Sources Used



### server.js

Lines 1 - 8
---------------

```
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/angular-web5709Tutorial3'));
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, '/dist/angular-web5709Tutorial3/index.html'));
});
app.listen(process.env.PORT || 8080);
```	

The code above was created by adapting the code in [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) as shown below: 

```
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-app>'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/<name-of-app>/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
```

- The code in [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) was implemented by Olutunmbi Banto
- [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147)'s Code was used to refer how to deploy front end application on Heroku and also to understand the role of server.js file.
- [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147)'s Code was modified by Group12-S21.


### package.json

Lines 47 - 50
---------------

```
"engines": {
    "node": "14.16.1",
    "npm": "6.14.12"
}
```

The code above was created by adapting the code in [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) as shown below: 

```
"engines": {
    "node": "6.11.0",
    "npm": "3.10.10"
}
```

- The code in [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) was implemented by Olutunmbi Banto.
- [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) Code was used because these versions of node and npm are used by Heroku to run the application on server.
- [ITNEXT](https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147) Code was modified by Mansi Singh.
