/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
//

function handValue (hand) {
    let total = 0 // total card
    let number = parseInt(hand[i]) // make string to number, so I don't need the decare the 1-10 number.
    for (let i = 0 ; i < hand.length ; i++) {
        if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
            total += 10;  // J Q K = 10
        }
        // if (hand[i] <= 10) {
        //     total += hand[i]
        }  else if (hand[i] === "A") {
          // A can be 1 or 11
          if (total + 11 <= 21  && total + 11 + hand[i] <= 21) {
              total += 11  // if A = 11 , and total more than 21
          } else (
              total += 1  // Make A = 1
          )
        }
  return total ;
}

/// A default to 1 , then loop agin to see any number have A again then reset to

//////---------------------------------------//////


}




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
