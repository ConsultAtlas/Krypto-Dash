## Krypto-Dash - Simple Dashboard for Viewing Cryptocurrency Pricing Information

Krypto-Dash provides live pricing information for some of the most popular cryptocurrencies on the internet. We currently support Bitcoin, Ethereum, and Sia Coin, and crowd source our decisions on future coin additions to the platform. Users can login into the platform using google sign-in credentials. Once logged in, users can select from a list of currencies they wish to see pricing for. Always know what your currency is worth in real time.

## Status - Live Beta

Krypto-Dash is an MVP, student learning project, and is currently in development.

## Technologies, Frameworks, Libraries, and Packages Used

Front-end
- React.js
- React Redux
- Create-React-App
- Axios
- Materialize-CSS
- HTML 5
- CSS 3
- Javascript ES6

Back-end
- Node.js
- Express
- MongoDB
- Mongoose

Hosting
- Heroku
- AWS S3 buckets for some media
- mLab


## Context for the Projects

This project was developed as a the capstone project during the DigitalCraft's Full Stack Flex Software Development Bootcamp, which graduated February 2018. The part-time program, based in Atlanta, GA, teaches students how to code fullstack projects using javascript, more specifically the MERN 2.0 stack. All the code was written while learning the underlying technologies, and is ongoing.

## What Did I Set Out To Build?

The project was built to see pricing information on cryptocurrencies, centralized in one place. I completed the project solo, while working a full time job at a startup where I work in a business development role. Because I needed to manage my other responsibilities, I set out to meet the minimum requirements for the project, but focusing on a subject area that interested me, cryptocurrencies. I wanted make sure that I could use all of the required technologies and make it all fit together, even for just a simple app.

The project utilizes passport.js to manage OAUTH 2.0 login in with google and displays different routes and components based on a users login status. User info is stored in a mongo database hosted by mLab. To update pricing information, AJAX calls, via axios, are made to CoinMarketCap.com. Currency components are toggled on or off using state management in react redux.

## Areas for Improvement

- User Input on Currencies to Add - I would like to add a survey to the app where users can submit requests for new currencies to be added to the app.
- Add more Cryptocurrencies
- Persist User Choices of Currencies in MongoDB - I would like to save the state of which currencies a user has filtered to see in their user model instance in MongoDB so that when they logout and login back into the platform, they see displayed the currencies that they have previously chosen.
- Add Visualizations to the Pricing Data - I would like to add graphical information / charts to the currency components.
- Email notifications - I would like to implement email communication from the app, using a third party such as SendGrid or MailChimp, to send signup confirmation emails, new feature announcements, etc.
- Add Additional Authentication Strategies in Passport.JS - Add Facebook, LinkedIn, and Twitter authentication options.

