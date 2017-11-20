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
      return null;
    else {
      var current = head;
      var x = [];
      for (var i = 0; i < count; i++) {
        x[i] = current.data;
        current = current.next;
      }
    }
    for (var i = 0; i < x.length; i++) {
      console.log(x[i] + " ");
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
}
//creating instance of LinkedList
var list = new LinkedList();
//adding elements to list
list.AddFirst(6);
list.AddAt(99, 0);

list.AddAt(95, 0);
list.AddAt(66, 2);
var count = list.getCount();
console.log("Number of elements:" + count);

//displaying all elements
list.DisplayAll();

var result = list.pop();
var count2 = list.getCount();
console.log("Number of elements:" + count2);
console.log("Poped element:" + result);
list.DisplayAll();
