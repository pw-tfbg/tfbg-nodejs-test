const express = require("express");
const [GetPurchases] = require("./db/database.js");

const app = express();

const colours = ["#50BCBD", "#1B796D", "#DAE5A9", "#E3907D", "#F16151", "#00BCE3", "#706F6F"];


app.get('/by-month/:customerID', (req, res) => {
    const response = {
        meta: {
            title: "Order Value by Category",
            colors: {
            Fruit: colours[0],
            Milk: colours[1],
            Pantry: colours[2]
            },
        },
        data: []
    }
    const data = GetPurchases();
    const dateDict = {};
    data.forEach(d => {
        const date = d.purchaseDate.substring(0,7)+'-01';
        if(dateDict[date]==undefined) {
            dateDict[date] = {date:date};
        }
        if(dateDict[date][d.category]==undefined) {
            dateDict[date][d.category] = 0
        }
        dateDict[date][d.category] += parseInt(d.purchaseTotal);
    });
    for (const [d, v] of Object.entries(dateDict)) {
        response.data.push(v)
    }
    res.send(response)
});



app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`Data Service listening on port ${port}`)
});