function listAllBlackShoes(inventory) {
    var flatList = '';
    //iterate over inventory
    for (var i = 0; i < inventory.length; i++){
        var brandName = inventory[i].name;
        var shoesArray = inventory[i].shoes;
        // iterate over inventory[i].shoes
        for (var j = 0; j < shoesArray.length; j++)
        {
            var currentShoe = shoesArray[j];
            
            if(shoeIsBlack(currentShoe)){
                var itemsDesc = shoesArray[j].name + ', ' + shoesArray[j].price;
                flatList += brandName + ', ' + itemsDesc + '\n';
            }
        }
    }
    return flatList;
}
function shoeIsBlack(shoeObject)
{
    if (shoeObject.name.indexOf('black') !== -1){
        return true;
    }else{
        return false;
    }
}

//Create helper functions if needed
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];
console.log(listAllBlackShoes(currentInventory));
