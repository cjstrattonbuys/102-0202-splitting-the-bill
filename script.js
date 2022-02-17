var mealCost = Number(prompt("Cost of meal (ex. 25.99)"));
var tip = Number(prompt("Tip amount (enter 0.15 for 15%)"));
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(prompt("People in your party (minimum of 1)"));

console.log(
  `Your meal cost is $${mealCost}, and with the tip, it comes to $${total.toFixed(
    2
  )}. Your share is $${(total.toFixed(2) / numOfPeople).toFixed(
    2
  )}. Hope it was delicious!`
);
