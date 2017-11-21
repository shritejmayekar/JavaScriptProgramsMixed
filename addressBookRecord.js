/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description: AddressBookRecord all function
 *
 **/
//Declare variables
var addresBookArray = [];
var selectedIndex = -1;
var tempfirstName;
var templastName;
//Initalize the elements if localStorage contains the previous value so parse in array
function init() {
  if (localStorage.AddressBookRecord) {
    addresBookArray = JSON.parse(localStorage.AddressBookRecord);
  }
}
/**
 * createAddressBook function will add person to AddressBookRecord
 */
function createAddressBook() {

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
  var mobile = document.getElementById('mobile').value;
  if (validate(firstName, lastName, address, city, state, zip, mobile)) {


    var addressObject = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      state: state,
      zip: zip,
      mobile: mobile
    };

    if (selectedIndex === -1) {
      addresBookArray.push(addressObject);
    } else {
      addresBookArray.splice(selectedIndex, 1, addressObject);
    }

    localStorage.AddressBookRecord = JSON.stringify(addresBookArray);
    init();
    document.getElementById("flag").innerHTML = "Record Added";
  } else {
    document.getElementById("flag2").innerHTML = "*This is required";
  }


}

function validate(firstName, lastName, addres, city, state, zip, mobile) {
  if (firstName == '' || lastName == '' || addres == '' || city == '' || state == '' || zip == '' || mobile == '') {


    return false;
  } else {
    return true;
  }
}
/**
 * displayRecord function displays all the records in an addresBook
 */
function displayRecord() {

  if (localStorage.AddressBookRecord) {
    addresBookArray = JSON.parse(localStorage.AddressBookRecord);
    document.getElementById("tablerows").innerHTML = "";
    for (var i = 0; i < addresBookArray.length; i++) {
      var table = document.getElementById("tablerows");
      var row = table.insertRow();
      var firstNameCell = row.insertCell(0);
      var lastNameCell = row.insertCell(1);
      var addressCell = row.insertCell(2);
      var cityCell = row.insertCell(3);
      var stateCell = row.insertCell(4);
      var zipCell = row.insertCell(5);
      var mobileCell = row.insertCell(6);
      firstNameCell.innerHTML = addresBookArray[i].firstName;
      lastNameCell.innerHTML = addresBookArray[i].lastName;
      addressCell.innerHTML = addresBookArray[i].address;
      cityCell.innerHTML = addresBookArray[i].city;
      stateCell.innerHTML = addresBookArray[i].state;
      zipCell.innerHTML = addresBookArray[i].zip;
      mobileCell.innerHTML = addresBookArray[i].mobile;

    }

  }


}
/**
 * sortName function sort the records according to Name
 */
function sortName() {
  if (localStorage.AddressBookRecord) {
    addresBookArray = JSON.parse(localStorage.AddressBookRecord);

    for (var i = 0; i < addresBookArray.length; i++) {

      for (var j = i + 1; j < addresBookArray.length; j++) {
        var previous = addresBookArray[i].firstName;
        var next = addresBookArray[j].firstName;
        console.log(previous + " " + next);
        if (previous > next) {
          temp = addresBookArray[i];
          addresBookArray[i] = addresBookArray[j];
          addresBookArray[j] = temp;
        }
      }
    }



  }
  localStorage.AddressBookRecord = JSON.stringify(addresBookArray);
  init();

  displayRecord();

}
/**
 * sortZip function sort the records according to zip
 */
function sortZip() {
  if (localStorage.AddressBookRecord) {
    addresBookArray = JSON.parse(localStorage.AddressBookRecord);

    for (var i = 0; i < addresBookArray.length; i++) {

      for (var j = i + 1; j < addresBookArray.length; j++) {
        var previous = addresBookArray[i].zip;
        var next = addresBookArray[j].zip;
        console.log(previous + " " + next);
        if (previous > next) {
          temp = addresBookArray[i];
          addresBookArray[i] = addresBookArray[j];
          addresBookArray[j] = temp;
        }
      }
    }



  }
  localStorage.AddressBookRecord = JSON.stringify(addresBookArray);
  init();

  displayRecord();
}
/**
 * clear function clear the all fields
 */
function clearRecord() {
  document.location.reload(true);
}
/**
 * update function update records
 */
function update() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  tempfirstName = firstName;
  templastName = lastName;
  var flag = 0;
  if (localStorage.AddressBookRecord) {
    addresBookArray = JSON.parse(localStorage.AddressBookRecord);

    for (var i = 0; i < addresBookArray.length; i++) {

      if (firstName == addresBookArray[i].firstName && lastName == addresBookArray[i].lastName) {
        flag = 1;
        break;
      }

    }
    if (flag == 1) {
      document.getElementById('visible').style.visibility = "visible";
      document.getElementById('flagSearch').innerHTML = "Record Found";
      console.log("true");
    } else {
      console.log("false");
      document.getElementById('visible').style.visibility = "hidden";
      document.getElementById('flagSearch').innerHTML = "Record Not Found";
    }



  }
  localStorage.AddressBookRecord = JSON.stringify(addresBookArray);
  init();



}
/**
 * updateRecord function update 's the specific record update
 */
function updateRecord() {
  var firstName = tempfirstName;
  var lastName = templastName;
  var flag = 0;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
  if (address == '' || city == '' || state == '' || zip == '') {
    document.getElementById('flagUpdate').innerHTML = "<h4 style='color:red'>"+
    "*fields required</h4>";
    return false;
  }
  if (localStorage.AddressBookRecord) {
    addresBookArray = JSON.parse(localStorage.AddressBookRecord);

    for (var i = 0; i < addresBookArray.length; i++) {

      if (firstName == addresBookArray[i].firstName && lastName == addresBookArray[i].lastName) {

        addresBookArray[i].address = address;
        addresBookArray[i].city = city;
        addresBookArray[i].state = state;
        addresBookArray[i].zip = zip;
        console.log("true");
        document.getElementById('updateFlag').innerHTML = "Record is updated";
        break;
      }

    }



  }
  localStorage.AddressBookRecord = JSON.stringify(addresBookArray);
  init();



}
/**
 * deleteRecord deletes the Record
 */
function deleteRecord() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;

  var flag = 0;
  if (localStorage.AddressBookRecord) {
    addresBookArray = JSON.parse(localStorage.AddressBookRecord);

    for (var i = 0; i < addresBookArray.length; i++) {

      if (firstName == addresBookArray[i].firstName && lastName == addresBookArray[i].lastName) {
        flag = 1;
        addresBookArray.splice(i, 1);

        break;
      }

    }
    if (flag == 1) {
      document.getElementById('deleteFlag').innerHTML = "Record deleted Success";
    } else {
      document.getElementById('deleteFlag').innerHTML = "Record not found";
    }


  }
  localStorage.AddressBookRecord = JSON.stringify(addresBookArray);
  init();



}

function remove() {
  document.getElementById('firstName').value = "";
  document.getElementById('lastName').value = "";
  document.getElementById('address').value = "";
  document.getElementById('city').value = "";
  document.getElementById('state').value = "";
  document.getElementById('zip').value = "";
  document.getElementById('mobile').value = "";
}
