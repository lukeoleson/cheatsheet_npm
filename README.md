
# NPM

## INFO

Note that after installation (`npm install`) there would be a node_modules folder in this directory but we have it listed in .gitignore


## GENERAL

* Npm is a package manager for JavaScript. This means that we use it manage all of the dependencies for a project as well as our development environment. It manages which packages are used for what situation (production or development), what versions get installed as well as automates repetitive tasks. 

* Npm is part of node.js, but you don't need to know node.js to use it.

* When you install modules they go into the `node_modules` dir as well as the package.json file under the appropriate object (unless they are being installed globally). 

* Installing a module also installs any dependencies required by that module, which also go into the `node_modules` dir.

* We can install modules for development, globally/locally or for production.


## PACKAGE.JSON

* This is a manifest file that has all the app info like the name, version, etc. This file is created by the `npm init` command. It is the file that tells npm how to install our app's dependencies as well as what scripts to run. 

* There is also a `package-lock.json`, but I am not sure what that does yet.


## MODULES - GENERAL

* Packages, modules and dependencies are the same thing. They are what we normally think of as libraries.

* We can find all the npm modules and ratings at npmjs.com

    ### INSTALLING MODULES FOR PRODUCTION

    * These are the modules that our app relies on to run. i.e. needed for production. They will be listed in package.json in the dependencies object.
        > npm install moduleName
        > npm install moduleOneName moduletwoName

    ### INSTALLING MODULES FOR DEVELOPMENT

    * These are the modules that we are using just while the app is in development (gulp, sass, etc.). They will be listed in package.json in the dev-dependencies object.
        > npm install moduleName --save-dev
        > npm install --save-dev moduleOneName moduletwoName

    ### INSTALLING MODULES GLOBALLY

    * These modules are installed locally on our machine. They do not go into our app's `node_modules` folder or package.json file and are available anywhere. 
        > npm install -g nodemon
    * You can get the directory of all the global modules installed
        > npm root -g

    ### INSTALLING SPECIFIC MODULE VERSIONS

    * Include the version with the install command
        > npm install lodash@4.17.3

    ### UPDATING MODULES

    * Using the update command will update the specified package to the latest version
        > npm update lodash
            
    ### LISTING MODULES
    
    * You can list all of the app's modules and all their dependencies
        > npm list
    * You can list a specified number of levels of dependencies
        > npm list --depth 0  // this will show just the top level
        > npm list --depth 1  // this will show the top 2 levels
    
    ### UNINSTALLING MODULES

    * Modules are uninstalled using either uninstall, remove, rm or un. You have to also specify the way the module was installed, i.e. as a dependency or a dev. dependency or globally. 
        > npm uninstall lodash
        > npm un --save-dev gulp
        > npm remove -g nodemon
        > npm rm -g live-server


## NPM COMMANDS

* get the version of npm
    > npm -v
    > npm --version

* get the help page
    > npm
    > npm help

* create a new app managed with npm 
    > npm init
    > npm init -y // answer yes to all default settings
    > npm init --yes

* change the defaults for our init command
    > npm config set init-author-name "Luke Oleson"
    > npm set init-license "MIT"

* view the default settings for our init command
    > npm config get init-author-name
    > npm get init-author-name

* reset a default for our init command
    > npm config delete init-author-name


## INSTALLING AN APP

* Using the install command will install all the dependencies as well as all the dev dependencies. Which is essentially a development installation. 
    > npm install

* If we want to install for production we use the --production flag, which will install only the dependencies (i.e. a production version)
    > npm install --production


## SEMANTIC VERSIONING

* Module versions are represented by three types of versions - the major version, minor version and patch version

    e.g. 3.8.6 === major.minor.patch

    - Major Version - Applies breaking changes
    - Minor Version - Adds new features but does not break anything
    - Patch Version - Applies a patch and does not break anything

* The version numbers in our package.json file can take flags that tell npm how to handle new versions of our dependencies. 
    
    `^` this means that when we run npm install it will install the latest minor version (e.g. "^3.2.1" -- if there is a version 3.3.2 available it will install that one, but it will not exceed 3)
    
    `~` this means that when we run npm install it will install the latest patch version (e.g. "^3.2.1" -- if there is a version 3.2.17 available it will install that one, but it will not exceed 3.2)
    
    ` ` no flag means to install this exact version only
    
    `*` this means to install the absolue latest version of this module

    
## SCRIPTS

* Scripts are listed in the scripts object in package.json and are essentially shell commands. 

* These are commands we want to be able to run with the npm command. 

* There are some special script names (start, test, etc.) that we can run with just the name. These are designed like this to make it easier for other people to use them
    > npm start
    > npm test

* If we create our own custom scripts we have to use the run command
    > npm run myCustomScript