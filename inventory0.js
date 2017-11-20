//Main inventoryManagement function to store json
this.inventoryManagement = function() {
  this.inventory = {};
  this.length;

  this.setInventory = function(key, value) {
    this.inventory[key] = value;
  }

  this.getInventory = function(key) {
    return this.inventory[key];
  }


}
//Items to store items in inventoryManagement
this.Items = function() {
  this.items = {}
  this.setitems = function(key, value) {
    this.items[key] = value;
  }
  this.getitems = function(key) {
    return this.items[key];
  }
}
//object Declaration
var inventory = new inventoryManagement();
var array = [];
var count = 0;
// createInventory function is creates inventory and add products to it
function createInventory() {
  var item = new Items();
  var name = prompt("Enter name");
  var weight = prompt("enter weight");
  var price = prompt("Enter price");
  item.setitems("name", name);
  item.setitems("weight", weight);
  item.setitems("price", price);
  array[count++] = item;
  inventory.setInventory("inventory", array);
}
//displayInventory function DisplayAll inventory contents
function displayInventory() {
  var result = inventory.getInventory("inventory");
  var arrayObject = [];
  arrayObject = result;
  document.write("{ inventory:{[");
  for (var i = 0; i < count; i++) {
    console.log(arrayObject[i].getitems("name"));
    console.log(arrayObject[i].getitems("weight"));
    console.log(arrayObject[i].getitems("price"));

    document.write("<br>{ name:" + arrayObject[i].getitems("name") + ",<br>");
    document.write("<br>weight:" + arrayObject[i].getitems("weight") + ",<br>");
    document.write("<br>price:" + arrayObject[i].getitems("price") + " }<br>");
  }
  document.write("]}<br>}");
}

for (var i = 0; i < 3; i++) {
  createInventory();

}

displayInventory();
