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
  - (test with same dates to get 0 first)

* Create a method to convert a provided Earth age (in years) into what it would be on various planets
  - Mercury (A Mercury year is .24 Earth years.)
  - Venus (A Venus year is .62 Earth years.)
  - Mars (A Mars year is 1.88 Earth years.)
  - Jupiter (A Jupiter year is 11.86 Earth years.)
  - Return a String with the Planet and the input age in that planet's Years
    * test to see if it calculates an expected result for each planet using an Earth age of 100 for each planet
      - EXPECTED INPUT: mercury, 100
      - EXPECTED RETURN: 416.67
      - EXPECTED INPUT: venus, 100
      - EXPECTED RETURN: 161.29
      - EXPECTED INPUT: mars, 100
      - EXPECTED RETURN: 53.19
      - EXPECTED INPUT: jupiter, 100
      - EXPECTED RETURN: 8.43
      
* Create a method to calculate a life expectancy based on a given age in years and the given expectancy of the users demo
  - EXPECTED INPUT: 52, 82
  - EXPECTED OUTPUT: You have 30 years ahead of you!
  - EXPECTED INPUT: 86, 82
  - EXPECTED OUTPUT: You have lived 6 years beyond your expiration date!

* Add a UI as index.html <--
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

* Handle the user input in main.js

* Refactor code as needed.

## Methodology

I began by thoroughly thinking out what the project was actually asking me to do. I then spec'd it out with the smallest possible chunks I could to make testing super granular. I expected to create an application that acquires the user's birthdate, gender, and a planet of their choice. Then it would calculate their age in their chosen planet's days, their life expectancy here on Earth (using the "Period Life Table, 2014" from the US Social Security Administration), and how many years they have lived past the their life expectancy--if they have done so. I planned to disallow dates that are past the current date the application is run.
HOWEVER, it took forever to get my testing setup to work out right, so I only have the functions that I would have used to make the app.

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
* Install and initialize (init -y) Node (if it isn't already)
* Navigate to your root project directory
* Type "npm init" and run through the package.json file filling in details as needed
* Type "npm install"
* Navigate to node_modules/.bin/ and type "jasmine init"
* Navigate back to the project's root directory
* To run the tests type "npm test"
* To run the test server type "npm run start"
* To build the project type "npm run build" and point your browser at the index.html file in the dist folder

## Known Bugs and Issues

There are no known bugs. This application still needs a front end. The code also needs a strong refactoring pass, for sure. And of course, leap years were roughed out so it's not super accurate in milliseconds or even seconds.

## Support and contact details

**Contact the author at andy.grossberg@gmail.com**

### License

Copyright (c) 2018 Andy Grossberg

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
