// // // Code your solutions in this file
// const personToThank = ["Lisa", "Kaitlin", "Jan"], "birthday";

// function writeCards(person, event) {
//   for (let i = 0; i < personToThank.length; i++) {
//     console.log(
//       `Thank you, ${person}, for the wonderful ${event} gift!`
//     );
//   }

//   return personToThank;
// }

function writeCards(person, event) {
  let thankYouCards = [];
  for (let i = 0; i < person.length; i++) {
    thankYouCards.push(
      `Thank you, ${person[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankYouCards;
}

function countDown(startingNumber) {
  while (startingNumber > 0) {
    console.log(startingNumber);
    startingNumber -= 1;
  }
  console.log(startingNumber);
}
