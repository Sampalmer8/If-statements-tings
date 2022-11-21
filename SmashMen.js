// // Input
// let userName = prompt("What is your name?");

// // Process / Output
// if (userName === "Sam") {
//     alert("Sweet name bro");
// } else {
//     alert("My name is better thean yours. Bozo. L + ratio. Skill Issue.")
// }



// // Input
// let height = +prompt("How tall are you in inches?");

// // Process / Output
// if (height < 82) {
//     alert("Too short you lil' midget.");
// } else {
//     alert("Yeah you aight cuh.");
// }



// // Input
// let num = +prompt("Choose any number in the world:");

// // Process / Output
// if (num < 0) {
//     alert("That number do be negative just like the amount of women you get");
// } else if (num === 0) {
//     alert("You entered the amount of influence a father figure has had in your life");
// } else {
//     alert("That's positive like your AIDS test result my boy");
// }



// // Input
// let grade = +prompt("Enter your probably crappy average in school last year");

// // Process / Output
// if (grade >= 90) {
//     alert("Nest year will be aight cuh");
// } else if (grade >= 70) {
//     alert("You'll do fine I guess");
// } else if (grade >= 50) {
//     alert("You're dumb fr bro. Skill issue");
// } else {
//     alert("You gotta have something wrong with you");
// }



// // Input
// let divis2 = +prompt("Enter a number");
// let number = divis2 / 2

// // Process / Output
// if (Number.isInteger(number)) {
//     alert("Yea that's divisible by 2 my boy");
// } else {
//     alert("Nah boy that ain't divisible by 2");
// }



// Input
let x = +prompt("Enter a x coordinate");
let y = +prompt("Enter a y coordinate");

// Process / Output
if (x > 0 && y > 0 ) {
    alert("That do be quadrant 1 in the top right");
} else if (x < 0 && y > 0) {
    alert("That's in the second quadrant in the top left");
} else if (x < 0 && y < 0) {
    alert("That's the third quadrant in the bottom left");
} else if (x > 0 && y < 0) {
    alert("That's the fourth and final quadrant in the bottom right");
} else if (x === 0 && y === 0) {
    alert("That's the origin in the center of the graph bro");
} else if (x === 0 && y != 0) {
    alert("That's on the the y-axis");
} else {
    alert("That's on the x-axis boy");
}