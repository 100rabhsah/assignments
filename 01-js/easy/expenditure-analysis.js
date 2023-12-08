/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
var output=[];
  for(i=0;i<transactions.length;i++){
    const j = output.findIndex(element => element.category === transactions[i].category);
      if (j > -1) 
      {
        output[j].totalSpent+=transactions[i].price;
      }
      else{
        output.push({category:transactions[i].category,totalSpent:transactions[i].price})
      }
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
