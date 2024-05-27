# Go-Game-Score-API

## Description

This is an API for calculating the maximum number of draws in a Go game based on three provided scores. The API validates the input and calculates the maximum possible draws according to specified rules.

## Prerequisites

- Node.js 
- npm 

## Setup

1. **Clone the repository**
   ```
   git clone https://github.com/MISHRA-TUSHAR/Go-Game-Score-API.git
   cd Go-Game-Score-API
   ```
2. Install dependencies
   ```
   npm install
   ```
   
# Running the Project

1. Start the server
   ```
   npm start
   ```

2. Running tests
   ```
   npm test
   ```

# API Documentation

# Endpoint
 GET ```/:p1/:p2/:p3 ```

# Parameters
1. p1 (integer): The first player's score (0 ≤ p1 ≤ 30)
2. p2 (integer): The second player's score (0 ≤ p2 ≤ 30)
3. p3 (integer): The third player's score (0 ≤ p3 ≤ 30)

# Response
```200 OK``` : The request was successful.

Body: JSON object containing the maximum number of draws.
```
{
  "max_draws": <integer>
}
```

# Example Requests and Responses
1. Request: GET /0/0/0
   Response:
   ```
   {
   
   "max_draws:0
   
   }
   ```

3. Request: GET /1/1/2
   Response:
   ```
   {
   
   "max_draws:2
   
   }
   ```

# Error Handling

If any of the input parameters are invalid (e.g. out of range, non-integer) the API will return:
```
{
  "max_draws": -1
}
```
