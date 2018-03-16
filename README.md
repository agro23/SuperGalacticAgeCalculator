# Super Galactic Age Calculator

#### By Andy Grossberg

## Description
An application to determine a user's age based on a planet's solar years as well as their life expectancy and how many years they've lived past their life expectancy if they have. It takes a birthdate and a gender as input.

## Rules

This is the code review project for week one of Javascript focused on testing:

**Super Galactic Age Calculator**
A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user’s age based on a planet’s solar years. You will need to use the Javascript Date object.

We are not required to build a UI for this application. Instead, focus is on thoroughly testing each piece of functionality. Specs will be committed before starting to code. There needs to be at least ONE test for EACH spec.

- The business logic of the application should:

* Take a person’s age in years and convert it into seconds.
* Take two dates and determine the difference, in seconds, between the two. (This way a user can enter a birthdate  and the application can compare the birthdate against the current time to come up with an accurate age.)
* Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.)
* Return the age of a human in Venus years. (A Venus year is .62 Earth years.)
* Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)
* Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)
* Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

**Objectives**

- Code will be reviewed for the following objectives:

1) Business logic is thoroughly tested with Jasmine.
2) Karma is set up correctly.
3) Project utilizes ES6 features including classes, let and const.
4) Dependencies are managed with npm.
5) Application uses webpack to lint, bundle, and process code.
6) Project is in a polished, portfolio-quality state. (Clear code presentation, error free, complete README, commit history, etc.)
7) Specs were committed before any code.
8) Required functionality was in place by the Friday deadline.
9) Project demonstrates understanding of week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

## Specifications

* Create an age modifier object called AgeMaker
  - Constructor should take birthdate, gender, and planet

* Test if object exists
  - EXPECTED INPUT: "11/16/1966","female", "mercury"
  - EXPECTED OUTPUT: None.

* Test if assigning a value to a property changes the value assigned at construction
  - EXPECTED INPUT: "male"
  - EXPECTED OUTPUT: None.

* Create a method to recalculate a date into seconds
  - EXPECTED INPUT: 11/16/1966
  - EXPECTED OUTPUT: 1617231600
  - return a date in seconds

* Create a method to calculate a person's age in years from their birthday
  - EXPECTED INPUT: 11/16/1966
  - EXPECTED OUTPUT: 52
  - return it in years

* Create a method to take two dates and determine the difference, in seconds, between the two.
  - EXPECTED INPUT: 11/16/1966
  - EXPECTED INPUT: 11/16/1965
  - EXPECTED RETURN: 45536400


    * test to see if it receives the age
    * test to see if it calculates an expected result

* Create a method to convert a given birthdate into seconds
  - return age in seconds
    * test to see if it receives the age
    * test to see if it calculates an expected result

* Create a method to acquire a date, convert it into seconds, and compare the difference between that date and the current date in seconds.
  - Instantiate a date object
    * let date = new Date();
  - return the difference in seconds

* Refactor the previous three methods into one method???

* Create a method to Validate the date submitted by the user by making sure that it isn't past the current date.
  - if it is past the current date, reject the entry and set everything to 0

* Create a method to calculate a provided age (in seconds) for various planets
  - Mercury (A Mercury year is .24 Earth years.)
  - Venus (A Venus year is .62 Earth years.)
  - Earth (1:1)
  - Mars (A Mars year is 1.88 Earth years.)
  - Jupiter (A Jupiter year is 11.86 Earth years.)
  - Return a String with the Planet and the input age in that planet's Years

* Create a method to calculate a life expectancy given a birthdate and gender  
  - Convert the age to years
  - Using the most recent US Social Security Period Life Table (2014), find the user's age and gender
  - Return that life expectancy

* Create a method to calculate if a person born on a given date has exceeded their life expectancy.
  - call the life
  - return how many years past their normal expectancy they have lived.

* In Main.js create a prompt to acquire user answers to the date and gender questions

* In Main.js use the above methods to process the user input

* Add UI
  - Make a form to enter birthdate, gender, and choose planet.
    * require all answers
    * take the date in date form
    * the gender is a radio button
    * the planet is a select menu
  - Make a Div for results of the conversion:
    * Age
    * Planetary Age
    * Life expectancy
    * Time alive past expectancy

* In main.js

* Refactor code as needed.

## Methodology

I began by thoroughly thinking out what the project was actually asking me to do. I then spec'd it out with the smallest possible chunks I could to make testing super granular. The application acquires the user's birthdate, gender, and a planet of their choice. Then it calculates their age in their chosen planet's days, their life expectancy here on Earth (using the "Period Life Table, 2014" from the US Social Security Administration), and how many years they have lived past the their life expectancy--if they have done so. NOTE: I plan to disallow dates that are past the current date the application is run.

## Technologies Used

* HTML
* CSS
* Javascript
* Node

## Dependencies and plugins

**Dependencies**
* Webpack 4.0.1 (as my module bundler)
* Jasmine (for tests)
* Karma (for test running)
* ESLint (for linting my code, looking for dropped semi-colons and whatnot)
* Babel (to transpile my code)

**Dev Dependencies**
* Webpack 4.0.1
* Webpack-cli 2.0.9
* Bootstrap 4.0.0
* jQuery 3.3.1
* Popper.js 1.14.0

**Plugins**
* UglifyJsPlugin
* CleanWebpackPlugin
* HtmlWebpackPlugin

## Setup/Installation Requirements
* Download the project from the repository https://github.com/agro23/SuperGalacticAgeCalculator
* install and initialize (init -y) Node (if it isn't already)
* npm install webpack@4.0.1 -- save-dev
* npm install webpack-cli@2.0.9 -- save-dev
  - remove the test script from package.json that has the error message
* make sure that webpack.config.js is in the top level of the project
* npm install style-loader@0.20.2 css-loader@0.28.10 --save-dev
* npm install html-webpack-plugin@3.0.6 --save-dev
  - pull the script tag out of the index.html since it will be bundled in now
* npm install clean-webpack-plugin@0.1.18 --save-dev
* npm install uglifyjs-webpack-plugin@1.2.2 --save-dev
  - (smash that code!)
* npm install webpack-dev-server@3.1.0 --save-dev
* NOTE: You will be using Run Start from here on -------------------------------------------------?
* npm install eslint@4.18.2 --save-dev
* npm install eslint-loader@2.0.0 --save-dev
* npm run lint         
  - (our linter is now set up)
* npm install jquery --save
  - NOTE: remove jquery from any script tags in the HTML since it's going to be bundled in
* npm install popper.js --save
* npm install bootstrap --save
* npm install jasmine-core@2.99.0 --save-dev
* npm install jasmine@3.1.0 -- save-dev
* ./node-modules/.bin/jasmine init -------------------------------------------------------------?
* npm install karma@2.0.0 --save-dev
* npm install karma-jasmine@1.1.1 --save-dev
* npm install karma-chrome-launcher@2.2.0 --save-dev
* npm install -g karma-cli
* npm install karma-cli@1.0.1 --save-dev
* npm install karma-webpack@2.0.13 --save-dev
* npm install karma-jquery@0.2.2 --save-dev
* npm install karma-jasmine-html-reporter@0.2.2 --save-dev
* IN THE PROJECT'S ROOT FOLDER:
  - karma init
* Modify the karma init file ----------------------------------------------------------------?
* npm install babel-core@6.26.0 --save-dev
* npm install babel-loader@7.1.3 --save-dev
* npm install babel-preset-es2015@6.24.1 --save-dev
* build the file with npm: $ npm load build ---------------------------------------- WHERE IS THIS SCRIPT???
* Load the index.html file from dist/ in your browser

## Known Bugs and Issues

There are no known bugs. The code needs a strong refactoring pass, for sure. Also, leap years were roughed out so it's not super accurate in milliseconds or even seconds.

## Support and contact details

**Contact the author at andy.grossberg@gmail.com**

### License

Copyright (c) 2018 Andy Grossberg

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
