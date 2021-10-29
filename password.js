console.log('Welcome to the password validator tool!')

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What password would you like to validate?"), function(input){
	if (input.minlength >= 10) {
        console.log('Success! Your password is 10 characters long or more.')
    } else {
        console.log('Password does not meet the character requirement. Please try again.')
}