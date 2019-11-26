# Frontend Training Exercises

## NodeJS

1 - Create a folder in projects and start a new project using npm called  exchange_rate inside this folder
2 - Create a NodeJS file to consume the above API.
https://economia.awesomeapi.com.br/json/list/USD-BRL/1

PS: the last param is related with the amount of the last days we want to get. 1 = today.


3 - The output of the code  on console, should be the following:

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