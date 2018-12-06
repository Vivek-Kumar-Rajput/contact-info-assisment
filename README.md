# Required Software
1. Node JS- version- 8.9.4
2. Angular CLI- version- 1.6.8 
3. GIT
# Installation steps:
1. First download mentined version of nodejs from "https://nodejs.org/en/download/releases/" and then install
2. Verify installtion using below commands on terminal window:
> node -v
terminal output should be: v8.9.4
> npm -v
terminal output should be: 5.6.0
3. Once node and npm version print same as mentioned above then install angular cli using below command on terminal window
> npm install -g @angular/cli@1.6.8
4. Verify installtion using below commands on terminal window:
> ng -v
terminal output should be: v1.6.8
for more info:
https://angular.io/guide/quickstart
5. Install latest version of git
6. Verify installtion using below commands on terminal window:
git --version
terminal output should be: git version 2.19.0

# Project Setup
1. Clone git project from "https://github.com/Vivek-Kumar-Rajput/contact-info-assisment.git" using below command or download
> git clone https://github.com/Vivek-Kumar-Rajput/contact-info-assisment.git

2. After successfuly execution of above command you will get "contact-info-assisment" 

3. Now go inside "contact-info-assisment" directory and fire below command from terminal window:
> npm install
It will install all dependancy in new created "node_modules" folder.

4. After successfuly execution of above command, you will run app localy using "ng serve" command from terminal window

5. Or run prod build version from "contact-info-assisment/contact-info" directory after deploging "contact-info" to apache server

# ContactInformation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

