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

# Commit 5:

- GET specific post
- DELETE specific post
- UPDATE specific post
- Allow CORS, npm install cors, add cors middleware

# Commit 6:

Make sure git repo is up to date.

Push to heroku:
`heroku create`

- follow deploy page on heroku
https://dashboard.heroku.com/apps/ancient-sierra-32758/deploy


Heroku:

`app.listen( process.env.PORT || 3000);`

- follow deploy page on heroku
https://dashboard.heroku.com/apps/ancient-sierra-32758/deploy

Go to you Heroku application click on Settings
Click on Reveal Config Vars
add a new KEY: MONGODB_URL
add a new VALUE: YOUR CONNECTION STRING