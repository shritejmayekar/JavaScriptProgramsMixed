/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description: AddressBookRecord to store person in in book and there details.
 **/


//Main addressbookManagement function to store json
this.addressbookManagement = function() {
  this.addressBook = {};
  this.length;

  this.setAdressBook = function(key, value) {
    this.addressBook[key] = value;
  }

  this.getAddressBook = function(key) {
    return this.addressBook[key];
  }


}
//Items to store items in inventoryManagement
this.persons = function() {
  this.items = {}
  this.setitems = function(key, value) {
    this.items[key] = value;
  }
  this.getitems = function(key) {
    return this.items[key];
  }
}
//object Declaration
var book = new addressbookManagement();
var array = [];
var count = 0;
// createInventory function is creates inventory and add products to it
function createAddressBook() {
  var item = new persons();
  var firstName = prompt("Enter first name");
  var lastName = prompt("enter last name");
  var address = prompt("Enter addres");
  var city = prompt("Enter city");
  var state = prompt("Enter state");
  var zip = prompt("Enter zip");
  var mobile = prompt("Enter mobile")

  item.setitems("firstName", firstName);
  item.setitems("lastName", lastName);
  item.setitems("address", address);
  item.setitems("city", city);
  item.setitems("state", state);
  item.setitems("zip", zip);
  item.setitems("mobile", mobile);
  array[count++] = item;
  book.setAdressBook("addresBook", array);
  store(book);
  console.log(array);
}
//displayInventory function DisplayAll inventory contents
function displayAdrressbook() {
  var result = book.getAddressBook("addresBook");

  var arrayObject = [];
  arrayObject = result;


  document.write("{ addresBook:{[");
  for (var i = 0; i < count; i++) {


    document.write("<br>{ firstName:" + arrayObject[i].getitems("firstName") + ",<br>");
    document.write("<br>lastName:" + arrayObject[i].getitems("lastName") + ",<br>");
    document.write("<br>zip:" + arrayObject[i].getitems("zip") + " }<br>");
    document.write("<br>addres:" + arrayObject[i].getitems("address") + " }<br>");
    document.write("<br>state:" + arrayObject[i].getitems("state") + " }<br>");
    document.write("<br>mobile:" + arrayObject[i].getitems("mobile") + " }<br>");
  }
  document.write("]}<br>}");
}



function displayAdrressbookL() {
  book = new addressbookManagement();

  book = localStorage.getItem("lastname");
  var result = book.getAddressBook("addresBook");
  var arrayObject = [];
  arrayObject = result;
  console.log(arrayObject);

  document.write("{ addresBook:{[");
  for (var i = 0; i < count; i++) {


    document.write("<br>{ firstName:" + arrayObject[i].getitems("firstName") + ",<br>");
    document.write("<br>lastName:" + arrayObject[i].getitems("lastName") + ",<br>");
    document.write("<br>zip:" + arrayObject[i].getitems("zip") + " }<br>");
    document.write("<br>addres:" + arrayObject[i].getitems("address") + " }<br>");
    document.write("<br>state:" + arrayObject[i].getitems("state") + " }<br>");
    document.write("<br>mobile:" + arrayObject[i].getitems("mobile") + " }<br>");
  }
  document.write("]}<br>}");
}
/**
 * sortName function sort's record by names
 */
function sortName() {
  var result = book.getAddressBook("addresBook");

  var arrayObject = [];
  arrayObject = result;


  document.write("{ addresBook:{[");
  for (var i = 0; i < count; i++) {
    for (var j = i + 1; j < count; j++) {
      var previous = arrayObject[i].getitems("firstName");
      var next = arrayObject[j].getitems("firstName")
      if (previous > next) {
        temp = arrayObject[i];
        arrayObject[i] = arrayObject[j];
        arrayObject[j] = temp;

      }
    }
    book.setAdressBook("addresBook", arrayObject);


  }
  document.write("<br>Sorted by names<br>")
  displayAdrressbook();
}
/**
 * sorts records by zip
 */
function sortZip() {
  var result = book.getAddressBook("addresBook");

  var arrayObject = [];
  arrayObject = result;


  document.write("{ addresBook:{[");
  for (var i = 0; i < count; i++) {
    for (var j = i + 1; j < count; j++) {
      var previous = arrayObject[i].getitems("zip");
      var next = arrayObject[j].getitems("zip")
      if (previous > next) {
        temp = arrayObject[i];
        arrayObject[i] = arrayObject[j];
        arrayObject[j] = temp;

      }
    }
    book.setAdressBook("addresBook", arrayObject);


  }
  document.write("<br><br>Sorted by zip <br><br>")
  displayAdrressbook();
}
/**
 * edit function update record
 */
function edit() {
  var result = book.getAddressBook("addresBook");

  var arrayObject = [];
  arrayObject = result;
  var element = prompt("Enter name to update:")
  var address = prompt("Enter the updated address");
  var zip = prompt("Enter the updated zip");
  var city = prompt("Enter the updated city");
  var state = prompt("Enter the updated state");
  document.write("{ addresBook:{[");
  for (var i = 0; i < count; i++) {

    var name = arrayObject[i].getitems("firstName");
    if (name == element) {


      arrayObject[i].setitems("address", address);
      arrayObject[i].setitems("city", city);
      arrayObject[i].setitems("state", state);
      arrayObject[i].setitems("zip", zip);
      book.setAdressBook("addresBook", arrayObject);
      break;
    }



  }
  document.write("<br><br> address edited <br><br>")
  displayAdrressbook();
}

/**
 * call addresBook 3 times to add record
 */
for (var i = 0; i < 3; i++) {
  createAddressBook();

}
//DisplayAll record
displayAdrressbook();
// call sortName to sort and display
sortName();
// call sortZip to sort and display
sortZip();
// call edit function to edit or updateRecord
edit();
//displayAdrressbookL();
