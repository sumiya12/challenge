/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

// 2. Store the rank of a player
let urjih = prompt("5*5=?");
let score = 0;

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
if (urjih == 25) {
  score += 1;
  alert("zov +1 onoo");
} else {
  score += 0;
  alert("buruu mian bee");
}
let huvaa = prompt("taviig tavd huvaa?");
if (huvaa == 1) {
  score += 1;
  alert("zov +1 onoo");
} else {
  score += 0;
  alert("buruu 0 onoo");
}
let hasah = prompt("100-23=?");
if (hasah == 77) {
  score += 1;
  alert("zov +1 onoo");
} else {
  score += 0;
  alert("buruu 0 onoo");
}
let nemeh = prompt("100+23=?");
if (nemeh == 123) {
  score += 1;
  alert("zov +1 onoo");
} else {
  score += 0;
  alert("buruu 0 onoo");
}
let kb = prompt("5 iin k2=?");
if (kb == 25) {
  score += 1;
  alert("zov +1 onoo");
} else {
  score += 0;
  alert("buruu 0 onoo");
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
let rank;
const innerHtml = document.querySelector("main");
if (score >= 1 && score <= 2) {
  rank = "bronze";
} else if (score >= 3 && score <= 4) {
  rank = "silver";
} else if ((score = 5)) {
  rank = "Gold";
} else {
  rank = "No crown";
}
// 3. Select the <main> HTML element
innerHtml.innerHtml = `<p>${rank}</p>`;
// 6. Output results to the <main> element
