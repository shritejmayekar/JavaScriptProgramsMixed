/**
 *
 *@author Shritej
 *@version 1.0
 *@Since 16-11-2017
 *Description:Regex checker and replace the given content with user
 *
 **/
//var expression = "(5+6)*(7+8)/(4+3)(5+6)*(7+8)/(4+3)";
//Declare variables
var expression = prompt("Enter expression:");
var counterRoundBracket = 0;
var counterCurlyBracket = 0;
var counterSquareBracket = 0;

/**
 * function stack to push and pop elements from stack list
 */
function Stack() {
  var head = null;
  var count = 0;

  this.getCount = function() {
    return count;
  }

  this.push = function(val) {
    var node = {
      data: val,
      next: head
    };
    head = node;

    count++;
  }
  /**
   * display all records
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
   * pop function poped the first element of the list
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
   * empty function returns the boolean stack empty or not
   */
  this.isEmpty = function() {
    if (count == 0)
      return true;
    else {
      return false;
    }
  }
}
//stack instance creation
var stack = new Stack;

/**
 * stack push function when we spot opening {, [ and ( Brackets.
 */
for (var i = 0; i < expression.length; i++) {

  if (expression.charAt(i) == '(') {
    counterRoundBracket++;
    stack.push(expression.charAt(i));
  }
  if (expression.charAt(i) == '{') {
    counterCurlyBracket++;
    stack.push(expression.charAt(i));
  }
  if (expression.charAt(i) == '[') {
    counterSquareBracket++;
    stack.push(expression.charAt(i));
  }

}
/**
 * stack pop function when you pop elements based on matching closing Brackets.
 */
for (var i = 0; i < counterRoundBracket; i++) {
  if (expression.charAt(i) == ')')
    stack.pop();
}
for (var i = 0; i < counterCurlyBracket; i++) {
  if (expression.charAt(i) == '}')
    stack.pop();
}
for (var i = 0; i < counterSquareBracket; i++) {
  if (expression.charAt(i) == ']')
    stack.pop();
}

//stack balanced expression condition
if (stack.isEmpty()) {
  document.write("balanced expression");
} else {
  document.write("not balanced expression");
}

//stack balanced expression condition
