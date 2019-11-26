# Frontend Training Exercises

## NodeJS

1. Create a folder in projects and start a new project using npm called  exchange_rate inside this folder
2. Create a NodeJS file to consume the above API.
https://economia.awesomeapi.com.br/json/list/USD-BRL/1

PS: the last param is related with the amount of the last days we want to get. 1 = today.


3. The output of the code  on console, should be the following:

```
Cotação USD - BRL

Name: 
High value: R$ xx,xx
Low value: R$ xx,xx
BID: R$ xx,xx
Day Average: R$ xx,xx
Last 2 days average: R$ xx,xx
```

Rules: 

- Take careful with the decimal number conversion
- To calculate Day Average use the formula: Day Average = (<high value> + <low value>) / 2
- To calculate the Last 2 days average use:  (today average + yesterday average) / 2

## BFF and GraphQL

This exercise is using the graphql-bff project inside packages.

- To start the bff-graphql project run docker-compose up --build inside the folder

### BFF
Inside the bff project you must:

1.  Create an endpoint to get a tweet by ID and returning the Author user together, as the following example:

```json
{
    "id":	"1",
    "body":	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat sit amet dolor et porttitor. Integer venenatis leo ut nullam. ",
    "author":	{
        "id": "1",
        "completeName": "Bárbara Becker",
        "age": 20
    },
    "date":	"2019-10-25T23:45:35.116Z"
}
```
2. Create an endpoint to get a list of tweets from an specif user and returning as the following object:

```
{
    "id": "1",
    "completeName": "Bárbara Becker",
    "age": 20,
    tweets: [
        {
                "id":	"1",
                "body":	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat sit amet dolor et porttitor. Integer venenatis leo ut nullam. ",
                "date":	"2019-10-25T23:45:35.116Z"
        },
        {
                "id":	"2",
                "body":	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat sit amet dolor et porttitor. Integer venenatis leo ut nullam. ",
                "date":	"2019-10-25T23:45:35.116Z"
        }
    ]
}

3. Implement an endpoint to get all the retired users (age > 60)

```
Use the data provider by the JSON-server (DOC: https://github.com/typicode/json-server)

### GraphQL

1. Enter in http://localhost:3000/graphql and see the api documentation and what queries you can make
2. Inside the graphql project, in the schema file, create another entry in the rootQuery object for the company list just like the user rootQuery
3. Create a type for Tweets as following:

```
type Tweet {
  id: ID!
  body: String
  date: Date
  Author: UserType
}
```

4. Modify the UserType to get a list of Tweets
5. Create a rootQuery for tweet and tweet list
6. Test what you did

## SSR

1. Clone the project https://github.com/johnpapa/angular-tour-of-heroes and npm install inside the project
2. Inside the project run ng build --prod 
3. Check the dist/index.html was the entire mounted? why? 
4. Now run the application with ng serve --prod 
5. Run the audit with default configuration and take a print from the result
6. Commit your frontend project
7. Give the ng cli command to add SSR schema in the project 
   ```bash
        ng add @nguniversal/express-engine --clientProject angular.io-example
   ```
8.  Check the changes and what the command did
9.  Run the project with "npm run build:ssr && npm run serve:ssr"
10. Run the audit again and compare the results
11. Now install the compress package
    ```
        npm install --save compress
    ```
12. Import the compress inside server.ts
    ```
        import * as compression from 'compression';
    ```
13. Inside the server.ts after app.set add the following line
    ```
        app.use(compression())
    ```
14. Run step 9 and 10 again


## Angular