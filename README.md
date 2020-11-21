[![CircleCI](https://circleci.com/gh/igniteram/protractor-cucumber-typescript/tree/master.svg?style=shield)](https://circleci.com/gh/igniteram/protractor-cucumber-typescript/tree/master)

###  Framework Setup Guide   
This project demonstrates the protractor cucumber typescript framework project setup.

### Features
* No typings.json or typings folder, they have been replaced by better **'@types'** modules in package.json
* ts-node(typescript execution environment for node) in cucumberOpts. 
* All scripts written with > Typescript & Cucumber
* Folder structures with transpiled js files in separate output folder.
* Page Object design pattern implementation.
* Extensive hooks implemented for BeforeFeature, AfterScenarios etc.
* Typedoc has been implemented for self explanation of the code.
* Screenshots for all feature scenarios



### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* First step is to start selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
``` 

*  start your selenium server!
```
npm run webdriver-start
```
* The below command would create an output folder named 'typeScript' and transpile the .ts files.
```
npm run tsc
```
* The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build 
```

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```
It launches the Chrome Browser and runs the scripts# Zip Co Tech challenge

* Reports are located on the below location, Right click and Open in Browser.

````
reports\html\cucumber_reporter.html
````
