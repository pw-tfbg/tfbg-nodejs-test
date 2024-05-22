# Instructions

1. Download this repo and make the below changes.
2. Reach out to Peter via phone/email/sms for any clarification or info you need.
3. Zip it up and email it back.

# Setup

```
npm install
npm run app 
visit http://localhost:3000/by-month/2
```

# Tasks

## Endpoint /by-month/:customerID

1. Add validation to ensure the customer number is an integer. Return 401 response with a clear error message if it is not.

2. Change the response so that every data row contains all 3 categories "Milk", "Fruit", and "Pantry" giving a total of 0 for any month there was no purchases.

e.g. the first result should be
```
    {
      "date": "2023-10-01",
      "Fruit": 401,
      "Milk": 117,
      "Pantry": 0
    },
```

3. Format the value of the data so that the purchase amount is in the currency format $XX.00

e.g. the first result should be
```
    {
      "date": "2023-10-01",
      "Fruit": $401.00,
      "Milk": $117.00,
      "Pantry": $0.00
    },
```

4. Add "Total" to each date returned with the total amount of all categories.

e.g. the first result should be
```
    {
      "date": "2023-10-01",
      "Fruit": $401.00,
      "Milk": $117.00,
      "Pantry": $0.00,
      "Total": $518.00
    },
```

5. Add a 2nd parameter "Sort" that can sort in descending order by date or by total value e.g. /by-month/123/date will sort by date and /by-month/123/total will sort by total

## Endpoint /fruit/:name

6. Add a new api method /fruit/:name that will get fruit information from https://www.fruityvice.com/ and fat and sugar. E.g. /fruit/Strawberry should return

```
{
    "name":"Strawberry",
    "fat":0.4,
    "sugar":5.4
}
```
# How will this be evaluated?
- Do the changes work and achieve the goals of the tasks?
- Is the code clean with appropriate structure?
- Extra points for any "value add" items you think of such as added tests, or improved code style/architecture.