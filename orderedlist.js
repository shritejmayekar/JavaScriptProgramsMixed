/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:ordered LinkedList to all basic operation of pop and push and insert at
 *   position,etc.
 *
 **/
/**
 * LinkedList function to do all operation
 */
function LinkedList() {
  var head = null;
  var count = 0;

  this.getCount = function() {
    return count;
  }
  /**
  * AddFirst function add elements at the first position
  */
  this.AddFirst = function(val) {
    var node = {
      data: val,
      next: head
    };
    head = node;

    count++;
  }
  /**
   * display function show all the elements
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
      document.write(x[i] + " ");
    }
  }
  /**
   * AddAt function just add elements according to position index
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
    var pos = this.positionSearch(data);
    for (var i = 0; i < pos; i++) {
      prev = current;
      current = current.next;
      next = current.next;
    }
    prev.next = next;
    count--;
  }
  /**
   * removeEnd function remove element from the end
   */
  this.removeEnd = function() {
    var current = head;
    for (var i = 0; i < count - 1; i++) {
      current = current.next;
    }
    current.next = null;
    count--;
  }
/**
* bubbleSort function sorts the element of the list
*/
  this.bubbleSort = function() {
    var tempVar;
    var current = head;

    for (var i = 0; i < count; i++) {

      for (var j = i + 1; j < count; j++) {
        while(current.next!=null) {
          if(current.data>current.next.data) {
              tempVar=current.data;
              current.data=current.next.data;
              current.next.data=tempVar;
          }
          current=current.next;
        }
        current=head;
    }

  }
}
}
//creating instance of linkedlist
var list = new LinkedList();
var flag='y';
while(flag=='y') {
var number = prompt("Enter the number:");
list.AddFirst(number);
flag=prompt("Wanna continue y:")

}
//a.AddAt(16,3);
