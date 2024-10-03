const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Function to return a welcome message
function getWelcomeMessage() {
  return 'We will now learn functions!';
}

// Endpoint 1: Return a welcome message
app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

// Function to return a greeting message
function getGreetingMessage(username) {
  return 'Hey, ' + username + '! Are you ready to learn functions with us?';
}

// Endpoint 2: Take a username and return a greeting message
app.get('/greet', (req, res) => {
  let username = req.query.username;

  res.send(getGreetingMessage(username));
});

// Function to check if a person has experience
function checkYearsOfExp(yearsOfExp) {
  if (yearsOfExp > 0) {
    return 'You have some experience with functions. Great!';
  } else {
    return 'No worries. You will start writing functions in no time!';
  }
}

// Endpoint 3: Take the years of experience in functions and return a message
app.get('/message', (req, res) => {
  let yearsOfExp = parseFloat(req.query.yearsOfExp);

  res.send(checkYearsOfExp(yearsOfExp));
});

// Function to return the time the student can dedicate to learn functions
function getTime(days, hours) {
  return days * hours;
}

// Endpoint 4: Create an endpoint that takes the number of days and hours a student can dedicate to learn functions per week and returns the total hours available per week.
app.get('/hours', (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);

  res.send(getTime(days, hours).toString());
});

// Function to return the modules completion message
function getModuleConpletion(username, hasCompleted) {
  if (hasCompleted) {
    return username + ' has completed the modules';
  } else {
    return username + ' has not completed the modules';
  }
}

// Endpoint 5: Create an endpoint that takes a username and a boolean hasCompleted indicating module completion status, and returns a message indicating if the student has completed the modules or not.
app.get('/module-completion-status', (req, res) => {
  let username = req.query.username;
  let hasCompleted = req.query.hasCompleted === 'true';
  res.send(getModuleConpletion(username, hasCompleted));
});

// Function to return a personalized greeting message
function getPersonalizedGreeting(city, name) {
  return 'Hey, ' + name + "! What's famous about " + city + '?';
}

// Endpoint 6: Take a student's city and name, return a personalized greeting message
app.get('/personalized-greeting', (req, res) => {
  let city = req.query.city;
  let name = req.query.name;

  res.send(getPersonalizedGreeting(city, name));
});

// Function to find the age from birth year
function findAge(birthyear) {
  return 2024 - birthyear;
}

// Endpoint 7: Take the birth year of the student and return the age
app.get('/find-age', (req, res) => {
  let birthyear = parseInt(req.query.birthyear);

  res.send(findAge(birthyear).toString());
});

// Function to return the time required message
function findRequiredTime(days, hours) {
  let time = days * hours;
  if (time >= 30) {
    return 'The time being dedicated is sufficient for learning functions';
  } else {
    return 'The time being dedicated is not sufficient for learning functions';
  }
}

// Endpoint 8: Take the days per week and hours per day a student can dedicate to learn functions and return whether it is sufficient (>= 30)
app.get('/is-time-sufficient', (req, res) => {
  let days = parseFloat(req.query.days);
  let hours = parseFloat(req.query.hours);

  res.send(findRequiredTime(days, hours).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
