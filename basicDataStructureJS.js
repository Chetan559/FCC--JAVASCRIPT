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

  // Comparisons with the Logical Or Operator
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val >20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);
  // Introducing Else Statements
  
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);
  // Introducing Else If Statements
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else{
  
     return "Between 5 and 10";
  }}
  
  testElseIf(7) 
  // Logical Order in If Else Statements
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    }else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);
  // Chaining If Else Statements
  function testSize(num) {
    // Only change code below this line
   if (num < 5){ return "Tiny";}
   else if (num < 10){ return "Small";}
   else if (num < 15){ return "Medium";}
   else if (num < 20){ return "Large";}
   else { return "Huge"}
  
    // Only change code above this line
  }
  
  testSize(7);
  // Golf Code
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){return "Hole-in-one!";}
  else if (strokes <= par-2){return "Eagle";}
  else if (strokes <= par-1){return "Birdie";}
  else if (strokes <= par){return "Par";}
  else if (strokes <= par+1){return "Bogey";}
  else if (strokes <= par+2){return "Double Bogey";}
  else if (strokes >= par+3){return "Go Home!";}
  // Only change code above this line
}

golfScore(5, 4);
// Selecting from Many Options with Switch Statements

