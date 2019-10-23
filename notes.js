const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = [];

// Index 0
rl.question('What is your Name? (NickNames are fine too) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  array.push(answer);

  // index 1
rl.question('What\'s an activity you like doing?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    array.push(answer);

// index 2
rl.question('What do you listen to while doing that?', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    array.push(answer);

// index 3
rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    array.push(answer);

// index 4
rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  array.push(answer);

// index 5
rl.question('Which sport is your absolute favourite?', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  array.push(answer);

// index 6
rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  array.push(answer);
  console.log(array);

  // paragragh output goes here
  rl.close();

});

});

});

});

});

});

});

