// // // Code your solutions in this file

const person = ["Lisa", "Kaitlin", "Jan"];
const event = "birthday";

function writeCards(person, event) {
  console.log(person);
  let thankYouCards = [];
  for (let i = 0; i < person.length; i++) {
    thankYouCards.push(
      `Thank you, ${person[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankYouCards;
}

writeCards(person, event);

// function countDown(num) {
//   while (num > 0) {
//     console.log(num);
//     num -= 1;
//   }
//   console.log(num);
// }
