/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:LinkedList for all CRUD operation.
 *
 **/
/**
* LinkedList craetion and initialization
*/
function LinkedList() {
  var head = null;
  var count = 0;

  this.getCount = function() {
    return count;
  }
  //AddFirst function add element at first position
  this.AddFirst = function(val) {
    var node = {
      data: val,
      next: head
    };
    head = node;

    count++;
  }
  /**
   * display the all elements in the list
   */
  this.DisplayAll = function() {
    if (head == null)
      console.log("empty list")
    else {
      var current = head;
      var x = [];
      for (var i = 0; i < count; i++) {
        x[i] = current.data;
        current = current.next;
      }
    }
    document.write("<br>");
    for (var i = 0; i < x.length; i++) {
      console.log(x[i] + " ");
      document.write(x[i]+" ");
    }
  }

  /**
   * getAll function returns the list as an array
   */
  this.AddAt = function(data, index) {

    if (index == 0) {
      this.AddFirst(data);
    } else if (index > -1 && index < count) {

      var node = {
        data: data,
        next: null
      };

      var previous;
      var current = head;
      var i = 0;

      while (i++ < index) {
        previous = current;
        current = current.next;
      }

      previous.next = node;
      node.next = current;

      count++;
    } else {
      alert("out of range");
    }
  }
  /**
   * pop function will return the first element of the list and remove
   */
  this.pop = function() {
    if (head == null)
      return null;
    else {
      var value = head.data;
      head = head.next;
      count--;
      return value;

    }
  }
  /**
   * search function search element in list and returns boolean true/false
   * based on found and not found
   */
  this.search = function(data) {
    var current = head;
    if (head == null)
      return false;
    else {
      for (var i = 0; i < count; i++) {
        if (current.data == data)
          return true;
        current = current.next;
      }
      return false;
    }
  }
  /**
   * positionSearch function search elements position and returns position
   */
  this.positionSearch = function(data) {
    var current = head;
    if (head == null)
      return -1;
    else {
      for (var i = 0; i < count; i++) {
        if (current.data == data)
          return i;
        current = current.next;
      }
      return -1;
    }
  }
  /**
   * remove function remove elements from the list
   */
  this.remove = function(data) {
    var current = head;
    var prev;
    var next;
    var pos=this.positionSearch(data);
    for (var i = 0; i < pos; i++) {
      prev=current;
        current=current.next;
        next=current.next;
    }
    prev.next=next ;
    count--;
  }
  /**
   * removeEnd function remove element from the end
   */
  this.removeEnd=function() {
    var current=head;
    for (var i = 0; i < count-1; i++) {
        current=current.next;
    }
    current.next=null;
    count--;
  }
}

//creating linkedlist instance
var alist = new LinkedList();
alist.AddFirst(6);
alist.AddAt(99, 0);
alist.AddAt(95, 0);
alist.AddAt(66, 2);
var count = alist.getCount();
console.log("Number of elements:" + count);
alist.DisplayAll();

//a.removeEnd();
alist.remove(99);
alist.remove(66);
alist.remove(6);
//var x=a.positionSearch(99);
alist.DisplayAll();
//document.write(x);
/*
var x = prompt("Enter value to search");
var res = a.search(x);
alert("Found:" + res);
*/
var flag='y';
while(flag=='y') {
var elementNumber=prompt("Enter the number:");
alist.AddFirst(elementNumber);
flag=prompt("Wanna continue y:")

}
alist.AddAt(16,3);
alist.DisplayAll();
