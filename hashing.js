/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:Hashmap mapping based on the key value pair
 *
 **/
var array = [];
//Declare hashmap
this.hashmap = function() {
  this.items = {};
  this.length = 0;
  this.setitems = function(key, value) {
    this.items[key] = value;
  }
  this.getitems = function(key) {
    return this.items[key]
  }
}
var map = new hashmap();
//hashmap initialization
for (var key = 0; key < 11; key++) {

  var listOne = new LinkedList2();
  listOne.AddFirst(key);
  map.setitems(key, listOne);
}
//Add all elements
function addElement() {
  var element = prompt("Enter the number");
  var remainder = element % 11;
  var listOne = new LinkedList2();
  array = map.getitems(remainder).getAll();
  //set flag
  var flag = 0;
  for (var i = 0; i < array.length; i++) {
    if (element == array[i]) {
      document.write("<br>Element found and should be Poped<br>");
      flag = 1;
    } else {
      document.write("<br>Element not found and should be Pushed or found element is poped<br>");
      listOne.AddFirst(array[i]);
    }

  }

  if (flag == 0)
    listOne.AddFirst(element);
  map.setitems(remainder, listOne);

}

//DisplayAll elements
function displayElement() {
  for (var i = 0; i < 11; i++) {

    map.getitems(i).DisplayAll();
    document.write(":" + i);
  }
}

//calling all function
displayElement();
addElement();
displayElement();
addElement();
displayElement();
var flag = 'y';
while (flag == 'y' || flag == 'Y') {
  addElement();
  flag = prompt("Want to continue y");
}
displayElement();
