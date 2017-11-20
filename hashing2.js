/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:List for the hashmap
 *
 **/
//use prototype for creating methods
function LinkedList2() {
  var head = null;
  var count = 0;

  this.getCount = function() {
    return count;
  }

  //AddFirst function add element at first position
  this.AddFirst = function(val) {
    var node = new Node(head, val);
    /*{
      data: val,
      next: head
    };*/
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
    document.write("{");
    for (var i = 0; i < x.length; i++) {
      console.log(x[i] + " ");
      document.write(x[i] + " ");
    }
    document.write("}");
  }
  /**
   * getAll function returns the list as an array
   */
  this.getAll = function() {
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
    return x;
  }
  /**
   * AddAt function just add elements according to position index
   */
  this.AddAt = function(data, index) {

    if (index == 0) {
      this.AddFirst(data);
    } else if (index > -1 && index < count) {

      var node = new Node(null, data);
      /*{
              data: data,
              next: null
            };

        */
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
}
/**
 * Node function creates instance and key/value pair.
 */
function Node(node, data) {
  this.next = node;
  this.data = data;
}
