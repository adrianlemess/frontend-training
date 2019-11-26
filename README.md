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

3. Implement an endpoint to get all the retired people (age > 60)

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


## Angular