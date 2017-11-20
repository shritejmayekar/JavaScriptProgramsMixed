/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:LinkedList to all basic operation of pop and push and insert at
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
   * remove function remove elements from the list
   */
  this.removeEnd = function() {
    var current = head;
    for (var i = 0; i < count - 1; i++) {
      current = current.next;
    }
    current.next = null;
    count--;
  }
}

var flag = 0;
//creating instance of linkedlist
var list = new LinkedList();


var word = prompt("Enter the word:");
for (var i = 0; i < word.length; i++) {
  list.AddFirst(word.charAt(i));
}
for (var i = 0; i < word.length / 2; i++) {
  if (word.charAt(i) != list.pop())
    flag = 1;
}

//pallindrome not Success condition
if (flag == 1)
  document.write("Not an pallindrome");
else {
  document.write("it is an pallindrome")
}
