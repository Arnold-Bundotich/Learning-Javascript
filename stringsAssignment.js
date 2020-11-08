//Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million
function drEvil(amount) {
    if (amount == 1000000) {
      return amount + " dollars (pinky)";
    } else {
      return amount + " dollars";
    }
  }
 drEvil(1000000);
 console.log(drEvil(1000000));
 console.log(drEvil(100));



 function mixUp(x, y) {
    return y.slice(0, 2) + x.slice(2) + " " + x.slice(0, 2) + y.slice(2);
  }
mixUp("pop", "Can");
mixUp;