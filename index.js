// Import necessary modules
// Import the Express framework for creating web servers
const express = require("express");  
 // Import the CORS middleware for handling cross-origin requests
const cors = require("cors");       

// Create an Express application instance
const app = express();

// Enable CORS middleware to allow cross-origin requests
app.use(cors());

// Define a collection of todo items
const todos = [
  {
  id: 1,
  title: "Todo 1",
  descripton: "This is todo 1",
  completed: false,
}, {
  id: 2,
  title: "Todo 2",
  descripton: "This is todo 2",
  completed: false,
}, {
  id: 3,
  title: "Todo 3",
  descripton: "This is todo 3",
  completed: false,

}, {
  id: 4,
  title: "Todo 4",
  descripton: "This is todo 4",
  completed: false,
}, {

  id: 5,
  title: "Todo 5",
  descripton: "This is todo 5",
  completed: false,
}
];

// Route to fetch a random set of todo items
app.get("/todos", (req, res) => {
  // Create an empty array to store randomly selected todo items
  const randomTodos = [];

  // Iterate through the todo items and randomly select half of them
  for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
      randomTodos.push(todos[i]);
    }
  }

  // Send the randomly selected todo items as a JSON response
  res.json({ todos: randomTodos });
});

// Route to calculate the sum of two numbers
app.get("/sum", (req, res) => {
  // Retrieve the numbers from the query parameters
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  // Calculate the sum
  const sum = a + b;

  // Send the sum as a plain text response
  res.send(sum.toString());
});

// Route to calculate interest
app.get("/interest", (req, res) => {
  // Retrieve the principal, rate, and time values from the query parameters
  const principal = parseInt(req.query.principal);
  const rate = parseInt(req.query.rate);
  const time = parseInt(req.query.time);

  // Calculate the interest
  const interest = (principal * rate * time) / 100;

  // Calculate the total amount
  const total = principal + interest;

  // Send the total and interest values as a JSON response
  res.send({ total: total, interest: interest });
});

// Start the server and listen on port 8080
app.listen(8080);
