## Commit 1:

Basic node server with home route, npm start then go localhost:3000;

## Commit 2:

Connect with database:
Setup atlas database & connect with mongoose, hide the connection key insid dotenv using process.env.DB_CONNECTION instead of hardcoding the connection string.

## Commit 3:

- split app.js file into routes files and use router instead of app, import this back into app.js via middleware
  
## Commit 4:

- test Postman POST request with raw JSON body, add json parsing & special char middleware
- setup Post model for posts
- use the model in the POST and GET requests and change both to async try catch blocks
- test POST & GET on Postman should both be working, writing/reading from Atlas database.