// Stand in Line(queue)
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const items = arr.shift();
    return items;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
//   Understanding Boolean Values
function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
//  here we changed the return value from false to true 
    // Only change code above this line
  }
//   Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if(wasThatTrue == true){
      return "Yes, that was true";
    }
    return "No, that was false";
  
  
    // Only change code above this line
  
  }

